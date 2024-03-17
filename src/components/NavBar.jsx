import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* <nav className="w-full mx-auto flex flex-row flex-wrap p-3 items-center justify-around bg-colour-white"> */}
      <nav className="w-full mx-auto flex flex-row py-6 h-16 items-center justify-around bg-colour-white">
        {/* <ul>
          <li> */}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "hover:text-colour-red hover:decoration-colour-red text-colour-slate mb-5 font-bold pt-10 underline decoration-solid decoration-colour-slate decoration-2 underline-offset-8"
              : "hover:text-colour-red text-colour-slate mb-5 font-bold pt-10"
          }
          to="/"
        >
          main
        </NavLink>
        {/* </li>
          <li> */}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "hover:text-colour-red hover:decoration-colour-red text-colour-slate mb-5 font-bold pt-10 underline decoration-solid decoration-colour-slate decoration-2 underline-offset-8"
              : "hover:text-colour-red text-colour-slate mb-5 font-bold pt-10"
          }
          to="mylibrary"
        >
          my library
        </NavLink>
        {/* </li>
        </ul> */}
      </nav>
    </header>
  );
};

export default NavBar;
