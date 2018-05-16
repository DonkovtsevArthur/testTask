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
    isOpen: false,
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
    this.props.getUserLogin(url, this.state.email, this.state.password);
    
  };
  getList = () => {
    switch (this.props.status) {
      case "request":
       return  <CircularProgress />;
        break;

      case "not_server":
        return (
          <div>
            <p>{this.props.message}</p>
            <Link onClick={this.props.onOut} to="/profile">
              Log in {" "}
            </Link>
            {" "}
          </div>
        )
        break;
      default:
        return <Form onSubmit={this.handleSubmit} email={this.state.email} onChange={this.handleAthu} password={this.state.password} />;
    }
  }
 
  render() {

    const { email, password } = this.state;
    const { isOpenForm, message, isOpen, isRedirect  } = this.props;

    const { from } = this.props.location.state || {
      from: { pathname: "/profile" }
    };

    if(isRedirect){ 
      return <Redirect to={from} />
    }
 
    return (
      <div>
        {this.getList()}
      </div>
    );
  }
}

const mapStateProps = state => ({
  ...state.getLogin
});

const matchDispatchProps = dispatch =>
  bindActionCreators({
    getUserLogin,
    onOut: () => {
      dispatch({ type: "DEFAULT" });
    }
  }, dispatch);



Login.propsTypes = {
  isOpenForm: PropTypes.bool,
  message: PropTypes.string.isRequired,
  onOut: PropTypes.func.isRequired
};

export default withRouter(connect(mapStateProps, matchDispatchProps)(Login));
