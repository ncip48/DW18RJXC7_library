import React from "react";

export const CustomJumbotron = ({ children, bgcolor, }) => {
  const style = {
    height: "100vh",
    position: 'fixed',
    width: "100%",
    backgroundColor:bgcolor,
  };

  return <div style={style}>{children}</div>;
};
