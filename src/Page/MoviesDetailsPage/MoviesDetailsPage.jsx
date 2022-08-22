import { useState, useEffect, Suspense, lazy, useContext } from "react";
import {
  useParams,
  NavLink,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getDataMovies } from "../../services/api";
import dateFormat from "dateformat";
import Loader from "../../common/Loader/Loader";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";
import sprite from "../../images/sprite.svg";

import s from "./MoviesDetailsPage.module.css";

const Cast = lazy(() =>
  import("../Cast/Cast" /* webpackChunkName:  "Cast__Page" */)
);
const Reviews = lazy(() =>
  import("../Reviews/Reviews" /* webpackChunkName:  "Reviews__Page" */)
);

const MoviesDetailsPage = ({ lang }) => {
  const { theme } = useContext(ThemeContext);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const match = useRouteMatch();
  const history = useHistory();
  const url = "https://image.tmdb.org/t/p/w500";
  const { t } = useTranslation();

  useEffect(() => {
    getDataMovies(`movie/${id}`, 1, lang).then((data) => {
      setMovie(data);
    });
  }, [id, lang]);

  const handelGoBack = () => {
    history.goBack();
  };

  return (
    <>
      <button type="button" onClick={handelGoBack} className={s.movieBtn}>
        <svg className={s.arrowLeft} width="25px" height="23px">
          <use href={sprite + "#icon-arrow-left"} />
        </svg>
        {t("pages.btn")}
      </button>
      <div className={s.movieInfoContainer}>
        {movie.poster_path && (
          <img
            src={`${url}${movie.poster_path}`}
            alt={movie.title}
            className={s.movieInfoImage}
          />
        )}
        <div className={s.movieDetailsContainer}>
          <h2 className={theme === themes.light ? s.lightTheme : s.darkTheme}>
            {movie.title}
          </h2>
          <p className={s.movieDetailsSubject}>
            {t("pages.Release")}:
            <span className={s.movieDetailsScore}>
              {dateFormat(movie.release_date, "dd.mm.yyyy")}
            </span>
          </p>
          <p className={s.movieDetailsSubject}>
            {t("pages.UserScore")}:
            <span className={s.movieDetailsScore}>{movie.popularity}</span>
          </p>
          <h4 className={s.movieDetailsText}>{t("pages.Overview")}</h4>
          <p
            className={
              theme === themes.light
                ? s.movieDetailsSubjectLight
                : s.movieDetailsSubjectDark
            }
          >
            {movie.overview}
          </p>
          <h4 className={s.movieDetailsText}>{t("pages.Genres")}</h4>
          <ul
            className={
              theme === themes.light ? s.lightThemeList : s.darkThemeList
            }
          >
            {movie.genres &&
              movie.genres.map((genre) => {
                return (
                  <li key={genre.name} className={s.movieDetailsItem}>
                    {genre.name}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className={s.additionalInfoContainer}>
        <h3
          className={
            theme === themes.light
              ? s.additionalTitleLight
              : s.additionalTitleDark
          }
        >
          {t("pages.titleInfo")}
        </h3>
        <ul className={s.additionalInfoList}>
          <li className={s.additionalInfoItem}>
            <NavLink
              to={`${match.url}/cast`}
              style={{ color: "black" }}
              activeStyle={{ color: "red" }}
            >
              {t("pages.btnCast")}
            </NavLink>
          </li>
          <li className={s.additionalInfoItem}>
            <NavLink
              to={`${match.url}/reviews`}
              style={{ color: "black" }}
              activeStyle={{ color: "red" }}
            >
              {t("pages.btnReviews")}
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={`${match.path}/cast`}>
            <Cast lang={lang} />
          </Route>
          <Route path={`${match.path}/reviews`}>
            <Reviews lang={lang} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default MoviesDetailsPage;
