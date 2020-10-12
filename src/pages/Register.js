import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { UserContext } from "../context/userContext";
import CustomTextInput from "../components/CustomTextInput";
import { API, setAuthToken } from "../config/api";
import { MdErrorOutline } from "react-icons/md";

function Register(props) {
  const [state, dispatch] = useContext(UserContext);
  const history = useHistory();
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    address: "",
    phone: "",
    gender: "Male",
  });
  const { email, password, fullName, address, phone } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(state.isLogin);

  const [registerAction, { isLoading, error }] = useMutation(async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(formData);

      try {
        const res = await API.post("/register", body, config);

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
          registerAction();
        }}
      >
        <CustomTextInput
          name="email"
          type="email"
          style={style.inputEmail}
          placeholder="Email"
          required
          value={email}
          onChange={(e) => handleChange(e)}
        />
        <CustomTextInput
          name="password"
          type="password"
          style={style.inputPassword}
          required
          placeholder="Password"
          value={password}
          onChange={(e) => handleChange(e)}
        />
        <CustomTextInput
          name="fullName"
          type="text"
          style={style.inputName}
          required
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => handleChange(e)}
        />
        <select
          className="form-control"
          name="gender"
          style={style.inputGender}
          required
          onChange={(e) => handleChange(e)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <CustomTextInput
          name="phone"
          type="number"
          style={style.inputPhone}
          required
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => handleChange(e)}
        />
        <textarea
          className="form-control"
          name="address"
          style={style.inputAddress}
          required
          placeholder="Address"
          value={address}
          onChange={(e) => handleChange(e)}
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
            <>Sign Up</>
          )}
        </button>
      </form>
      <h6 style={style.style_3}>
        Already have an account ? Klik{" "}
        <b style={{ cursor: "pointer" }} onClick={props.onClickLogin}>
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
  style_3: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: "25px",
    textAlign: "center",
  },
  inputName: {
    marginBottom: 20,
  },
  inputGender: {
    marginBottom: 20,
  },
  inputPhone: {
    marginBottom: 20,
  },
  inputAddress: {
    marginBottom: 20,
  },
};

export default Register;
