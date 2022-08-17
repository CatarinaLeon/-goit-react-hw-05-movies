import { useContext } from "react";
import { useTranslation } from "react-i18next";
import BtnScrollUp from "../../common/BtnScrollUp/BtnScrollUp";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";

import defaultImg from "../../images/NoImage_Available.jpg";
import s from "./ActorCards.module.css";

const ActorCards = ({ actorsList }) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className={s.cardContainer}>
      <ul className={s.cardList}>
        {actorsList.map(({ profile_path, id, name, character }) => {
          return (
            <li key={id} className={s.cardItem}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultImg
                }
                alt={name}
                className={s.cardImg}
              />
              <p
                className={theme === themes.light ? s.lightTheme : s.darkTheme}
              >
                {name}
              </p>
              <p className={s.cardSubject}>
                <span className={s.cardCharaster}>
                  {t("reviews.Character")}:
                </span>
                {character}
              </p>
            </li>
          );
        })}
      </ul>
      <BtnScrollUp />
    </div>
  );
};

export default ActorCards;
