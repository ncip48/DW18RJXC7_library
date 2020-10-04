import React from "react";
import { Navbar } from "../components";
import bookJson from "../../assets/book.json";
import { HiCheckCircle } from "react-icons/hi";

function HomeAdmin() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="mb-3" style={style.title}>
          Book verification
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Users of Author</th>
              <th>ISBN</th>
              <th>E-book</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookJson.map((item) => {
              return (
                <tr>
                  <th>{item.id}</th>
                  <td>{item.author}</td>
                  <td>{item.isbn}</td>
                  <td>{item.file}</td>
                  <td
                    style={{
                      color:
                        item.status === 1
                          ? "#0ACF83"
                          : item.status === 2
                          ? "#FF0742"
                          : "#F7941E",
                    }}
                  >
                    {item.status === 1
                      ? "Active"
                      : item.status === 2
                      ? "Cancel"
                      : "Waiting to be verified"}
                  </td>
                  <td>
                    {item.status === 1 ? (
                      <HiCheckCircle size={40} color="#3BB54A" />
                    ) : (
                      <>
                        <button
                          className="btn btn-danger btn-sm"
                          style={{ marginRight: 10 }}
                        >
                          Cancel
                        </button>
                        <button className="btn btn-success btn-sm">
                          Approve
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

const style = {
  title: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 30,
  },
};

export default HomeAdmin;
