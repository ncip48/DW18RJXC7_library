import React from "react";

export const CustomButton = ({
  onClick,
  children,
  width,
  height,
  bgcolor,
  color,
  rounded,
  fontfamily,
  fontSize,
  containerStyle,
}) => {
  const style = {
    color: color,
    backgroundColor: bgcolor,
    borderColor: bgcolor,
    borderRadius: rounded ? height / 2 : 5,
    height: height,
    width: width,
    fontSize: fontSize ? fontSize : height / 2.5,
    borderStyle: "solid",
    fontFamily: fontfamily,
    fontStyle: "normal",
    fontWeight: "normal",
    cursor: 'pointer',
    outline: 'none'
  };

  return (
    <div style={containerStyle}>
      <button style={style} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
