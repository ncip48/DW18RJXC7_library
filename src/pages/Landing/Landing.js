import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import Login from "../Login";
import Register from "../Register";
import CustomModal from "../../components/CustomModal";
import { UserContext } from "../../context/userContext";
import "./style.css";

export const Landing = () => {
  const history = useHistory();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [state] = useContext(UserContext);

  useEffect(() => {
    state.user
      ? state.user.role === 1
        ? history.push("/admin")
        : history.push("/dashboard")
      : history.push("/");
  }, [history, state.user]);

  return (
    <>
      <Navbar />
      <div className="jumbotron m-0 d-flex justify-content-center flex-column">
        <div className="row">
          <div className="col-12 col-md-6 jumbotron-inner">
            <h1>
              <i>Your</i> library anywhere
            </h1>
            <h5>
              Sign-up today and receive unlimited accesss to all of your reading
              - share your book.
            </h5>
            <div className="row">
              <div className="col-6 col-md-4">
                <button
                  className="btn btn-no btn-block btn-sign-up"
                  onClick={() => setShowRegister(true)}
                >
                  Sign Up
                </button>
              </div>
              <div className="col-6 col-md-4">
                <button
                  className="btn btn-no btn-block btn-sign-in"
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
