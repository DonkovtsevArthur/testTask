import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Menu from "./Menu";
import News from "./News";
import NotFound from "./NotFound";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";
import Profile from "../containers/Profile";
import Login from "../containers/Login";
import "../styles/app.css";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Menu />
          <hr />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={News} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
