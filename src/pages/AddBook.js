import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Navbar } from "../components/Navbar/";
import { Sidebar } from "../components/Sidebar";
import { CgAttachment } from "react-icons/cg";
import CustomModal from "../components/CustomModal";
import CustomTextInput from "../components/CustomTextInput";
import { BiBookAdd } from "react-icons/bi";
import { API } from "../config/api";

function AddBook() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const SUPPORTED_FORMATS_IMAGE = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];
  const SUPPORTED_FORMATS_BOOK = ["application/pdf", "application/epub+zip"];

  const { isLoading, data: categoryData } = useQuery(
    "getCategoryBook",
    async () => await API.get("/category")
  );

  const {
    handleSubmit,
    getFieldProps,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: "",
      date: "",
      category: "",
      page: "",
      isbn: "",
      about: "",
      thumbnail: "",
      book: "",
    },
    validateOnBlur: true,
    validationSchema: Yup.object().shape({
      title: Yup.string()
        .required("Harus diisi!")
        .min(8, "Harus 8 karakter atau lebih!"),
      date: Yup.string()
        .required("Harus diisi!")
        .min(3, "Harus 3 karakter atau lebih!"),
      category: Yup.string().required("Harus diisi!"),
      page: Yup.number()
        .typeError("Harus angka!")
        .required("Harus diisi!")
        .min(1, "Harus 1 karakter atau lebih"),
      isbn: Yup.number()
        .typeError("Harus angka!")
        .required("Harus diisi!")
        .min(1, "Harus 1 karakter atau lebih"),
      about: Yup.string()
        .required("Harus diisi!")
        .min(8, "Harus 8 karakter atau lebih!"),
      thumbnail: Yup.mixed()
        .required("Harus dipilih!")
        .test(
          "fileFormat",
          "Maaf hanya support image file",
          (value) => value && SUPPORTED_FORMATS_IMAGE.includes(value.type)
        ),
      book: Yup.mixed()
        .required("Harus dipilih!")
        .test(
          "fileFormat",
          "Maaf hanya support pdf/epub",
          (value) => value && SUPPORTED_FORMATS_BOOK.includes(value.type)
        ),
    }),
    onSubmit: (values) => {
      addBook(values);
    },
  });

  const [addBook] = useMutation(async (values) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      // const body = JSON.stringify({
      //   title: values.title,
      //   publication: values.date,
      //   id_category: values.category,
      //   pages: values.page,
      //   ISBN: values.isbn,
      //   aboutBook: values.about,
      //   file: values.book.name,
      //   thumbnail: values.thumbnail.name,
      //   status: null,
      // });

      var formData = new FormData();
      formData.append("title", values.title);
      formData.append("publication", values.date);
      formData.append("id_category", values.category);
      formData.append("pages", values.page);
      formData.append("ISBN", values.isbn);
      formData.append("aboutBook", values.about);
      formData.append("thumbnail", values.thumbnail);
      formData.append("file", values.book);
      formData.append("status", "");

      for (var value of formData.values()) {
        console.log(value);
      }

      const res = await API.post("/book", formData, config);
      console.log(res.data);
      setMessage(res.data.message);
      setShow(true);
    } catch (err) {
      console.log(err);
      setMessage(err.message);
      setShow(true);
    }
  });

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3 mb-5 d-flex flex-column">
            <Sidebar />
          </div>
          <div className="col-md-9 mb-5">
            <h1 style={style.txtList} className="mb-4">
              Add Book
            </h1>
            <form onSubmit={handleSubmit}>
              <CustomTextInput
                name="title"
                type="text"
                placeholder="Title"
                {...getFieldProps("title")}
                error={touched.title ? errors.title : ""}
              />
              <CustomTextInput
                name="date"
                type="text"
                placeholder="Publication Date"
                {...getFieldProps("date")}
                error={touched.date ? errors.date : ""}
              />
              <select
                className="form-control"
                name="category"
                style={style.inputGender}
                {...getFieldProps("category")}
              >
                <option>Pilih category</option>
                {isLoading ? (
                  <option>Loading</option>
                ) : (
                  categoryData.data.data.categories.map((category, index) => {
                    return <option value={category.id}>{category.name}</option>;
                  })
                )}
              </select>
              <span className="help-block text-danger">
                {touched.category ? errors.category : ""}
              </span>
              <CustomTextInput
                name="page"
                type="text"
                placeholder="Pages"
                {...getFieldProps("page")}
                error={touched.page ? errors.page : ""}
              />
              <CustomTextInput
                name="isbn"
                type="text"
                placeholder="ISBN"
                {...getFieldProps("isbn")}
                error={touched.isbn ? errors.isbn : ""}
              />
              <textarea
                className="form-control"
                name="about"
                style={{ marginTop: 15, height: 200 }}
                placeholder="About This Book"
                {...getFieldProps("about")}
                //error={touched.about ? errors.about : ""}
              />
              <span className="help-block text-danger">
                {touched.about ? errors.about : ""}
              </span>
              <div className="form-group" style={{ marginTop: 20 }}>
                <label
                  htmlFor="thumbnail"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: 218,
                    padding: 10,
                    border: "2px solid #BCBCBC",
                    backgroundColor: "rgba(210, 210, 210, 0.25)",
                    color: "#333333",
                  }}
                >
                  <CgAttachment size={30} color="#333333" />{" "}
                  {values.thumbnail.name
                    ? values.thumbnail.name
                    : "Attache Book Image"}
                </label>
                <input
                  type="file"
                  className="form-control-file"
                  id="thumbnail"
                  name="thumbnail"
                  style={{ display: "none" }}
                  //onBlur={handleBlur}
                  onChange={(e) => {
                    setFieldValue("thumbnail", e.target.files[0]);
                  }}
                />
                <span className="help-block text-danger">
                  {touched.thumbnail ? errors.thumbnail : ""}
                </span>
              </div>
              <div className="form-group" style={{ marginTop: 20 }}>
                <label
                  htmlFor="file"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: 218,
                    padding: 10,
                    border: "2px solid #BCBCBC",
                    backgroundColor: "rgba(210, 210, 210, 0.25)",
                    color: "#333333",
                  }}
                >
                  <CgAttachment size={30} color="#333333" />{" "}
                  {values.book.name ? values.book.name : "Attache Book File"}
                </label>
                <input
                  type="file"
                  className="form-control-file"
                  id="file"
                  name="book"
                  style={{ display: "none" }}
                  //onBlur={handleBlur}
                  onChange={(e) => {
                    setFieldValue("book", e.target.files[0]);
                  }}
                />
                <span className="help-block text-danger">
                  {touched.book ? errors.book : ""}
                </span>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-primary mx-2"
                  style={{ backgroundColor: "#EE4622" }}
                >
                  Add Book <BiBookAdd />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <CustomModal show={show} onHide={() => setShow(false)}>
        <h5 style={style.popup}>
          {message} <br />
          Thank you for adding your own books to our website, please wait 1 x 24
          hours to verify whether this book is your writing
        </h5>
      </CustomModal>
    </>
  );
}

const style = {
  txtList: {
    fontFamily: "Times New Roman",
    fontStyle: "normal",
    fontWeight: "bold",
  },
  popup: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    color: "#469F74",
    margin: 0,
    textAlign: "center",
  },
};
export default AddBook;
