import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Menu from "./components/menu";
import NotFound from "./components/NotFound";
import Home from "./components/home";
import News from "./components/news";
import Login from "./components/login";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/profile";
import "./app.css";

// const routes = [
//   {
//     path: "/",
//     component: () => import("./components/home")
//   },
//   {
//     path: "/news",
//     component: () => import("./components/news")
//   },
//   {
//     path: "/login",
//     component: () => import("./components/login")
//   }
// ];

const App = ({ store }) => {
  return <Provider store={store}>
    <Router>
      <div className="app">
        <Menu />
        <hr />
        <Switch>
          <Route exact  path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path='/login' component={Login} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route component={NotFound} />
         
        </Switch>
      </div>
    </Router>
  </Provider>;
};

export default App;
