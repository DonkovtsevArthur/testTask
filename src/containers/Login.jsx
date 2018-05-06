import React, { Component } from "react";
import { Redirect, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { CircularProgress } from "material-ui";
import PropTypes from "prop-types";
import axios from "axios";
import PrivateRoute from "../components/PrivateRoute";
import Form from "../components/Form";

class Login extends Component {
  state = {
    email: "",
    password: "",
    isLoader: true,
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
  getUserLogin = () => {
    const { email, password } = this.state;
    const url = "https://mysterious-reef-29460.herokuapp.com/api/v1/validate";
    axios
      .post(url, { email, password })
      .then(res => {
        const { data, status } = res.data;
        if (status === "ok") {
          this.props.onGetLogin(data.id);
          this.setState({ isLoader: false });
        } else {
          this.props.onGetError("Имя пользователя или пароль введены не верно");
          this.setState({ isRedirect: false });
        }
      })
      .catch(e => console.log(e));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isRedirect: true });
    this.getUserLogin();
  };

  render() {
    const { isRedirect, isLoader, email, password } = this.state;
    const { isOpenForm, messageError, onOut } = this.props;

    const { from } = this.props.location.state || {
      from: { pathname: "/profile" }
    };

    if (isRedirect) {
      return (
        <div>{isLoader ? <CircularProgress /> : <Redirect to={from} />}</div>
      );
    }
    return (
      <div>
        {isOpenForm ? <div>
            <p>{messageError}</p>
            <Link onClick={() => onOut()} to="/profile">
              Log in
            </Link>
          </div> : <Form onSubmit={this.handleSubmit} email={email} onChange={this.handleAthu} password={password} />}
      </div>
    )
  }
}

const mapStateProps = state => ({
  isOpenForm: state.getLogin.isOpenForm,
  messageError: state.getLogin.message
});

const mapDispatchProps = dispatch => ({
  onGetLogin: id => {
    dispatch({ type: "ADD_ISLOGIN", payload: id });
  },
  onGetError: error => {
    dispatch({ type: "ERR_IN_LOGIN", payload: error });
  },
  onOut: () => {
    dispatch({ type: "OUT_IN_LOGIN" });
  }
});

Login.propsTypes = {
  isOpenForm: PropTypes.bool,
  messageError: PropTypes.string.isRequired,
  onOut: PropTypes.func.isRequired
};

export default withRouter(connect(mapStateProps, mapDispatchProps)(Login));
