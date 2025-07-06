import { useEffect, useContext } from "react";
import axios from "axios";

import Hero from "../../components/hero/Hero";
import Movies from "../../components/movie/movies";
import ENDPOINT from "../../components/utils/constants/endpoint";
import MoviesContext from "../../components/context/MoviesContext";

function PopularMovie() {
  const { setMovies } = useContext(MoviesContext);

  useEffect(function(){
    async function fetchPopularMovies() {
      try {
        const response = await axios.get(ENDPOINT.POPULAR);
        const mappedMovies = response.data.results.map((item) => ({
          id: item.id,
          title: item.name || item.title || "No Title",
          year:
            (item.first_air_date || item.release_date || "").split("-")[0] ||
            "N/A",
          poster: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        }));

        setMovies(mappedMovies);
      } catch (error) {
        console.error("Gagal fetch popular movies:", error);
      }
    }

    fetchPopularMovies();
  }, [setMovies]);

  return (
    <div>
      <Hero />
      <Movies title="Popular Movies" />
    </div>
  );
}

export default PopularMovie;
