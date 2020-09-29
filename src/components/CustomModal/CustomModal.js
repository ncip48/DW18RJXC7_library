import React from "react";

export const CustomModal = ({
  show,
  close,
  name,
  bgcolor,
  height,
  width,
  children,
}) => {

  const style_container = {
    backgroundColor: "gray",
    width: "100%",
    height: "100vh",
    //opacity: show ? 1 : 0
    opacity: show ? 1 : 0,
    display: show ? "block" : "none",
    zIndex:'1',
  };

  const style_body = {
    position: "absolute",
    backgroundColor: bgcolor,
    borderRadius: 10,
    width: width,
    height: height,
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",

  };

  const style_btnClose = {
    backgroundColor: "transparent",
    fontSize: 22,
    borderSize: 0,
    borderColor: "transparent",
    float: "right",
    margin: 10,
  };

  const style_judul = {
    textAlign: "left",
    margin: 0,
    marginLeft: 10,
    position: "absolute",
    width: 116,
    height: 49,
    left: 33,
    top: 41,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: 36,
    lineHeight: "49px",
  };

  return (
    <div style={style_container}>
      <div style={style_body}>
        <div style={{ flexDirection: "row" }}>
          <h1 style={style_judul}>{name}</h1>
          <button style={style_btnClose} onClick={close}>
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
