import React from "react";

export const CustomModal = ({show, close, bgcolor, height, width, children }) => {
  const style_body = {
    position: "absolute",
    backgroundColor: bgcolor,
    borderRadius: 10,
    width: width,
    height: height,
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    opacity: show ? 1 : 0,
    display: show ? 'block' : 'none'
  };
  return <div style={style_body}>
  <button onClick={close}>Close</button>
  {children}</div>;
};
