import React, { Component } from "react";
import { Redirect, withRouter, Link } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { connect } from "react-redux";

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

    window.localStorage.setItem("login", this.state.login);
    window.localStorage.setItem("password", this.state.password);

    if (
      this.state.login === this.props.login &&
      +this.state.password === +this.props.password
    ) {
      this.props.onGetOpen(true);
      this.setState({ isRedirect: true });
    } else {
      this.setState({
        message: "Неправильно введён логин или пароль",
        checkForm: false
      });
    }
  };
  render() {
    console.log(this.props.data);
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
                type="text"
                data-get-name={"login"}
                value={this.state.login}
                onChange={this.handleAthu}
                placeholder="Введите логин"
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
          <div>
            <p>{this.state.message}</p>
            <Link to="/profile"> Log in</Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateProps = state => ({
  login: state.addOpen.data.login,
  password: state.addOpen.data.password
});
export default withRouter(
  connect(mapStateProps, dispath => ({
    onGetOpen: boolean => {
      dispath({ type: "ADD_ISOPEN", payload: boolean });
    }
  }))(Login)
);
