import React from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { ListBook } from "../components/ListBook";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTransgender,
} from "react-icons/fa";

function Profile() {
  const bookJson = [
    {
      id: 11,
      author: "Herly Chahya",
      title: "Blockchain with Hyperledger",
      accepted: true,
      imageLink: "crypto1.jpg",
    },
    {
      id: 12,
      author: "Herly Chahya",
      title: "Java EE 8 Microservices",
      accepted: false,
      imageLink: "eth1.png",
    },
  ];
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
                className="card w-100 p-1"
                style={{ backgroundColor: "#FDEDE6" }}
              >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-9 d-flex justify-content-around flex-column">
                      <div className="d-flex flex-row align-items-center">
                        <FaEnvelope
                          style={{ marginRight: 15 }}
                          size={30}
                          color="#8A8C90"
                        />
                        <div className="flex-column">
                          <h6 style={style.sub}>mbahcip00@gmail.com</h6>
                          <p style={style.subsub}>email</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <FaTransgender
                          style={{ marginRight: 15 }}
                          size={30}
                          color="#8A8C90"
                        />
                        <div className="flex-column">
                          <h6 style={style.sub}>Male</h6>
                          <p style={style.subsub}>Gender</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <FaPhoneAlt
                          style={{ marginRight: 15 }}
                          size={30}
                          color="#8A8C90"
                        />
                        <div className="flex-column">
                          <h6 style={style.sub}>081335241314</h6>
                          <p style={style.subsub}>Mobile Phone</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <FaMapMarkerAlt
                          style={{ marginRight: 15 }}
                          size={30}
                          color="#8A8C90"
                        />
                        <div className="flex-column">
                          <h6 style={style.sub}>Jl Trunojoyo utara no 6</h6>
                          <p style={{ ...style.subsub, margin: 0 }}>Address</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 d-flex my-2 flex-column justify-content-center align-items-center">
                      <img
                        alt="book"
                        className="figure-img img-fluid rounded"
                        src={require("../assets/img/pp1.png")}
                        style={{ height: 200, width: 200 }}
                      />
                      <button
                        className="btn btn-no"
                        style={{
                          height: 50,
                          backgroundColor: "#EE4622",
                          color: "#ffffff",
                        }}
                        height={50}
                        width={"100%"}
                      >
                        Change Photo Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <h1 style={style.txtList}>My Books</h1>
            </div>
            <div className="row">
              {bookJson.map((book, index) => {
                return (
                  <ListBook
                    isactive={book.accepted}
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
  sub: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 18,
    margin: 0,
  },
  subsub: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    color: "#929292",
    margin: 0,
  },
};

export default Profile;
