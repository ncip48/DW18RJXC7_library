import React, { useContext } from "react";
import { CustomButton } from "../../components";
import { FaRegUser } from "react-icons/fa";
import { BiBookAdd, BiBookAlt, BiLogOut } from "react-icons/bi";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export const Sidebar = () => {
  const [dispatch] = useContext(UserContext);
  const history = useHistory();
  function logout() {
    dispatch({
      type: "LOGOUT",
    });
    //localStorage.clear();
    history.push("/");
  }

  console.log(window.location.pathname);
  return (
    <div style={{ position: "fixed" }}>
      <div style={style.containerPp}>
        <img
          alt="pp"
          src={require("../../assets/img/pp.png")}
          style={style.pp}
        />
      </div>
      <div style={style.name}>Herly Chahya</div>
      <hr style={style.divider} />
      <Link to="/profile">
        <CustomButton
          width={230}
          height={74}
          rounded
          bgcolor={
            window.location.pathname === "/profile" ? "#EE4622" : "white"
          }
          color={window.location.pathname === "/profile" ? "white" : "#929292"}
          fontSize={22}
          containerStyle={style.btnProfile}
        >
          <FaRegUser /> Profile
        </CustomButton>
      </Link>
      <Link to="/library">
        <CustomButton
          width={230}
          height={74}
          rounded
          bgcolor={
            window.location.pathname === "/library" ? "#EE4622" : "white"
          }
          color={window.location.pathname === "/library" ? "white" : "#929292"}
          fontSize={22}
          containerStyle={style.btnMyLibrary}
        >
          <BiBookAlt /> My Library
        </CustomButton>
      </Link>
      <Link to="/add-book">
        <CustomButton
          width={230}
          height={74}
          rounded
          bgcolor={
            window.location.pathname === "/add-book" ? "#EE4622" : "white"
          }
          color={window.location.pathname === "/add-book" ? "white" : "#929292"}
          fontSize={22}
          containerStyle={style.btnAddBook}
        >
          <BiBookAdd /> Add Book
        </CustomButton>
      </Link>
      <hr style={style.divider2} />
      <CustomButton
        width={270}
        height={74}
        rounded
        bgcolor="white"
        color="#929292"
        fontSize={22}
        containerStyle={style.btnLogout}
        onClick={() => logout()}
      >
        <BiLogOut /> Logout
      </CustomButton>
    </div>
  );
};

const style = {
  containerLogo: {
    textAlign: "center",
    marginTop: 20,
  },
  containerPp: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  logo: {
    //position: "relative",
    //left: "15%",
    //position: "absolute",
    //width: 175,
    //height: 50,
    // left: 78,
    // top: 37,
  },
  pp: {
    //position: "absolute",
    //width: 100,
    //height: 100,
    //left: 129,
    //top: 132,
    border: "4px solid #FFFFFF",
    boxSizing: "border-box",
  },
  name: {
    //position: "absolute",
    // width: 142,
    // height: 33,
    // left: 108,
    textAlign: "center",
    //top: 264,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: 24,
    lineHeight: "33px",
  },
  divider: {
    //position: "absolute",
    width: 230,
    height: 0,
    marginTop: 50,
    marginBottom: 15,
  },
  divider2: {
    //position: "absolute",
    width: 230,
    height: 0,
    marginTop: 15,
    marginBottom: 15,
  },
  btnProfile: {
    //position: "absolute",
    textAlign: "center",
    margin: 20,
    // top: 392,
    // left: 43,
  },
  btnMyLibrary: {
    //position: "absolute",
    textAlign: "center",
    margin: 20,
    // top: 503,
    // left: 43,
  },
  btnAddBook: {
    //position: "absolute",
    textAlign: "center",
    margin: 20,
    // top: 616,
    // left: 43,
  },
  btnLogout: {
    //position: "absolute",
    textAlign: "center",
    margin: 20,
    // top: 776,
    // left: 43,
  },
};
