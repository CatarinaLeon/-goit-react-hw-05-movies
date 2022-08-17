import { useTranslation } from "react-i18next";
import ukrFlagIcon from "../../images/uk.png";
import ukFlagIcon from "../../images/en.png";
import s from "./LanguageSwitcher.module.css";

const languages = {
  en: { icon: ukFlagIcon, nativeName: "English" },
  uk: { icon: ukrFlagIcon, nativeName: "Українська" },
};

export default function LanguageSwitcher({ toggleLang, lang }) {
  const { i18n } = useTranslation();

  return (
    <div className={s.switcher}>
      {Object.keys(languages).map((lang) => (
        <div key={lang}>
          <button
            className={i18n.resolvedLanguage === lang ? s.active : s.button}
            type="submit"
            onClick={() => {
              i18n.changeLanguage(lang);
              toggleLang();
            }}
          >
            <img
              className={s.btnWrapper}
              src={languages[lang].icon}
              alt={languages[lang].nativeName}
              width="50"
            />
          </button>
        </div>
      ))}
    </div>
  );
}
