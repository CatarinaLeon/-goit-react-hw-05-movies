import { Suspense, useState, useEffect } from "react";
import Loader from "../../common/Loader/Loader";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";
import * as storage from "../../services/localStorage";

export default function App() {
  const [theme, setTheme] = useState(
    () => storage.get("theme") ?? themes.light
  );

  //localStorage
  useEffect(() => {
    storage.save("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Suspense fallback={<Loader />}>
          <Header />
          <Main />
          <Footer />
        </Suspense>
      </ThemeContext.Provider>
    </>
  );
}
