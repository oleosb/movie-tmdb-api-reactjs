import React from 'react';
import styles from './Movie.module.css';
import { FaPlayCircle, FaPlusCircle } from 'react-icons/fa';

const Movie = ({ poster_path, vote_average }) => {
  return (
    <div className={styles.movie}>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
        alt=""
      />
      <div className={styles.info}>
        <div className={styles.rating}>
          <span>{vote_average.toFixed(1)}</span>
        </div>
        <div className={styles.btns}>
          <button>
            <FaPlayCircle />
          </button>
          <button>
            <FaPlusCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
