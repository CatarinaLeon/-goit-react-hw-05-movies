import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";

const HomePage = lazy(() =>
  import("../../Page/HomePage/HomePage" /* webpackChunkName:  "Home__Page" */)
);
const MoviesPage = lazy(() =>
  import(
    "../../Page/MoviesPage/MoviesPage" /* webpackChunkName:  "Movies__Page" */
  )
);
const MoviesDetailsPage = lazy(() =>
  import(
    "../../Page/MoviesDetailsPage/MoviesDetailsPage" /* webpackChunkName:  "Movies__Details" */
  )
);

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/movies/:id">
            <MoviesDetailsPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
