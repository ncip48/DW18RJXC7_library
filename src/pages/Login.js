import React, { useState } from "react";
import { CustomButton, CustomJumbotron, CustomTextInput } from "../components";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const style_1 = {
    position: "absolute",
    width: 350,
    height: 50,
    left: 33,
    top: 119,
  };

  const style_2 = {
    position: "absolute",
    width: 350,
    height: 50,
    left: 33,
    top: 189,
  };

  const style_3 = {
    position: 'absolute',
    width: 276,
    height: 25,
    left: 65,
    top: 316,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: '25px',
  }

  function handleClick() {
    localStorage.setItem('user', JSON.stringify({email: email, password: password}))
  }

  return (
    <div>
      <CustomTextInput
        width={350}
        borderColor="#BCBCBC"
        name="text"
        style={style_1}
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
        password
        style={style_2}
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
      <h6 style={style_3}>Don't have an account ? Klik Here</h6>
    </div>
  );
}

export default Login;
