import axios from "axios";

//set default config base url
export const API = axios.create({
  baseURL: "http://gpbmscript.com:5000/api/v1",
  // baseURL: "http://localhost:5000/api/v1",
});

//integrate default header for auth
export const setAuthToken = (token) => {
  if (token) API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else delete API.defaults.headers.common["Authorization"];
};

// export const urlAsset = {
//   img: "http://localhost:5000/src/uploads/img/",
//   books: "http://localhost:5000/src/uploads/books/",
// };

// production
export const urlAsset = {
  img: "http://gpbmscript.com:5000/src/uploads/img/",
  books: "http://gpbmscript.com:5000/src/uploads/books/",
};
