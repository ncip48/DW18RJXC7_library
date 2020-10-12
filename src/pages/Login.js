import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { UserContext } from "../context/userContext";
import CustomTextInput from "../components/CustomTextInput";
import { MdErrorOutline } from "react-icons/md";
import { API, setAuthToken } from "../config/api";

function Login(props) {
  const [state, dispatch] = useContext(UserContext);
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  console.log(state.isLogin);

  const [loginAction, { isLoading, error }] = useMutation(async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({ email, password });

      try {
        const res = await API.post("/login", body, config);

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data.data,
        });

        setAuthToken(res.data.data.token);

        try {
          const res = await API.get("/auth");
          dispatch({
            type: "USER_LOADED",
            payload: res.data.data.user,
          });
        } catch (err) {
          dispatch({
            type: "AUTH_ERROR",
          });
        }

        history.push("/dashboard");
      } catch (err) {
        dispatch({
          type: "LOGIN_FAILED",
        });
        setErrorMsg(err.response.data.error.message);
      }
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div>
      {errorMsg ? (
        <div
          className="alert alert-dark"
          role="alert"
          style={{ marginTop: 20 }}
        >
          <MdErrorOutline size={30} /> {errorMsg || error}
        </div>
      ) : null}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loginAction();
        }}
      >
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
          {isLoading ? (
            <>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </>
          ) : (
            <>Log In</>
          )}
        </button>
      </form>
      <h6 style={style.textBottom}>
        Don't have an account ? Klik{" "}
        <b style={{ cursor: "pointer" }} onClick={props.onCliCkRegister}>
          Here
        </b>
      </h6>
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
