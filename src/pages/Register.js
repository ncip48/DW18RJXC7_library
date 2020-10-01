import React, { useState } from "react";
import {
  CustomButton,
  CustomTextArea,
  CustomSelect,
  CustomTextInput,
  CustomOption,
} from "../components";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("male");

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
    style_3: {
      position: "absolute",
      width: 298,
      height: 25,
      left: 59,
      top: 625,
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: "25px",
    },
    inputName: {
      position: "absolute",
      width: 350,
      height: 50,
      left: 33,
      top: 259,
    },
    inputGender: {
      position: "absolute",
      width: 350,
      height: 50,
      left: 33,
      top: 329,
    },
    inputPhone: {
      position: "absolute",
      width: 350,
      height: 50,
      left: 33,
      top: 399,
    },
    inputAddress: {
      position: "absolute",
      width: 350,
      height: 50,
      left: 33,
      top: 469,
    },
  };

  function handleClick() {
    alert('Email: ' + email + "\nPassword: " + password + "\nFull Name: " + name + "\nGender: " + gender + "\nPhone Number: " + phone  + "\nAddress: " + address);
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
        bgcolor="#D2D2D2"
        required
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <CustomTextInput
        width={350}
        borderColor="#BCBCBC"
        name="fullname"
        type="text"
        style={style.inputName}
        bgcolor="#D2D2D2"
        required
        placeholder="Full Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <CustomSelect
        width={350}
        borderColor="#BCBCBC"
        name="gender"
        style={style.inputGender}
        bgcolor="#D2D2D2"
        required
        onChange={(e) => {
          setGender(e.target.value);
        }}
      >
        <CustomOption value="male">Male</CustomOption>
        <CustomOption value="female">Female</CustomOption>
      </CustomSelect>
      <CustomTextInput
        width={350}
        borderColor="#BCBCBC"
        name="phone"
        type="number"
        style={style.inputPhone}
        bgcolor="#D2D2D2"
        required
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <CustomTextArea
        width={350}
        borderColor="#BCBCBC"
        name="address"
        style={style.inputAddress}
        bgcolor="#D2D2D2"
        required
        placeholder="Address"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
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
          top: 555,
        }}
        onClick={() => handleClick()}
      >
        Sign Up
      </CustomButton>
      <h6 style={style.style_3}>Already have an account ? Klik Here</h6>
    </div>
  );
}

export default Register;
