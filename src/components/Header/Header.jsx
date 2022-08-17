import { useContext, Suspense } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ThemeSwitcher from "../../common/ThemeSwitcher/ThemeSwitcher";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";
import LanguageSwitcher from "../../common/LanguageSwitcher/LanguageSwitcher";

import s from "./Header.module.css";

const Header = ({ toggleLang, lang }) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <header className={theme === themes.light ? s.lightTheme : s.darkTheme}>
      <ThemeSwitcher />
      <Suspense fallback={<h2>loadding</h2>}>
        <LanguageSwitcher toggleLang={toggleLang} lang={lang} />
      </Suspense>
      <NavLink
        to="/"
        activeClassName="active"
        exact
        activeStyle={{ color: theme === themes.light ? "#ff0000" : "#c00808" }}
        className={s.headerLink}
      >
        {t("header.main")}
      </NavLink>
      <NavLink
        to="/movies"
        activeClassName="active"
        activeStyle={{ color: theme === themes.light ? "#ff0000" : "#c00808" }}
        className={s.headerLink}
      >
        {t("header.movies")}
      </NavLink>
    </header>
  );
};

export default Header;
