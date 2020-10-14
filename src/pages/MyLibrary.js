import React from "react";
import { Navbar } from "../components/Navbar/";
import { Sidebar } from "../components/Sidebar";
import { ListBook } from "../components/ListBook";
//import bookJson from "../assets/book.json";
import { useQuery } from "react-query";
import { API } from "../config/api";

function MyLibrary() {
  const { isLoading, error, data: libraryData } = useQuery("getLibrary", () =>
    API.get(`/my-library`)
  );

  console.log(libraryData);

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3 mb-5 d-flex flex-column">
            <Sidebar />
          </div>
          <div className="col-md-9 mb-5">
            <h1 style={style.txtList} className="mb-4">
              My Library
            </h1>
            <div className="row">
              {isLoading ? (
                <h1>Loading...</h1>
              ) : error ? (
                <h3>Error</h3>
              ) : libraryData.data.data.library.toString() === "" ? (
                <div
                  className="alert alert-warning ml-auto mr-auto w-100 text-center"
                  role="alert"
                >
                  <h3>No Library Found</h3>
                </div>
              ) : (
                libraryData.data.data.library.map((book, index) => {
                  return (
                    <ListBook
                      isactive
                      key={index}
                      index={book.id}
                      image={book.books.thumbnail}
                      title={book.books.title}
                      author={book.books.userId.fullName}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const style = {
  txtList: {
    fontFamily: "Times New Roman",
    fontStyle: "normal",
    fontWeight: "bold",
  },
};
export default MyLibrary;
