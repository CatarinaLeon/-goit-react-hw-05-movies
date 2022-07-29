import React from "react";
import { useState, useEffect } from "react";
import { fetchTrending } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";
import s from "./HomePage.module.css";
import { useContext } from "react";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";

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
