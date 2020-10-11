import React, { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { useParams, useHistory } from "react-router-dom";
import bookJson from "../assets/book.json";
import { Navbar } from "../components/Navbar/";
import { Sidebar } from "../components/Sidebar";
import CustomModal from "../components/CustomModal";

function Book() {
  const { id } = useParams();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const book = bookJson.filter((item) => item.id === parseInt(id));
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3 mb-5 d-flex flex-column">
            <Sidebar />
          </div>
          <div className="col-md-9 mb-5">
            <div className="mb-3">
              <div className="card w-100" style={{ borderWidth: 0 }}>
                <div className="row">
                  <div className="col-md-4 d-flex justify-content-center flex-column">
                    <img
                      alt="book"
                      className="figure-img img-fluid rounded"
                      src={require(`../assets/img/${book[0].imageLink}`)}
                      style={{ height: 500, width: 400 }}
                    />
                  </div>
                  <div className="col-md-8 d-flex justify-content flex-column justify-content-between">
                    <h1 style={style.title}>{book[0].title}</h1>
                    <h5 style={style.author}>{book[0].author}</h5>
                    <h6 style={style.sub}>Publication Date</h6>
                    <p style={style.subsub}>{book[0].year}</p>
                    <h6 style={style.sub}>Category</h6>
                    <p style={style.subsub}>{book[0].category}</p>
                    <h6 style={style.sub}>Pages</h6>
                    <p style={style.subsub}>{book[0].pages}</p>
                    <h6 style={{ ...style.sub, color: "#EE4622" }}>ISBN</h6>
                    <p style={{ ...style.subsub, marginBottom: 0 }}>
                      {book[0].isbn}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr style={style.divider} />
            <div className="d-flex justify-content-between flex-column">
              <h1 style={style.about}>About This Book</h1>
              <p className="text-justify" style={style.pAbout}>
                {book[0].about}
              </p>
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-primary mx-2"
                style={{ backgroundColor: "#EE4622" }}
                onClick={() => setShow(true)}
              >
                Add Library <FaRegBookmark />
              </button>
              <button
                type="button"
                className="btn btn-no"
                style={{
                  backgroundColor: "#E9E9E9",
                }}
                onClick={() => history.push(`/read/${book[0].id}`)}
              >
                Read Book
              </button>
            </div>
          </div>
        </div>
      </div>
      <CustomModal show={show} onHide={() => setShow(false)}>
        <h5 style={style.popup}>Your book has been added successfully</h5>
      </CustomModal>
    </>
  );
}

const style = {
  title: {
    fontFamily: "Times New Roman",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 54,
    margin: 0,
  },
  author: {
    fontFamily: "Avenir",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 20,
    color: "#929292",
    marginBottom: 50,
  },
  sub: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 24,
  },
  subsub: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    color: "#929292",
  },
  divider1: {
    //position: "absolute",
    width: "100%",
    height: 0,
    marginTop: 15,
    marginBottom: 15,
  },
  about: {
    fontFamily: "Times New Roman",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 36,
    margin: 0,
  },
  pAbout: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    textAlign: "justify",
    color: "#929292",
    marginTop: 10,
  },
  popup: {
    //position: "absolute",
    //width: 422,
    //height: 33,
    //left: 123,
    //top: 26,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 20,
    //lineHeight: 33,
    //display: "flex",
    //alignItems: "center",
    textAlign: "center",
    color: "#469F74",
  },
};

export default Book;
