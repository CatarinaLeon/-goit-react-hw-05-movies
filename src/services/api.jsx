const KEY = "8df760aa8648ab31ddd1bb787217673d";
// const BASE_URL = "https://api.themoviedb.org/3";

//https://api.themoviedb.org/3/movie/550?api_key=8df760aa8648ab31ddd1bb787217673d

const axios = require("axios");

export const getDataMovies = async (endPoint, page = 1, lang, query) => {
  try {
    const response = await axios({
      method: "get",
      baseURL: `https://api.themoviedb.org/3/`,
      url: `${endPoint}`,
      timeout: 5000, // 5 секунд тайм-аута
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      params: {
        api_key: KEY,
        page: `${page}`,
        language: `${lang}`,
        query: `${query}`,
      },
    });
    const data = await response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

// // отримати популярні
// const fetchTrending = async () => {
//   const res = await fetch(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
//   return res.ok ? res.json() : Promise.reject(new Error("Not Found"));
// };

// // отримати фільми за допомогою пошуку
// const fetchMoviesBySearch = async (query) => {
//   const res = await fetch(
//     `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`
//   );
//   return res.ok ? res.json() : Promise.reject(new Error("Not Found"));
// };

// // отримати інформацію про фільм
// const fetchMoviesDetails = async (movieID) => {
//   const res = await fetch(`${BASE_URL}/movie/${movieID}?api_key=${KEY}`);
//   return res.ok ? res.json() : Promise.reject(new Error("Not Found"));
// };

// // отримати титри фільмів
// const fetchMoviesCredits = async (movieID) => {
//   const res = await fetch(
//     `${BASE_URL}/movie/${movieID}/credits?api_key=${KEY}`
//   );
//   return res.ok ? res.json() : Promise.reject(new Error("Not Found"));
// };

// // Отримати рецензії на фільми
// const fetchMoviesReviews = async (movieID) => {
//   const res = await fetch(
//     `${BASE_URL}/movie/${movieID}/reviews?api_key=${KEY}`
//   );
//   return res.ok ? res.json() : Promise.reject(new Error("Not Found"));
// };

// export {
//   fetchTrending,
//   fetchMoviesBySearch,
//   fetchMoviesDetails,
//   fetchMoviesCredits,
//   fetchMoviesReviews,
// };
