import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";


function Nav() {
  return (
    <nav className="nav-main">
            <NavLink
        to="/"
        activeClassName="active"
        className="navbar-home"
      >
        Home
      </NavLink>

      <NavLink
        to="/collections"
        activeClassName="active"
        className="navbar"
      >
        Collections
      </NavLink>
    </nav>
  );
}

export default Nav;
