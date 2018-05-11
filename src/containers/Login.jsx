import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { Redirect, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { CircularProgress } from "material-ui";
import PropTypes from "prop-types";
import axios from "axios";
import PrivateRoute from "../components/PrivateRoute";
import Form from "../components/Form";
import { getUserLogin } from "../actions";

class Login extends Component {
  state = {
    email: "",
    password: "",
    isRedirect: false

  };
  handleAthu = e => {
    const value = e.target.value;
    const setName = e.target.dataset.getName;

    this.setState(prev => ({
      ...prev,
      [setName]: value
    }));
  };
  

  handleSubmit = e => {
    e.preventDefault();
    const url = "https://mysterious-reef-29460.herokuapp.com/api/v1/validate";


    this.setState({ isRedirect: true });
    this.props.getUserLogin(url, this.state.email, this.state.password);
    if (this.props.isOpenForm) {
      this.setState({ isRedirect: false });
    }

  };

  render() {

    const { isRedirect, email, password } = this.state;
    const { isOpenForm, messageError, onOut, isOpen} = this.props;

    const { from } = this.props.location.state || {
      from: { pathname: "/profile" }
    };

    if (isRedirect) {
      return <div>
        {isOpen ? <Redirect to={from} /> : <CircularProgress />}
      </div>;
    }
    return (
      <div>
        {isOpenForm ? (
          <div>
            <p>{messageError}</p>
            <Link onClick={() => onOut()} to="/profile">
              Log in
            </Link>
          </div>
        ) : (
            <Form
              onSubmit={this.handleSubmit}
              email={email}
              onChange={this.handleAthu}
              password={password}
            />
          )}
      </div>
    );
  }
}

const mapStateProps = state => ({
  isOpenForm: state.getLogin.isOpenForm,
  isOpen: state.getLogin.isOpen,
  messageError: state.getLogin.message,
  isLoader: state.getLogin.isLoader
});

const matchDispatchProps = dispatch =>
  bindActionCreators({
    getUserLogin,

    onOut: () => {
      dispatch({ type: "OUT_IN_LOGIN" });
    }

  }, dispatch);



Login.propsTypes = {
  isOpenForm: PropTypes.bool,
  messageError: PropTypes.string.isRequired,
  onOut: PropTypes.func.isRequired
};

export default withRouter(connect(mapStateProps, matchDispatchProps)(Login));
