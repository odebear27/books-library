import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">main</NavLink>
          </li>
          <li>
            <NavLink to="mylibrary">my library</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
