const KEY = "8df760aa8648ab31ddd1bb787217673d";
const BASE_URL = "https://api.themoviedb.org/3";

//https://api.themoviedb.org/3/movie/550?api_key=8df760aa8648ab31ddd1bb787217673d

const fetchTrending = async () => {
  const res = await fetch(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};
const fetchMoviesBySearch = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`
  );
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};
const fetchMoviesDetails = async (movieID) => {
  const res = await fetch(`${BASE_URL}/movie/${movieID}?api_key=${KEY}`);
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};
const fetchMoviesCredits = async (movieID) => {
  const res = await fetch(
    `${BASE_URL}/movie/${movieID}/credits?api_key=${KEY}`
  );
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};
const fetchMoviesReviews = async (movieID) => {
  const res = await fetch(
    `${BASE_URL}/movie/${movieID}/reviews?api_key=${KEY}`
  );
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};
export {
  fetchTrending,
  fetchMoviesBySearch,
  fetchMoviesDetails,
  fetchMoviesCredits,
  fetchMoviesReviews,
};
