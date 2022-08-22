import { useContext } from "react";
import { Link } from "react-router-dom";
import BtnScrollUp from "../../common/BtnScrollUp/BtnScrollUp";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";
import sprite from "../../images/sprite.svg";

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
                  width="100%"
                  height="390"
                />
                <div className={s.listContainer}>
                  <p
                    className={
                      theme === themes.light ? s.lightTheme : s.darkTheme
                    }
                  >
                    {movie.title}
                  </p>
                </div>
                <span className={s.containerVote}>
                  <svg width="20px" height="18px">
                    <use href={sprite + "#icon-rating-like"} />
                  </svg>
                  {/* {(Math.floor(movie.vote_average * 100) / 100).toFixed(1)} */}
                  {Math.trunc(movie.vote_average * 10) + "%"}
                </span>
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
