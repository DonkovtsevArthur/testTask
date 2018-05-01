import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

// import { Ath } from "../actions";

class PrivateRoute extends Component {
  render() {
    const { component: Profile, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={()=>
          this.props.isOpen ? (
            <Profile id={this.props.id} />
          ) : (
            <Redirect to={{ pathname: "/login" }} />
          )
        }
      />
    );
  }
}

const mapStateProps = state => ({
  isOpen: state.addLogin.isOpen,
  id: state.addLogin.id
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
