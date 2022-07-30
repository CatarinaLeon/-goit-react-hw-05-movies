import { useContext } from "react";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";
import s from "./Footer.module.css";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={theme === themes.light ? s.lightTheme : s.darkTheme}>
      © 2022 | Created by Front-end Developer
      <a href="https://github.com/CatarinaLeon" className={s.footerLink}>
        Catarina Leon
      </a>
    </footer>
  );
};
export default Footer;
