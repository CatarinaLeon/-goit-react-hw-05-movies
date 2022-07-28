import { useState, useEffect } from "react";
import { fetchMoviesBySearch } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";
import { ReactComponent as Search } from "../../images/search.svg";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  console.log("movies", movies);
  console.log("moviinputes", input);
  console.log("query", query);

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchMoviesBySearch(query).then((data) => setMovies(data.results));
  }, [query]);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(input);
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
