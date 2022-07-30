import { useState, useEffect, useContext } from "react";
import { fetchTrending } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";

import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetchTrending().then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <h2 className={theme === themes.light ? s.lightTheme : s.darkTheme}>
        Trending today
      </h2>
      {movies && <MoviesList moviesList={movies} />}
    </>
  );
};

export default HomePage;
