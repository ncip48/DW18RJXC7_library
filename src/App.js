import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Home from './pages/Home';
import MyLibrary from './pages/MyLibrary';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Home} />
        <Route path="/profile" component={Home} />
        <Route path="/library" component={MyLibrary} />
        <Route path="/add-book" component={MyLibrary} />
        <Route path="/book/:id" component={MyLibrary} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
