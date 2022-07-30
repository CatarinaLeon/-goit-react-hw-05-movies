import { useState, useEffect } from "react";
import { fetchMoviesBySearch } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { ReactComponent as Search } from "../../images/search.svg";

import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchMoviesBySearch(query).then((data) => {
      if (data.results.length) {
        Notify.failure("Write the correct Movie name, please!", {
          position: "top-right",
          distance: "95px",
          fontSize: "20px",
          timeout: 2500,
          width: "27%",
        });
        return;
      }
      setMovies(data.results);
    });
  }, [query]);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(input);
    if (input.trim() === "") {
      Notify.failure("Write the name of the movie, please!", {
        position: "top-right",
        distance: "95px",
        fontSize: "20px",
        timeout: 2500,
        width: "27%",
      });
      return;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          onInput={handleInput}
          value={input}
          className={s.formInput}
          placeholder="Search movies"
        ></input>
        <button type="submit" className={s.formBtn}>
          <Search />
        </button>
      </form>
      {movies && movies.length > 0 ? (
        <MoviesList moviesList={movies} />
      ) : (
        <div className={s.containerGif}></div>
      )}
    </>
  );
};

export default MoviesPage;
