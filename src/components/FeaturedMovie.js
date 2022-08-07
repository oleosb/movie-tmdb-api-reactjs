import styles from './FeaturedMovie.module.css';
import { FaPlayCircle, FaPlusCircle } from 'react-icons/fa';

const FeaturedMovie = ({
  original_name,
  backdrop_path,
  overview,
  vote_average,
  first_air_date,
  seasons,
}) => {
  return (
    <div className={styles.movie}>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt={original_name}
      />
      <div className={styles.gradient}>
        <h1 className={styles.title}>{original_name}</h1>
        <div className={styles.info}>
          <span className={styles.rating}>{vote_average.toFixed(1)}</span>
          <div className={styles.year}>{first_air_date.substring(0, 4)}</div>
          <div className={styles.season}>{seasons.length} Seasons</div>
        </div>
        <p className={styles.sinopse}>{overview.substring(0, 200)}...</p>
        <div className={styles.btns}>
          <button className={`${styles.btn} ${styles.watch}`}>
            <FaPlayCircle /> Watch
          </button>
          <button className={`${styles.btn} ${styles.add}`}>
            <FaPlusCircle /> Add to my list
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
