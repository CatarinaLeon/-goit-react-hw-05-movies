import { useState, useEffect, Suspense, lazy } from "react";
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
import s from "./MoviesDetailsPage.module.css";

const Cast = lazy(() =>
  import("../Cast/Cast" /* webpackChunkName:  "Cast__Page" */)
);
const Reviews = lazy(() =>
  import("../Reviews/Reviews" /* webpackChunkName:  "Reviews__Page" */)
);

const MoviesDetailsPage = () => {
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
    <div className={s.movieCard}>
      <button type="button" onClick={handelGoBack}>
        Go back
      </button>
      <div className={s.movieInfo}>
        {movie.poster_path && (
          <img
            src={`${url}${movie.poster_path}`}
            alt={movie.title}
            className={s.image}
          />
        )}
        <div className={s.movieDetails}>
          <h2>
            {movie.title} ({movie.release_date})
          </h2>
          <p>User Score: {movie.popularity}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <ul className={s.genresList}>
            {movie.genres &&
              movie.genres.map((genre) => {
                return (
                  <li key={genre.name} className={s.genresList__item}>
                    {genre.name}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className={s.additionalInformation}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to={`${match.url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
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
      </div>
    </div>
  );
};

export default MoviesDetailsPage;
