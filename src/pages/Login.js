import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CustomButton, CustomTextInput } from "../components";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem(
      "user",
      JSON.stringify({ email: email, password: password })
    );
    email === "admin@admin.com" && password === "admin"
      ? history.push("/admin")
      : history.push("/dashboard");
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <CustomTextInput
          width={350}
          borderColor="#BCBCBC"
          name="email"
          type="email"
          style={style.inputEmail}
          placeholder="Email"
          bgcolor="rgb(210,210,210,0.25)"
          required
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
          bgcolor="rgb(210,210,210,0.25)"
          required
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
          type="submit"
          fontfamily="Poppins"
          fontSize={16}
          containerStyle={{
            position: "absolute",
            width: 350,
            height: 50,
            left: 33,
            top: 275,
          }}
        >
          Sign In
        </CustomButton>
      </form>
      <h6 style={style.textBottom}>Don't have an account ? Klik Here</h6>
    </div>
  );
}

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
    margin: 0,
  },
};

export default Login;
