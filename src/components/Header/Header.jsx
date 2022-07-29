import React from "react";
import { useContext } from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

import ThemeSwitcher from "../../common/ThemeSwitcher/ThemeSwitcher";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <header className={theme === themes.light ? s.lightTheme : s.darkTheme}>
      <ThemeSwitcher />
      <NavLink
        to="/"
        activeClassName="active"
        exact
        activeStyle={{ color: "red" }}
        style={{ color: "rgb(0, 0, 146)", fontWeight: 700 }}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        activeClassName="active"
        activeStyle={{ color: "red" }}
        style={{ color: "rgb(0, 0, 146)", fontWeight: 700 }}
      >
        Movies
      </NavLink>
    </header>
  );
};

export default Header;
