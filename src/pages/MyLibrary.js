import React from "react";
import { Navbar, Sidebar } from "./components";
import { ListBook } from "../components";
import bookJson from "../assets/book.json";

function MyLibrary() {
  return (
    <>
      <Navbar />
      <div className="container mt-7">
        <div className="row">
          <div className="col-md-3 mb-5 d-flex justify-content-center">
            <Sidebar />
          </div>
          <div className="col-md-9 mb-5">
            <h1 style={style.txtList} className="mb-4">
              My Library
            </h1>
            <div className="row">
              {bookJson.map((book, index) => {
                return (
                  <ListBook
                    isactive
                    key={index}
                    index={book.id}
                    image={book.imageLink}
                    title={book.title}
                    author={book.author}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const style = {
  txtList: {
    fontFamily: "Times New Roman",
    fontStyle: "normal",
    fontWeight: "bold",
  },
};
export default MyLibrary;
