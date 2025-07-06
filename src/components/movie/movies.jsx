import { useContext } from "react";
import styles from "../movie/Movie.module.css";
import Movie from "./Movie";
import MoviesContext from "../context/MoviesContext";

function Movies( props ) {
  const {title = "Latest Movies"} = props;
  const { movies } = useContext(MoviesContext);

  function handleClick() {
    const newMovie = {
      id: Date.now().toString(),
      title: "Jigsaw",
      year: "2022",
      type: "Movie",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
    };

    // Fitur tambah film: aktifkan jika butuh
    // setMovies([...movies, newMovie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{title}</h2>
        <div className={styles.movie_container}>
          {movies && movies.length > 0 ? (
            movies.map((movie) =>
              movie ? <Movie key={movie.id} movie={movie} /> : null
            )
          ) : (
            <p>Belum ada film ditampilkan.</p>
          )}
        </div>
      </section>

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <button onClick={handleClick}>Add Movie</button>
      </div>
    </div>
  );
}

export default Movies;
