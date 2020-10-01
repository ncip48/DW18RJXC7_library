import React from "react";
import { Navbar, Sidebar } from "./components";
import { ListBook } from "../components";
import bookJson from "../assets/book.json";

function MyLibrary() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-5">
            <Sidebar />
          </div>
          <div className="col-md-8 mb-5">
            <div className="row">
              <h1 style={style.txtList}>My Library</h1>
            </div>
            <div className="row">
              {bookJson.map((book, index) => {
                return (
                  <ListBook
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
