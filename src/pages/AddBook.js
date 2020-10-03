import React, { useState } from "react";
import { Navbar, Sidebar } from "./components";
import { CustomTextInput, CustomTextArea, CustomModal } from "../components";
import { BiBookAdd } from "react-icons/bi";

function AddBook() {
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
        <div className="row">
          <div className="col-md-4 mb-5 d-flex justify-content-center">
            <Sidebar />
          </div>
          <div className="col-md-8 mb-5">
            <h1 style={style.txtList} className="mb-4">
              Add Book
            </h1>
            <form onSubmit={(e) => handleSubmit(e)}>
              <CustomTextInput
                width={"100%"}
                borderColor="#BCBCBC"
                name="title"
                type="text"
                style={{ marginTop: 10, marginBottom: 15 }}
                placeholder="Title"
                bgcolor="rgb(210,210,210,0.25)"
                required
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <CustomTextInput
                width={"100%"}
                borderColor="#BCBCBC"
                name="pubdate"
                type="number"
                style={{ marginTop: 15, marginBottom: 15 }}
                placeholder="Publication Date"
                bgcolor="rgb(210,210,210,0.25)"
                required
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
              <CustomTextInput
                width={"100%"}
                borderColor="#BCBCBC"
                name="category"
                type="text"
                style={{ marginTop: 15, marginBottom: 15 }}
                placeholder="Category"
                bgcolor="rgb(210,210,210,0.25)"
                required
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
              <CustomTextInput
                width={"100%"}
                borderColor="#BCBCBC"
                name="page"
                type="number"
                style={{ marginTop: 15, marginBottom: 15 }}
                placeholder="Pages"
                bgcolor="rgb(210,210,210,0.25)"
                required
                value={pages}
                onChange={(e) => {
                  setPages(e.target.value);
                }}
              />
              <CustomTextInput
                width={"100%"}
                borderColor="#BCBCBC"
                name="isbn"
                type="text"
                style={{ marginTop: 15, marginBottom: 15 }}
                placeholder="ISBN"
                bgcolor="rgb(210,210,210,0.25)"
                required
                value={isbn}
                onChange={(e) => {
                  setIsbn(e.target.value);
                }}
              />
              <CustomTextArea
                width={"100%"}
                height={207}
                borderColor="#BCBCBC"
                name="about"
                style={{ marginTop: 15, marginBottom: 15, height: 200 }}
                placeholder="About This Book"
                bgcolor="rgb(210,210,210,0.25)"
                required
                value={about}
                onChange={(e) => {
                  setAbout(e.target.value);
                }}
              />
              <CustomTextInput
                width={"100%"}
                borderColor="#ffffff"
                name="file"
                type="file"
                style={{ marginTop: 20, marginBottom: 15 }}
                placeholder="Attache Book File"
                bgcolor="#ffffff"
                required
                value={file}
                onChange={(e) => {
                  setFile(e.target.value);
                }}
              />
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
      <CustomModal
        height={142}
        width={742}
        bgcolor="#E6F2FD"
        show={show}
        name=""
        close={() => setShow(false)}
      >
        <h5 style={style.popup}>
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
    position: "absolute",
    width: 669,
    height: 63,
    left: 37,
    top: 39,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    color: "#469F74",
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
export default AddBook;
