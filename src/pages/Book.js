import React, { useState } from "react";
import { useQuery, useMutation } from "react-query";
import { API } from "../config/api";
import { FaRegBookmark } from "react-icons/fa";
import { useParams, useHistory } from "react-router-dom";
import { Navbar } from "../components/Navbar/";
import { Sidebar } from "../components/Sidebar";
import CustomModal from "../components/CustomModal";
import { CardBookDetails } from "../components/BookDetails/CardBookDetails/CardBookDetails";
import { AboutBookDetails } from "../components/BookDetails/AboutBookDetails/AboutBookDetails";

function Book() {
  const { id } = useParams();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const { isLoading, error, data: booksData } = useQuery("getBooks", () =>
    API.get(`/book/${id}`)
  );

  const [addLibraryAction] = useMutation(async (bookId) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({ bookId: bookId });

      const res = await API.post("/my-library", body, config);
      //console.log(res.data.message);
      setMessage(res.data.message);
    } catch (err) {
      console.log(err);
      setMessage(err.response.data.error.message);
    }
  });

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3 mb-5 d-flex flex-column">
            <Sidebar />
          </div>
          <div className="col-md-9 mb-5">
            {isLoading ? (
              <h1>Loading</h1>
            ) : error ? (
              <h1>Error</h1>
            ) : (
              <>
                <CardBookDetails
                  title={booksData.data.data.books[0].title}
                  author={booksData.data.data.books[0].userId.fullName}
                  publication={booksData.data.data.books[0].publication}
                  category={booksData.data.data.books[0].category.name}
                  pages={booksData.data.data.books[0].pages}
                  ISBN={booksData.data.data.books[0].ISBN}
                  thumbnail={booksData.data.data.books[0].thumbnail}
                />
                <hr style={style.divider} />
                <AboutBookDetails
                  text={booksData.data.data.books[0].aboutBook}
                />
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-primary mx-2"
                    style={{ backgroundColor: "#EE4622" }}
                    onClick={() => {
                      addLibraryAction(booksData.data.data.books[0].id);
                      setShow(true);
                    }}
                  >
                    Add Library <FaRegBookmark />
                  </button>
                  <button
                    type="button"
                    className="btn btn-no"
                    style={{
                      backgroundColor: "#E9E9E9",
                    }}
                    onClick={() =>
                      history.push({
                        pathname: `/read/${booksData.data.data.books[0].id}`,
                        state: {
                          file: booksData.data.data.books[0].file,
                          title: booksData.data.data.books[0].title,
                        },
                      })
                    }
                  >
                    Read Book
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <CustomModal show={show} onHide={() => setShow(false)}>
        <h5 style={style.popup}>{message}</h5>
      </CustomModal>
    </>
  );
}

const style = {
  popup: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 20,
    textAlign: "center",
    color: "#469F74",
  },
};

export default Book;
