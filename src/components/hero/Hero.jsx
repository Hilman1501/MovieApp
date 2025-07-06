import { useState, useEffect } from "react";
import axios from "axios";
import { HeroSection, HeroContent, HeroTitle, HeroGenre, HeroSubtitle, HeroImage } from "./Hero.styled";
import Button from "../UI/Button";
import Heading from "../UI/Typography/Heading.jsx";
import Paragraph from "../UI/Typography/Paragraph.jsx";
import Image from "../UI/Media/image.js";


function Hero() {
  const [movie, setMovie] = useState({});
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchTrendingMovie() {
      try {
        // Ambil film trending pertama
        const trendingURL = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
        const trendingRes = await axios.get(trendingURL);
        const trendingMovie = trendingRes.data.results[0];
        if (!trendingMovie) return;

        // Ambil detail film berdasarkan id trending pertama
        const id = trendingMovie.id;
        const detailURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
        const detailRes = await axios.get(detailURL);
        setMovie(detailRes.data);
      } catch (error) {
        console.error("Gagal ambil data movie:", error);
      }
    }

    fetchTrendingMovie();
  }, [API_KEY]);

  return (
    <HeroSection>
      <HeroContent>
        <Heading level={1}>{movie.title || movie.name || "Loading..."}</Heading>
        <Heading level={2}>Genre: {movie.genres?.map(g => g.name).join(", ") || "-"}</Heading>
        <Paragraph>{movie.overview || "Deskripsi belum ada."}</Paragraph>
        <Button variant="primary" size="lg">Watch</Button>
      </HeroContent>
      <HeroImage>
        {movie.poster_path && (
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`Poster ${movie.title || movie.name}`}
            rounded
          />
        )}
      </HeroImage>
    </HeroSection>
  );
}

export default Hero;
