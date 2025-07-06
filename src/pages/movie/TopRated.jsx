import { useEffect, useContext } from "react";
import axios from "axios";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movie/movies";
import MoviesContext from "../../components/context/MoviesContext";

function TopRated() {
  const { setMovies } = useContext(MoviesContext);

  useEffect(() => {
    async function fetchTopRatedMovies() {
      try {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

        const response = await axios.get(URL);
        const mappedMovies = response.data.results.map((item) => ({
          id: item.id,
          title: item.title || item.name || "No Title",
          year:
            (item.release_date || item.first_air_date || "").split("-")[0] ||
            "N/A",
          poster: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        }));

        setMovies(mappedMovies);
      } catch (error) {
        console.error("Gagal fetch top rated movies:", error);
      }
    }

    fetchTopRatedMovies();
  }, [setMovies]);

  return (
    <div>
      <Hero />
      <Movies title="Top Rated Movies" />
    </div>
  );
}

export default TopRated;
