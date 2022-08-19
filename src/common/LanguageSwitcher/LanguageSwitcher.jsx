import { useTranslation } from "react-i18next";
import ukrFlagIcon from "../../images/uk.png";
import ukFlagIcon from "../../images/en.png";
import s from "./LanguageSwitcher.module.css";

const languages = {
  en: { icon: ukFlagIcon, nativeName: "English" },
  uk: { icon: ukrFlagIcon, nativeName: "Українська" },
};

export default function LanguageSwitcher({ toggleLang }) {
  const { i18n } = useTranslation();

  return (
    <div className={s.switcher}>
      {Object.keys(languages).map((lang) => (
        <div key={lang} style={{ height: 30 }}>
          <button
            className={i18n.resolvedLanguage === lang ? s.button : s.active}
            type="submit"
            onClick={() => {
              i18n.changeLanguage(lang);
              toggleLang(lang);
            }}
          >
            <img
              className={s.img}
              src={languages[lang].icon}
              alt={languages[lang].nativeName}
            />
          </button>
        </div>
      ))}
    </div>
  );
}
