import { Suspense, useState, useEffect } from "react";
import Loader from "../../common/Loader/Loader";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";
import * as storage from "../../services/localStorage";

const langs = {
  uk: "uk",
  en: "en",
};

export default function App() {
  const [lang, setLang] = useState(
    localStorage.getItem("i18nextLng" ?? langs.en)
  );
  // console.log("lang", lang);

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

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === langs.uk ? langs.en : langs.uk));
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
