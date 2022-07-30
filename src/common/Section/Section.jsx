import { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext, themes } from "../ThemeSwitcher/themeContext";
import s from "./Section.module.css";

export default function Section({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={theme === themes.light ? s.lightTheme : s.darkTheme}>
      {children}
    </section>
  );
}
Section.propTypes = {
  children: PropTypes.node,
};
