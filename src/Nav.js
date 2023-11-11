import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";


function Nav() {
  return (
    <nav>
            <NavLink
        to="/"
        activeClassName="active"
        className="navbar"
      >
        Home
      </NavLink>

      <NavLink
        to="/photogrid"
        activeClassName="active"
        className="navbar"
      >
        Photo Grid
      </NavLink>
    </nav>
  );
}

export default Nav;
