import React from "react";
import { Navbar, Sidebar } from "./components";
import { Dropdown } from "react-bootstrap";
//import Sidebar from "./Sidebar";
import { ListBook } from "../components";
import bookJson from "../assets/book.json";

function Home() {
  // return (
  //   <div style={style.container}>
  //     <div style={style.row}>
  //       <div>
  //         <Sidebar />
  //       </div>
  //       <div>
  //         <div style={style.kotak}>
  //           <div style={style.containerTeks}>
  //             <h2 style={style.txtJudul}>Share, read and love</h2>
  //             <h3 style={style.txtSub}>Reading is fascinating</h3>
  //           </div>
  //           <div style={style.containerImg}>
  //             <img alt="book" src={require("../assets/img/book1.png")} />
  //           </div>
  //         </div>
  //         <div>
  //           <h1 style={style.txtList}>List Books</h1>
  //           <div style={style.row2}>
  //             {bookJson.map((book, index) => {
  //               return (
  //                 <ListBook
  //                   key={index}
  //                   index={index}
  //                   image={book.imageLink}
  //                   title={book.title}
  //                   author={book.author}
  //                 />
  //               );
  //             })}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-5">
            <Sidebar />
          </div>
          <div className="col-md-8 mb-5">
            <div className="row mb-3">
              <div
                className="card w-100 p-5"
                style={{ backgroundColor: "#E6F2FD" }}
              >
                <div className="row">
                  <div className="col-md-8 d-flex justify-content-center flex-column">
                    <h1 style={style.txtJudul}>Share, read and love</h1>
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
            <div className="row justify-content-between">
              <h1 style={style.txtList}>List Books</h1>
              <Dropdown drop="left">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Category
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Horror</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Romatic</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Love</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="row">
              {bookJson.map((book, index) => {
                return (
                  <ListBook
                    key={index}
                    index={index}
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
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 35,
    //paddingLeft: 35,
    marginRight: "auto",
    marginLeft: "auto",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "30% 70%",
  },
  row2: {
    display: "grid",
    gridTemplateColumns: "25% 25% 25% 25%",
  },
  kotak: {
    display: "grid",
    gridTemplateColumns: "60% 40%",
    border: "4px solid #E6F2FD",
    boxSizing: "border-box",
    backgroundColor: "#E6F2FD",
    width: "100%",
    height: 420,
    marginTop: 50,
    borderRadius: 10,
  },
  containerTeks: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 50,
  },
  containerImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  txtJudul: {
    fontFamily: "Times New Roman",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 70,
    lineHeight: "101.5%",
    marginBottom: 10,
  },
  txtSub: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
    lineHeight: "101.5%",
  },
  txtList: {
    fontFamily: "Times New Roman",
    fontStyle: "normal",
    fontWeight: "bold",
  },
};

export default Home;
