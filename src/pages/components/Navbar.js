import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const pathname = window.location.pathname.split("/")[1];
  return (
    <nav className={pathname !== 'read' ? "fixed-top navbar navbar-light" : "navbar navbar-light"}>
      <div className="container">
        <div className="col-md-4 d-flex justify-content-center w-100">
          <Link to='/dashboard'>
            <img
              src={require("../../assets/img/Icon.png")}
              //width="30"
              //height="30"
              alt=""
            />
          </Link>
        </div>
        <div className="col-md-8"></div>
      </div>
    </nav>
  );
};
