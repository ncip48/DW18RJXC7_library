import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import Login from "../Login";
import Register from "../Register";
import CustomModal from "../../components/CustomModal";
import "./style.css";

export const Landing = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <Navbar />
      <div className="jumbotron m-0 d-flex justify-content-center flex-column">
        <div className="row">
          <div className="col-12 col-md-6 jumbotron-inner">
            <h1>
              <i>Your</i> library anywhere
            </h1>
            <h5 style={style.style_sub}>
              Sign-up today and receive unlimited accesss to all of your reading
              - share your book.
            </h5>
            <div className="row">
              <div className="col-6 col-md-4">
                <button
                  className="btn btn-no btn-block"
                  style={{
                    height: 50,
                    backgroundColor: "#EE4622",
                    color: "#ffffff",
                  }}
                  onClick={() => setShowRegister(true)}
                >
                  Sign Up
                </button>
              </div>
              <div className="col-6 col-md-4">
                <button
                  className="btn btn-no btn-block"
                  style={{
                    height: 50,
                    backgroundColor: "#E9E9E9",
                  }}
                  onClick={() => setShowLogin(true)}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomModal
        title="Register"
        width={416}
        show={showRegister}
        onHide={() => setShowRegister(false)}
      >
        <Register
          showLogin={showLogin}
          onClickLogin={() => {
            setShowLogin(true);
            setShowRegister(false);
          }}
        />
      </CustomModal>
      <CustomModal
        title="Login"
        width={416}
        show={showLogin}
        onHide={() => setShowLogin(false)}
      >
        <Login
          showRegister={showRegister}
          onCliCkRegister={() => {
            setShowRegister(true);
            setShowLogin(false);
          }}
        />
      </CustomModal>
    </>
  );
};

const style = {
  style_h1: {
    marginBottom: 50,
    fontFamily: "Times New Roman",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 110,
    lineHeight: "82.49%",
    textAlign: "left",
    color: "#000000",
  },
  style_sub: {
    marginBottom: 25,
    maxWidth: 500,
    fontFamily: "Poppins",
    textAlign: "left",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
    lineHeight: "33px",
  },
  style_img: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100vh",
  },
  style_icon: {
    position: "absolute",
    width: 175,
    height: 50,
    left: 78,
    top: 37,
  },
};
