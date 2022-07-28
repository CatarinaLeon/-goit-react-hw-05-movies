import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Section from "../../common/Section/Section";
import Container from "../../common/Container/Container";

const HomePage = lazy(() =>
  import("../../page/HomePage/HomePage" /* webpackChunkName:  "Home__Page" */)
);
const MoviesPage = lazy(() =>
  import(
    "../../page/MoviesPage/MoviesPage" /* webpackChunkName:  "Movies__Page" */
  )
);
const MoviesDetailsPage = lazy(() =>
  import(
    "../../page/MoviesDetailsPage/MoviesDetailsPage" /* webpackChunkName:  "Movies__Details" */
  )
);

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Section>
          <Container>
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
          </Container>
        </Section>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
