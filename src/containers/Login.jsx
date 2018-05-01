import React, { Component } from "react";
import { Redirect, withRouter, Link } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { connect } from "react-redux";
import { CircularProgress } from "material-ui";
import PropTypes from "prop-types";
import axios from "axios";
// import { Ath } from "../actions";

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
        const { data, status, message } = res.data;
        if (status === "ok") {
          this.props.onGetLogin(data.id)
          this.setState({ isLoader: false });

        } else {
          this.props.onGetError(message);
        }
      })
      .catch(e => console.log(e));
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isRedirect: true });
    this.getUserLogin()
    
  };
 
  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/profile" }
    };

    const { isRedirect, isLoader } = this.state;

    if (isRedirect) {
      return (
        <div>{isLoader ? <CircularProgress /> : <Redirect to={from} />}</div>
      );
    }
    return (
      <div>
        {this.props.isOpenForm ? (
          <React.Fragment>
            <p>{this.props.message}</p>
            <Link to="/profile">Log in</Link>
          </React.Fragment>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type="email"
                data-get-name={"email"}
                value={this.state.email}
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
        )}
      </div>
    );
  }
}

const mapStateProps = state => ({
  isOpenForm: state.addLogin.isOpenForm,
  message: state.addLogin.message
});
const mapDispatchProps = dispatch => ({
  onGetLogin: id => {
    dispatch({ type: "ADD_ISLOGIN", payload: id });
  },
  onGetError: error => {
    dispatch({ type: "ERR_IN_LOGIN", payload: error });
  }
});

// Login.propTypes = {
//   login: PropTypes.string.isRequired,
//   password: PropTypes.number.isRequired
// };

export default withRouter(connect(mapStateProps, mapDispatchProps)(Login));
