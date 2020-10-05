import React, { useContext } from "react";
import { FaRegUser } from "react-icons/fa";
import { BiBookAdd, BiBookAlt, BiLogOut } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/userContext";

export const Sidebar = () => {
  const [state, dispatch] = useContext(UserContext);
  const history = useHistory();
  function logout() {
    dispatch({
      type: "LOGOUT",
    });
    //localStorage.clear();
    history.push("/");
  }

  return (
    <>
      <img
        className="rounded mx-auto d-block"
        alt="pp"
        src={require("../assets/img/pp.png")}
        style={{ width: 100, height: 100 }}
      />
      {state.isLogin ? null : null}
      <h4 style={style.name}>Herly Chahya</h4>
      <hr style={style.divider} />
      <button
        type="button"
        className="btn btn-round btn-block btn-outline-danger"
        style={{
          height: 70,
          backgroundColor:
            window.location.pathname === "/profile" ? "#EE4622" : "",
          color: window.location.pathname === "/profile" ? "white" : "",
        }}
        onClick={() => history.push("/profile")}
      >
        <FaRegUser /> Profile
      </button>
      <button
        type="button"
        className="btn btn-round btn-block btn-outline-danger"
        style={{
          height: 70,
          backgroundColor:
            window.location.pathname === "/library" ? "#EE4622" : "",
          color: window.location.pathname === "/library" ? "white" : "",
        }}
        onClick={() => history.push("/library")}
      >
        <BiBookAlt /> My Library
      </button>

      <button
        type="button"
        className="btn btn-round btn-block btn-outline-danger"
        style={{
          height: 70,
          backgroundColor:
            window.location.pathname === "/add-book" ? "#EE4622" : "",
          color: window.location.pathname === "/add-book" ? "white" : "",
        }}
        onClick={() => history.push("/add-book")}
      >
        <BiBookAdd /> Add Book
      </button>
      <hr style={style.divider} />
      <button
        type="button"
        className="btn btn-round btn-block btn-outline-danger"
        onClick={() => logout()}
        style={{ height: 70 }}
      >
        <BiLogOut /> Logout
      </button>
    </>
  );
};

const style = {
  name: {
    textAlign: "center",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "900",
    marginTop: 15,
    marginBottom: 30,
  },
  divider: {
    width: "100%",
    height: 0,
    marginTop: 10,
    marginBottom: 15,
  },
};
