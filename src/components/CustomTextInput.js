import React from "react";

const CustomTextInput = (props) => {
  return <input {...props} className="form-control" style={props.style} />;
};

export default CustomTextInput;
