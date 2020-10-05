import React from "react";
import { Dropdown } from "react-bootstrap";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { ListBook } from "../components/ListBook";
import bookJson from "../assets/book.json";

function Home() {
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
              <div
                className="card w-100 p-4"
                style={{ backgroundColor: "#E6F2FD" }}
              >
                <div className="row">
                  <div className="col-md-8 d-flex justify-content-center flex-column">
                    <h1 style={style.txtJudul}>
                      Share, read and <i>love</i>
                    </h1>
                    <h2 style={style.txtSub}>Reading is fascinating</h2>
                  </div>
                  <div className="col-md-4 d-flex justify-content-center my-2">
                    <img
                      alt="book"
                      className="figure-img img-fluid rounded"
                      src={require("../assets/img/book1.png")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <h1 style={style.txtList}>List Books</h1>
              <Dropdown drop="left">
                <Dropdown.Toggle
                  variant="danger"
                  id="dropdown-basic"
                  style={{
                    backgroundColor: "rgb(233,233,233,0.7)",
                    color: "#000000",
                    outline: "none",
                    border: 0,
                  }}
                >
                  Category
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Horror</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Romatic</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Love</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="row justify-content-start">
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
  txtJudul: {
    fontFamily: "Times New Roman",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 70,
    lineHeight: "101.5%",
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  txtSub: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
    lineHeight: "101.5%",
    marginLeft: 30,
  },
  txtList: {
    fontFamily: "Times New Roman",
    fontStyle: "normal",
    fontWeight: "bold",
  },
};

export default Home;
