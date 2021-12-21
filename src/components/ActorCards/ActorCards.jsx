import s from "./ActorCards.module.css";

const ActorCards = ({ actorsList }) => {
  const url = "https://image.tmdb.org/t/p/w500";

  return (
    <ul className={s.Card}>
      {actorsList.map((actor) => {
        const imageURL = `${url}${actor.profile_path}`;
        return (
          <li key={actor.id} className={s.CardLi}>
            {actor.profile_path && <img src={imageURL} alt={actor.name} />}
            <p>{actor.name}</p>
            <p>Charaster: {actor.character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ActorCards;
