import { useContext } from "react";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";
import { ReactComponent as Feart } from "../../images/heart.svg";
import s from "./Footer.module.css";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={theme === themes.light ? s.lightTheme : s.darkTheme}>
      © 2022 | Developed with
      <Feart className={s.footerHeart} />
      by
      <a href="https://github.com/CatarinaLeon" className={s.footerLink}>
        Catarina Leon
      </a>
    </footer>
  );
};
export default Footer;
