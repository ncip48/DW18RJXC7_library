import React from "react";
import { useLocation } from "react-router-dom";
//import bookJson from "../assets/book.json";
import { Navbar } from "../components/Navbar/";
import { ReactReader } from "react-reader";

function Read() {
  // const { id } = useParams();
  // const book = bookJson.filter((item) => item.id === parseInt(id));
  const location = useLocation();
  const filename = location.state.file;
  const title = location.state.title;

  console.log(location.state.abc);

  return (
    <>
      <Navbar />
      <div style={{ position: "relative", height: "100vh" }}>
        <ReactReader
          url={require(`../assets/pdf/${filename}`)}
          title={title}
          location={"epubcfi(/6/2[cover]!/6)"}
          locationChanged={(epubcifi) => console.log(epubcifi)}
        />
      </div>
    </>
  );
}

export default Read;
