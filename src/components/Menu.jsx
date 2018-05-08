import React from "react";
import { NavLink, withRouter, Link } from "react-router-dom";

import { connect } from "react-redux";


const styleLink = { listStyleType: "none", display: 'inline-block', marginLeft: '10px'  };

const Menu = ({isOpen, onOut}) => {
  return <ul>
      <li style={styleLink}>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li style={styleLink}>
        <NavLink to="/news">News</NavLink>
      </li>
      <li style={styleLink}>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      {isOpen ? <li style={styleLink}>
          <Link onClick={() => onOut()} to="/login">
            Выход
          </Link>
        </li> : ""}
    </ul>;
};

const mapStateProps = state => ({
  isOpen : state.getLogin.isOpen
})

const mapDispatchProps = dispatch => ({
  onOut: () => {
    dispatch({ type: "OUT_IN_LOGIN" });
  }
});

export default withRouter(connect(mapStateProps, mapDispatchProps)(Menu));
