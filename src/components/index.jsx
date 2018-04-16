import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Provider } from "react-redux";

import Menu from "./Menu";
import News from "./News";

import PrivateRoute from '../containers/PrivateRoute';
import Login from "../containers/Login";
import Profile from "../components/Profile";

import "../styles/app.css";



const App = ({ store }) => {
  
  return <Provider store={store}>
      <Router>
        <div className="app">
          <Menu />
          <hr />
          <Route path="/news" component={News} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    </Provider>;
};

export default App;
