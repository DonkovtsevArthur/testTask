import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

import { Ath } from "../actions";

class PrivateRoute extends Component {
  state = {
    isOpen: false
  };

  componentWillMount() {
    this.componentDidMount();
  }

  componentDidMount() {
    let login = window.localStorage.getItem("login");
    let password = window.localStorage.getItem("password");

    this.setState({ isOpen: Ath(login, password) });
  }

  render() {
    const { component: Profile, nameUser, ...rest } = this.props;
   
    const { isOpen } = this.state;

    return (
      <Route
        path={rest.path}
        render={props =>
          (isOpen ? (
            isOpen
          ) : (
            isOpen
          )) ? (
            <Profile nameUser={nameUser} />
          ) : (
            <Redirect to={{ pathname: "/login" }} />
          )
        }
      />
    );
  }
}

const mapStateProps = state => ({
  nameUser: state.addLogin.username
});

PrivateRoute.propTypes = {
  login: PropTypes.string,
  password: PropTypes.number
};

export default withRouter(connect(mapStateProps)(PrivateRoute));
