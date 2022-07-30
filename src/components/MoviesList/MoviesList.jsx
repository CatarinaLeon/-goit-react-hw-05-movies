import { useContext } from "react";
import { Link } from "react-router-dom";
import BtnScrollUp from "../../common/BtnScrollUp/BtnScrollUp";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";

import s from "./MoviesList.module.css";

const MoviesList = ({ moviesList }) => {
  const { theme } = useContext(ThemeContext);

  const url = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <ul className={s.list}>
        {moviesList.map((movie) => {
          return (
            <li key={movie.id} className={s.listItem}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`${url}${movie.poster_path}`}
                  alt={movie.title}
                  className={s.listImage}
                />
                <p
                  className={
                    theme === themes.light ? s.lightTheme : s.darkTheme
                  }
                >
                  {movie.title}
                </p>
                <span className={s.containerVote}>{movie.vote_average}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <BtnScrollUp />
    </>
  );
};
export default MoviesList;
