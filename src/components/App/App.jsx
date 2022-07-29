import { Suspense, lazy } from "react";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Section from "../../common/Section/Section";
import Container from "../../common/Container/Container";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";
// import { ToastContainer } from "react-toastify";

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
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () =>
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
          <Footer />
        </Suspense>
      </ThemeContext.Provider>
      {/* <ToastContainer theme="colored" /> */}
    </>
  );
};

export default App;
