import React from "react";
import { Link } from "react-router-dom";
import s from "./MoviesList.module.css";

const MoviesList = ({ moviesList }) => {
  console.log("moviesList", moviesList);
  const url = "https://image.tmdb.org/t/p/w500";
  return (
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
              <p className={s.listText}>{movie.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default MoviesList;
