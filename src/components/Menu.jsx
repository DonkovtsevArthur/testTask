import React from "react";
import { NavLink, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";


const styleLink = { listStyleType: "none", display: 'inline-block', marginLeft: '10px' };

const Menu = ({ isOpenProfile, onOut }) => {
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
    {isOpenProfile ? <li style={styleLink}>
      <Link onClick={() => onOut()} to="/login">
        Выход
          </Link>
    </li> : " "}
  </ul>;
};

const mapStateProps = state => ({
  ...state.getLogin
})

const mapDispatchProps = dispatch => ({
  onOut: () => {
    dispatch({ type: "DEFAULT" });
  }
});

export default withRouter(connect(mapStateProps, mapDispatchProps)(Menu));
