import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import ENDPOINTS from "../../components/utils/constants/endpoint";

function DetailMovie() {
  // Menggunakan useParams untuk ambil id dari URL
  const { id } = useParams();

  // Create movie state
  const [movie, setMovie] = useState("");

  useEffect(() => {
    // Fetch detail movie
    async function getDetailMovie() {
      try {
        const URL = ENDPOINTS.DETAIL(id);
        const response = await axios(URL);
        setMovie(response.data);
      } catch (error) {
        console.error("Gagal mengambil detail movie:", error);
      }
    }

    getDetailMovie();
  }, [id]);
  const genres =
    movie && movie.genres
      ? movie.genres.map((genre) => genre.name).join(", ")
      : "";

  const trailer =
    movie && movie.videos?.results?.length > 0
      ? `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`
      : "#";

  return ( 
    <StyledDetailMovie>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="info">
        <h2>{movie.title}</h2>
        <h3>{genres}</h3>
        <p>{movie.overview}</p>
        <a href={trailer} target="_blank" rel="noopener noreferrer">
          <button>Watch</button>
        </a>
      </div>
    </StyledDetailMovie>
  );
}

export default DetailMovie;

const StyledDetailMovie = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  padding: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    text-align: left;
  }

  .poster {
    flex-basis: 30%;

    img {
      border-radius: 25px;
      max-width: 100%;
      height: auto;
    }
  }

  .info {
    flex-basis: 60%;

    h2 {
      font-size: 2.44rem;
      margin-bottom: 0.5rem;
      color: ${({ theme }) => theme.colors.primary};
    }

    h3 {
      font-size: 1.59rem;
      margin-bottom: 0.5rem;
      color: ${({ theme }) => theme.colors.secondary};
    }

    p {
      text-align: justify;
      margin-bottom: 2rem;
      color: #64748b;
    }
  }
`;
