import React from "react";
import { Link, useHistory } from "react-router-dom";

export const ListBook = ({ index, image, title, author }) => {
  const history = useHistory();
  //   return (
  //     <Link to={"/book/" + index}>
  //     <div>
  //       <div style={style.containerBook}>
  //         <img
  //           alt="books"
  //           style={style.imgBook}
  //           src={require("../../assets/img/" + image)}
  //         />
  //       </div>
  //       <h4 style={style.bookTitle}>{title}</h4>
  //       <h6 style={style.txtAuthor}>{author}</h6>
  //     </div>
  //     </Link>
  //   );
  return (
    <div
      className="col-md-3 my-2 d-flex justify-content-center flex-column"
      onClick={() => history.push(`/book/${index}`)}
      style={{cursor:'pointer'}}
    >
      <img
        alt="books"
        className="figure-img img-fluid rounded"
        src={require("../../assets/img/" + image)}
        style={{ height: 270 }}
      />
      <h4 style={style.bookTitle}>{title}</h4>
      <h6 style={style.txtAuthor}>{author}</h6>
    </div>
  );
};

const style = {
  // containerBook: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // imgBook: {
  //   width: 200,
  //   height: 270,
  // },
  bookTitle: {
    fontFamily: "Times New Roman",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: "120.5%",
    marginTop: 10,
    marginBottom: 10,
  },
  txtAuthor: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: "101.5%",
    margin: 0,
  },
};
