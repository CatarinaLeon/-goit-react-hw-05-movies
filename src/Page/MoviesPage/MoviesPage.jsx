import { useState, useEffect } from "react";
import { fetchMoviesBySearch } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { ReactComponent as SearchIcon } from "../../images/search.svg";

import s from "./MoviesPage.module.css";

Notify.init({
  position: "center-top",
  distance: "195px",
  fontSize: "20px",
  timeout: 2500,
  width: "27%",
});

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchMoviesBySearch(query).then((data) => {
      if (data.results.length === 0) {
        Notify.failure("Write the correct Movie name, please!");
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
      Notify.failure("Write the name of the movie, please!");
      return;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <button type="submit" className={s.formBtn}>
          <SearchIcon />
        </button>
        <input
          onInput={handleInput}
          value={input}
          className={s.formInput}
          placeholder="Search movies"
        ></input>
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
