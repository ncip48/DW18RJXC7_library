import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { UserContextProvider } from "./context/userContext";
import PrivateRoute from "./components/PrivateRoute";
import { Landing } from "./pages/Landing/";
import Home from "./pages/Home";
import MyLibrary from "./pages/MyLibrary";
import Book from "./pages/Book";
import Profile from "./pages/Profile";
import Read from "./pages/Read";
import AddBook from "./pages/AddBook";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import AddBookAdmin from "./pages/Admin/AddBook";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard" component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/library" component={MyLibrary} />
          <PrivateRoute path="/add-book" component={AddBook} />
          <PrivateRoute path="/book/:id" component={Book} />
          <PrivateRoute path="/read/:id" component={Read} />
          <PrivateRoute path="/admin/add-book" component={AddBookAdmin} />
          <PrivateRoute path="/admin" component={HomeAdmin} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
    </UserContextProvider>
  );
}

export default App;
