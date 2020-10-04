import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/userContext";
import CustomTextInput from "../components/CustomTextInput";

function Login() {
  const [state, dispatch] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  console.log(state);
  function handleSubmit(e) {
    e.preventDefault();
    // localStorage.setItem(
    //   "user",
    //   JSON.stringify({ email: email, password: password })
    // );
    // email === "admin@admin.com" && password === "admin"
    //   ? history.push("/admin")
    //   : history.push("/dashboard");
    if (email === "mbahcip00@gmail.com" && password === "123") {
      history.push("/dashboard");
      dispatch({
        type: "LOGIN",
      });
    } else if (email === "admin@admin.com" && password === "admin") {
      history.push("/admin");
      dispatch({
        type: "LOGIN",
      });
    }
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <CustomTextInput
          name="email"
          type="email"
          style={style.inputEmail}
          placeholder="Email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <CustomTextInput
          name="password"
          type="password"
          style={style.inputPassword}
          required
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          type="submit"
          className="btn btn-danger btn-block"
          style={{ marginBottom: 20, backgroundColor: "#EE4622" }}
        >
          Sign In
        </button>
      </form>
      <h6 style={style.textBottom}>Don't have an account ? Klik Here</h6>
    </div>
  );
}

const style = {
  inputEmail: {
    marginTop: 20,
    marginBottom: 20,
  },
  inputPassword: {
    marginBottom: 20,
  },
  textBottom: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: "25px",
    margin: 0,
    textAlign: "center",
  },
};

export default Login;
