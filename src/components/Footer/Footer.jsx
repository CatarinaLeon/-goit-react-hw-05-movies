import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";
import { ReactComponent as Feart } from "../../images/heart.svg";
import s from "./Footer.module.css";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <footer className={theme === themes.light ? s.lightTheme : s.darkTheme}>
      © 2022 | {t("footer.info")}
      <Feart className={s.footerHeart} />
      {t("footer.by")}
      <a href="https://github.com/CatarinaLeon" className={s.footerLink}>
        Catarina Leon
      </a>
    </footer>
  );
};
export default Footer;
