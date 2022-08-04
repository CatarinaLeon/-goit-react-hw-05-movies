import { useState, useEffect, useContext } from "react";
import { fetchTrending } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";

import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const { theme } = useContext(ThemeContext);
  console.log("movies", movies);

  useEffect(() => {
    fetchTrending().then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <h1 className={theme === themes.light ? s.lightTheme : s.darkTheme}>
        Trending today
      </h1>
      {movies && <MoviesList moviesList={movies} />}
    </>
  );
};

export default HomePage;
