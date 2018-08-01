import React from "react";
import { NavLink, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { onOut } from "../../../store/login/action";


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


  


export default withRouter(connect(mapStateProps, { onOut })(Menu));
