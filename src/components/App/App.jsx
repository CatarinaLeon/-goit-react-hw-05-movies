import { Suspense, useState, useEffect } from "react";
import Loader from "../../common/Loader/Loader";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";
import * as storage from "../../services/localStorage";

export default function App() {
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng" || "uk"));

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

  const toggleLang = (lang) => {
    setLang(lang);
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Suspense fallback={<Loader />}>
          <Header toggleLang={toggleLang} />
          <Main lang={lang} />
          <Footer />
        </Suspense>
      </ThemeContext.Provider>
    </>
  );
}
