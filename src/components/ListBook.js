import React from "react";
import { useHistory } from "react-router-dom";

export const ListBook = ({ index, image, title, author, isactive }) => {
  const history = useHistory();
  const style = {
    bookTitle: {
      fontFamily: "Times New Roman",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 22,
      lineHeight: "120.5%",
      marginTop: 10,
      opacity: isactive ? 1 : "0.5",
      marginBottom: 10,
    },
    txtAuthor: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 18,
      lineHeight: "101.5%",
      margin: 0,
      opacity: isactive ? 1 : "0.5",
      color: "#929292",
    },
  };
  return (
    <div
      className="col-md-3 d-flex flex-column py-3"
      onClick={() => (isactive ? history.push(`/book/${index}`) : null)}
      style={{
        cursor: isactive ? "pointer" : "default",
        backgroundColor: isactive ? "white" : "rgb(196,196,196,0.7)",
        //maxWidth: 230,
      }}
    >
      <img
        alt="books"
        className="figure-img img-fluid rounded"
        src={require("../assets/img/" + image)}
        style={{ height: 270, width: 200, opacity: isactive ? 1 : "0.5" }}
      />
      <h4 style={style.bookTitle}>{title}</h4>
      <h6 style={style.txtAuthor}>{author}</h6>
    </div>
  );
};
