import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-white">
      <div className="container">
        <div className="col-md-4 d-flex justify-content-center w-100">
          <a className="navbar-brand" href="#">
            <img
              src={require("../../assets/img/Icon.png")}
              //width="30"
              //height="30"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-8"></div>
      </div>
    </nav>
  );
};
