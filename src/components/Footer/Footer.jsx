import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";
// import { ReactComponent as Feart } from "../../images/heart.svg";
import sprite from "../../images/sprite.svg";

import s from "./Footer.module.css";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <footer className={theme === themes.light ? s.lightTheme : s.darkTheme}>
      © 2022 | {t("footer.info")}
      <svg className={s.footerHeart} width="18px" height="18px">
        <use href={sprite + "#icon-heart"} />
      </svg>
      {/* <Feart className={s.footerHeart} /> */}
      {t("footer.by")}
      <a href="https://github.com/CatarinaLeon" className={s.footerLink}>
        Catarina Leon
      </a>
    </footer>
  );
};
export default Footer;
