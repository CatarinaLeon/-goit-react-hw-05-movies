import { useContext } from "react";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";

import defaultImg from "../../images/NoImage_Available.jpg";
import s from "./ActorCards.module.css";

const ActorCards = ({ actorsList }) => {
  const { theme } = useContext(ThemeContext);

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
                <span className={s.cardCharaster}>Charaster:</span> {character}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ActorCards;
