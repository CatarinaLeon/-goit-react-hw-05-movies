import { useState, useEffect } from "react";
import { fetchMoviesBySearch } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";
import { ReactComponent as Search } from "../../images/search.svg";
import s from "./MoviesPage.module.css";
import toast from "react-hot-toast";
// import { toast } from "react-toastify";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      return;
    }
    // console.log("query", query);
    fetchMoviesBySearch(query).then((data) => {
      console.log("data", data);
      if (data.results.length === 0) {
        return toast.error(
          "Sorry, there are no more movies matching your search query!!!"
        );
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
        <div className={s.containerGif}>{/* <Toaster /> */}</div>
      )}
    </>
  );
};

export default MoviesPage;
