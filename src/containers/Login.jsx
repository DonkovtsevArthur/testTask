import React, { Component } from "react";
import { Redirect, withRouter, Link } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Ath } from "../actions";

class Login extends Component {
  state = {
    login: "",
    password: "",
    isRedirect: false,
    checkForm: true,
    message: ""
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

    const logIn = Ath(this.state.login, this.state.password);

    if (logIn) {
      this.setState({ isRedirect: true });
    } else {
      this.setState({
        message: "Неправильно введён логин или пароль",
        checkForm: false
      });
    }
  };
  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/profile" }
    };

    const { isRedirect } = this.state;

    if (isRedirect) {
      return <Redirect to={from} />;
    }
    return (
      <div>
        {this.state.checkForm ? (
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type="email"
                data-get-name={"login"}
                value={this.state.login}
                onChange={this.handleAthu}
                placeholder="Введите email"
              />
            </div>
            <div>
              <input
                data-get-name={"password"}
                type="password"
                value={this.state.password}
                onChange={this.handleAthu}
                placeholder="Введите пароль"
              />
            </div>
            <input type="submit" />
          </form>
        ) : (
          <React.Fragment>
            <p>{this.state.message}</p>
            <Link to="/profile"> Log in</Link>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateProps = state => ({});


Login.propTypes = {
  login: PropTypes.string.isRequired,
  password: PropTypes.number.isRequired
};

export default withRouter(connect(mapStateProps)(Login));
