import s from "./ActorCards.module.css";
import defaultImg from "../../images/avatar-1577909_1280-300x300.png";

const ActorCards = ({ actorsList }) => {
  console.log("actorsList", actorsList);
  const viewPoster = (profile_path) => {
    if (profile_path === null) {
      return `${defaultImg}`;
    }
    return `https://image.tmdb.org/t/p/w500${profile_path}`;
  };
  // const url = "https://image.tmdb.org/t/p/w500";

  return (
    <div className={s.cardContainer}>
      <ul className={s.cardList}>
        {actorsList.map(({ profile_path, id, name, character }) => {
          // const imageURL = `${viewPoster(profile_path)}`;
          return (
            <li key={id} className={s.cardItem}>
              {profile_path && (
                <img
                  src={`${viewPoster(profile_path)}`}
                  alt={name}
                  className={s.cardImg}
                />
              )}
              <p className={s.cardText}>{name}</p>
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
