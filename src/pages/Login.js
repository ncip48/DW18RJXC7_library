import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CustomButton, CustomTextInput } from "../components";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const style = {
    inputEmail: {
      position: "absolute",
      width: 350,
      height: 50,
      left: 33,
      top: 119,
    },
    inputPassword: {
      position: "absolute",
      width: 350,
      height: 50,
      left: 33,
      top: 189,
    },
    textBottom: {
      position: "absolute",
      width: 276,
      height: 25,
      left: 65,
      top: 355,
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: "25px",
      margin:0
    },
  };

  function handleClick() {
    localStorage.setItem(
      "user",
      JSON.stringify({ email: email, password: password })
    );
    history.push("/dashboard")
  }

  return (
    <div>
      <CustomTextInput
        width={350}
        borderColor="#BCBCBC"
        name="email"
        type="email"
        style={style.inputEmail}
        placeholder="Email"
        bgcolor="#D2D2D2"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <CustomTextInput
        width={350}
        borderColor="#BCBCBC"
        name="password"
        type="password"
        style={style.inputPassword}
        bgcolor="#D2D2D2"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <CustomButton
        width={350}
        height={50}
        bgcolor="#EE4622"
        color="#ffffff"
        fontfamily="Poppins"
        fontSize={16}
        containerStyle={{
          position: "absolute",
          width: 350,
          height: 50,
          left: 33,
          top: 275,
        }}
        onClick={() => handleClick()}
      >
        Sign In
      </CustomButton>
      <h6 style={style.textBottom}>Don't have an account ? Klik Here</h6>
    </div>
  );
}

export default Login;
