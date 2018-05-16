import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const PrivateRoute = ({ component: Profile, isOpenProfile, id,  ...rest }) => (
  <Route
    {...rest}
    render={() =>
      isOpenProfile ? (
        <Profile id={id} />
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )
    }
  />
);

const mapStateProps = state => ({
  ...state.getLogin
});

PrivateRoute.propTypes = {
  login: PropTypes.string,
  password: PropTypes.number
};

const mapDispatchToProps = dispath => ({
  onGetOpen: name => {
    dispath({ type: "ADD_ISLOGIN", payload: name });
  }
});

export default withRouter(
  connect(mapStateProps, mapDispatchToProps)(PrivateRoute)
);
