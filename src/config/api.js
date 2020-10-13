import axios from "axios";

//set default config base url
export const API = axios.create({
  baseURL: "https://herly-backend-library.herokuapp.com/api/v1",
});

//integrate default header for auth
export const setAuthToken = (token) => {
  if (token) API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else delete API.defaults.headers.common["Authorization"];
};
