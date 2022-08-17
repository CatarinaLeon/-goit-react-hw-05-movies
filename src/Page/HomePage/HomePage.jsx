import { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { getDataMovies } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";

import s from "./HomePage.module.css";

const HomePage = ({ lang }) => {
  const [movies, setMovies] = useState([]);
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  useEffect(() => {
    getDataMovies("trending/movie/day", 1, lang).then((data) => {
      setMovies(data.results);
    });
  }, [lang]);

  return (
    <>
      <h1 className={theme === themes.light ? s.lightTheme : s.darkTheme}>
        {t("pages.title")}
      </h1>
      {movies && <MoviesList moviesList={movies} />}
    </>
  );
};

export default HomePage;
