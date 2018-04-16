import React from "react";
import { NavLink } from "react-router-dom";

const styleLink = { listStyleType: "none", display: 'inline-block', marginLeft: '10px'  };

const Menu = () => {
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
    </ul>;
};

export default Menu;
