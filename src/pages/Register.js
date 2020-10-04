import React, { useState } from "react";

import CustomTextInput from "../components/CustomTextInput";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("male");

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      "Email: " +
        email +
        "\nPassword: " +
        password +
        "\nFull Name: " +
        name +
        "\nGender: " +
        gender +
        "\nPhone Number: " +
        phone +
        "\nAddress: " +
        address
    );
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
        <CustomTextInput
          name="fullname"
          type="text"
          style={style.inputName}
          required
          placeholder="Full Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <select
          className="form-control"
          name="gender"
          style={style.inputGender}
          required
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <CustomTextInput
          name="phone"
          type="number"
          style={style.inputPhone}
          required
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <textarea
          className="form-control"
          name="address"
          style={style.inputAddress}
          required
          placeholder="Address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <button
          type="submit"
          className="btn btn-danger btn-block"
          style={{ marginBottom: 20, backgroundColor: "#EE4622" }}
        >
          Sign Up
        </button>
      </form>
      <h6 style={style.style_3}>Already have an account ? Klik Here</h6>
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
