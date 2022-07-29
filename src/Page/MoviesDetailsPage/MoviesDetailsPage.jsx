import { useState, useEffect, Suspense, lazy, useContext } from "react";
import {
  useParams,
  NavLink,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import { fetchMoviesDetails } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";
import { ReactComponent as ArrowLeft } from "../../images/arrow_left.svg";

import s from "./MoviesDetailsPage.module.css";

const Cast = lazy(() =>
  import("../Cast/Cast" /* webpackChunkName:  "Cast__Page" */)
);
const Reviews = lazy(() =>
  import("../Reviews/Reviews" /* webpackChunkName:  "Reviews__Page" */)
);

const MoviesDetailsPage = () => {
  const { theme } = useContext(ThemeContext);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const match = useRouteMatch();
  const history = useHistory();
  const url = "https://image.tmdb.org/t/p/w500";

  //    useEffect(() => {
  //   const getMoviesById = async () => {
  //     try {
  //       const movies = await fetchMoviesDetails(id);

  //       setMovie(movies);
  //     }
  //     catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getMoviesById();
  // }, [id]);

  useEffect(() => {
    fetchMoviesDetails(id).then((data) => {
      setMovie(data);
    });
  }, [id]);

  const handelGoBack = () => {
    history.goBack();
  };

  return (
    <>
      <button type="button" onClick={handelGoBack} className={s.movieBtn}>
        <ArrowLeft className={s.arrowLeft} />
        Go back
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
            {movie.title} ({movie.release_date})
          </h2>
          <p className={s.movieDetailsSubject} style={{ color: "#9e9999" }}>
            <span className={s.movieDetailsScore}>User Score:</span>
            {movie.popularity}
          </p>
          <h3 className={s.movieDetailsText}>Overview</h3>
          <p
            className={
              theme === themes.light
                ? s.movieDetailsSubjectLight
                : s.movieDetailsSubjectDark
            }
          >
            {movie.overview}
          </p>
          <h4 className={s.movieDetailsText}>Genres</h4>
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
          Additional information
        </h3>
        <ul className={s.additionalInfoList}>
          <li className={s.additionalInfoItem}>
            <NavLink
              to={`${match.url}/cast`}
              style={{ color: "black" }}
              activeStyle={{ color: "red" }}
            >
              Cast
            </NavLink>
          </li>
          <li className={s.additionalInfoItem}>
            <NavLink
              to={`${match.url}/reviews`}
              style={{ color: "black" }}
              activeStyle={{ color: "red" }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={`${match.path}/cast`}>
            <Cast />
          </Route>
          <Route path={`${match.path}/reviews`}>
            <Reviews />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default MoviesDetailsPage;
