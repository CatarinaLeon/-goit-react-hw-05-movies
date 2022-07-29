import PropTypes from "prop-types";
import s from "./Section.module.css";
import { useContext } from "react";
import { ThemeContext, themes } from "../ThemeSwitcher/themeContext";

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
