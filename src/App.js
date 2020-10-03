import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Home from './pages/Home';
import MyLibrary from './pages/MyLibrary';
import Book from './pages/Book';
import Profile from './pages/Profile';
import Read from './pages/Read';
import AddBook from './pages/AddBook';
import HomeAdmin from './pages/admin/HomeAdmin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/library" component={MyLibrary} />
        <Route path="/add-book" component={AddBook} />
        <Route path="/book/:id" component={Book} />
        <Route path="/read/:id" component={Read} />
        <Route path="/admin" component={HomeAdmin} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
