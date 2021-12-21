import { useState, useEffect } from "react";
import { fetchMoviesBySearch } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

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
      <form onSubmit={handleSubmit}>
        <input onInput={handleInput} value={input}></input>
        <button type="submit">Search</button>
      </form>
      {movies && <MoviesList moviesList={movies} />}
    </>
  );
};

export default MoviesPage;
