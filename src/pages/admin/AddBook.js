import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { CgAttachment } from "react-icons/cg";
import CustomModal from "../../components/CustomModal";
import CustomTextInput from "../../components/CustomTextInput";
import { BiBookAdd } from "react-icons/bi";

function AddBookAdmin() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [pages, setPages] = useState("");
  const [isbn, setIsbn] = useState("");
  const [about, setAbout] = useState("");
  const [file, setFile] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setShow(true);
    alert(
      "Title: " +
        title +
        "\nPublish Date: " +
        date +
        "\nCategory: " +
        category +
        "\nPages: " +
        pages +
        "\nISBN: " +
        isbn +
        "\nAbout: " +
        about +
        "\nFile: " +
        file
    );
  }
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 style={style.txtList} className="mb-4">
          Add Book
        </h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <CustomTextInput
            name="title"
            type="text"
            style={{ marginTop: 10, marginBottom: 15 }}
            placeholder="Title"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <CustomTextInput
            name="pubdate"
            type="number"
            style={{ marginTop: 15, marginBottom: 15 }}
            placeholder="Publication Date"
            required
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <CustomTextInput
            name="category"
            type="text"
            style={{ marginTop: 15, marginBottom: 15 }}
            placeholder="Category"
            required
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <CustomTextInput
            name="page"
            type="number"
            style={{ marginTop: 15, marginBottom: 15 }}
            placeholder="Pages"
            required
            value={pages}
            onChange={(e) => {
              setPages(e.target.value);
            }}
          />
          <CustomTextInput
            name="isbn"
            type="text"
            style={{ marginTop: 15, marginBottom: 15 }}
            placeholder="ISBN"
            required
            value={isbn}
            onChange={(e) => {
              setIsbn(e.target.value);
            }}
          />
          <textarea
            className="form-control"
            name="about"
            style={{ marginTop: 15, marginBottom: 15, height: 200 }}
            placeholder="About This Book"
            required
            value={about}
            onChange={(e) => {
              setAbout(e.target.value);
            }}
          />
          <div class="form-group">
            <label
              for="file"
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
              <CgAttachment size={30} color="#333333" /> Attache Book File
            </label>
            <input
              type="file"
              class="form-control-file"
              id="file"
              style={{ display: "none" }}
              required
              value={file}
              onChange={(e) => {
                setFile(e.target.value);
              }}
            />
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
      <CustomModal show={show} onHide={() => setShow(false)}>
        <h5 style={style.popup}>Book has been added successfully</h5>
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
export default AddBookAdmin;
