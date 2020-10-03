import React from "react";
import { useParams } from "react-router-dom";
import bookJson from "../assets/book.json";
import { Navbar } from "./components";
import { ReactReader } from "react-reader";

function Read() {
  const { id } = useParams();
  const book = bookJson.filter((item) => item.id === parseInt(id));
  return (
    <>
      <Navbar />
      <div style={{ position: "relative", height: "100vh" }}>
        <ReactReader
          url={require(`../assets/pdf/${book[0].file}`)}
          title={book[0].title}
          location={"epubcfi(/6/2[cover]!/6)"}
          locationChanged={(epubcifi) => console.log(epubcifi)}
        />
      </div>
    </>
  );
}

export default Read;
