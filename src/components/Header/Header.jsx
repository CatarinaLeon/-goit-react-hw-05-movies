import { NavLink } from "react-router-dom";
import ThemeSwitcher from "../../common/ThemeSwitcher/ThemeSwitcher";

import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
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
