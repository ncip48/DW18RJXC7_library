import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const pathname = window.location.pathname.split("/")[1];
  return pathname === "" ? (
    <nav className="navbar navbar-light" style={{ marginLeft: "5rem" }}>
      <img
        src={require("../../assets/img/Icon.png")}
        //width="30"
        //height="30"
        alt=""
      />
    </nav>
  ) : (
    <nav
      className={
        pathname === "read" || pathname === "admin"
          ? "navbar navbar-light"
          : "navbar navbar-light"
      }
    >
      <div className="container">
        <div
          className={
            pathname === "admin"
              ? "col-md-3 d-flex w-100"
              : "col-md-3 d-flex justify-content-center w-100"
          }
        >
          <Link to="/dashboard">
            <img
              src={require("../../assets/img/Icon.png")}
              //width="30"
              //height="30"
              alt=""
            />
          </Link>
        </div>
        <div className="col-md-9"></div>
      </div>
    </nav>
  );
};
