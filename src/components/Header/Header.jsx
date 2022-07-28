import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={s.header}>
      <NavLink
        to="/"
        activeClassName="active"
        exact
        activeStyle={{ color: "red" }}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        activeClassName="active"
        activeStyle={{ color: "red" }}
      >
        Movies
      </NavLink>
    </header>
  );
};

export default Header;
