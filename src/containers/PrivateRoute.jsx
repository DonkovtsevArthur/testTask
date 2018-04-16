import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const data = {
  login: "Admin",
  password: 12345
};

class PrivateRoute extends Component {
  state = {
    isOpen: false
  };

  componentDidMount() {
    let login = window.localStorage.getItem("login");
    let password = +window.localStorage.getItem("password");

    if (login === this.props.login && password === this.props.password) {
      this.setState({
        isOpen: true
      });
    }
  }

  render() {
    const { component: Profile, isOpens, ...rest } = this.props;

    const { isOpen } = this.state;
    
    return (
      <Route
        path={rest.path}
        render={props =>
          (isOpen ? (
            isOpen
          ) : (
            isOpens
          )) ? (
            <Profile {...props} />
          ) : (
            <Redirect to={{ pathname: "/login" }} />
          )
        }
      />
    );
  }
}

const mapStateProps = state => ({
  isOpens: state.addOpen.isOpen,
  login: state.addOpen.data.login,
  password: state.addOpen.data.password
});

export default withRouter(connect(mapStateProps)(PrivateRoute));
