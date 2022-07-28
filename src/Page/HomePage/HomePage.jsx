import React from "react";
import { useState, useEffect } from "react";
import { fetchTrending } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          marginTop: 0,
          fontWeight: 700,
          fontSize: 36,
        }}
      >
        Trending today
      </h2>
      {movies && <MoviesList moviesList={movies} />}
    </>
  );
};

export default HomePage;
