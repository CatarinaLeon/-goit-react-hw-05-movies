import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "../../common/ThemeSwitcher/ThemeSwitcher";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";

import s from "./Header.module.css";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <header className={theme === themes.light ? s.lightTheme : s.darkTheme}>
      <ThemeSwitcher />
      <NavLink
        to="/"
        activeClassName="active"
        exact
        activeStyle={{ color: theme === themes.light ? "#ff0000" : "#c00808" }}
        className={s.headerLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        activeClassName="active"
        activeStyle={{ color: theme === themes.light ? "#ff0000" : "#c00808" }}
        className={s.headerLink}
      >
        Movies
      </NavLink>
    </header>
  );
};

export default Header;
