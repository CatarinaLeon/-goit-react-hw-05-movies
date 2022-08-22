import { useTranslation } from "react-i18next";
import sprite from "../../images/sprite.svg";
import s from "./LanguageSwitcher.module.css";

const languages = {
  en: {
    country_code: "gb",
    name: "English",
  },
  uk: {
    country_code: "ua",
    name: "Українська",
  },
};

export default function LanguageSwitcher({ toggleLang }) {
  const { i18n } = useTranslation();

  return (
    <div className={s.switcher}>
      {Object.keys(languages).map((lang) => (
        <div key={lang} className={s.wraper}>
          <button
            className={i18n.resolvedLanguage === lang ? s.button : s.active}
            type="submit"
            onClick={() => {
              i18n.changeLanguage(lang);
              toggleLang(lang);
            }}
          >
            <svg width="50px" height="35px">
              <use href={`${sprite}#${lang}`} />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
