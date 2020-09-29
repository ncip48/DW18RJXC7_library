import React, { useState } from "react";
import { CustomButton, CustomJumbotron, CustomModal } from "../components";

const style_h1 = {
  position: "absolute",
  margin: 0,
  width: 572,
  height: 182,
  left: 78,
  top: 235,
  fontFamily: "Times New Roman",
  fontStyle: "italic",
  fontWeight: "bold",
  fontSize: 110,
  lineHeight: "82.49%",
  textAlign: "left",
  color: "#000000",
};

const style_sub = {
  position: "absolute",
  margin: 0,
  width: 500,
  height: 107,
  left: 78,
  top: 483,
  fontFamily: "Poppins",
  textAlign: "left",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: 24,
  lineHeight: "33px",
};

const style_img = {
  position: "absolute",
  top: 0,
  right: 0,
  height: "100vh",
};

const style_icon = {
  position: "absolute",
  width: 175,
  height: 50,
  left: 78,
  top: 37,
};

function Landing() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  function show_modal_login() {
    setShowLogin(true);
    setShowRegister(false);
  }
  function close_modal_login() {
    setShowLogin(false);
  }
  function show_modal_reg() {
    setShowRegister(true);
    setShowLogin(false);
  }
  function close_modal_reg() {
    setShowRegister(false);
  }
  return (
    <CustomJumbotron bgcolor="#ffffff">
      <img style={style_icon} src={require("../assets/img/Icon.png")} />
      <h1 style={style_h1}>Your library anywhere</h1>
      <div style={style_sub}>
        Sign-up today and receive unlimited accesss to all of your reading -
        share your book.
      </div>
      <img style={style_img} src={require("../assets/img/bg1.png")} />
      <CustomButton
        width={211}
        height={50}
        bgcolor="#EE4622"
        color="#ffffff"
        fontfamily="Poppins"
        containerStyle={{
          position: "absolute",
          width: 211,
          height: 50,
          left: 78,
          top: 615,
        }}
        onClick={() => show_modal_login()}
      >
        Sign Up
      </CustomButton>
      <CustomButton
        width={211}
        height={50}
        bgcolor="#E9E9E9"
        color="#000000"
        fontfamily="Poppins"
        containerStyle={{
          position: "absolute",
          width: 211,
          height: 50,
          left: 320,
          top: 615,
        }}
        onClick={() => show_modal_reg()}
      >
        Sign In
      </CustomButton>

      <CustomModal height={408} width={416} bgcolor="#e8e4fd" show={showLogin} close={() => close_modal_login()}>
        Login
      </CustomModal>
      <CustomModal height={680} width={416} bgcolor="#e8e4fd" show={showRegister} close={() => close_modal_reg()}>
        Register
      </CustomModal>
    </CustomJumbotron>
  );
}

export default Landing;
