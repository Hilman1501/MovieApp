import { Link } from "react-router-dom";
import styles from "../movie/Movie.module.css";

function Movie({ movie }) {
  return (
    <div className={styles.movie}>
      <img
        src={movie.poster}
        alt={movie.title}
        className={styles.movie__image}
      />
      <Link to={`/movie/${movie.id}`} className={styles.movie__link}>
        <h3 className={styles.movie__title}>{movie.title}</h3>
      </Link>
      <p className={styles.movie__date}>{movie.year}</p>
    </div>
  );
}

export default Movie;
