import { useEffect, useContext } from "react";
import axios from "axios";

import Hero from "../../components/hero/Hero";
import Movies from "../../components/movie/movies";
import ENDPOINT from "../../components/utils/constants/endpoint";
import MoviesContext from "../../components/context/MoviesContext";

function NowPlayingMovie() {
  const { setMovies } = useContext(MoviesContext);

  useEffect(() => {
    async function fetchNowPlayingMovies() {
      try {
        const response = await axios.get(ENDPOINT.NOW_PLAYING);

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
        console.error("Gagal fetch now playing movies:", error);
      }
    }

    fetchNowPlayingMovies();
  }, [setMovies]);

  return (
    <div>
      <Hero />
      <Movies title="Now Playing" />
    </div>
  );
}

export default NowPlayingMovie;
