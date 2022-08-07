import styles from './MovieRow.module.css';
import Movie from './Movie';
import { createRef, useState } from 'react';

const MovieRow = ({ title, items }) => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);

  const row = createRef();

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - row.current.offsetLeft);
    setScrollLeft(row.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - row.current.offsetLeft;
    const walk = x - startX;
    row.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className={`${styles.movieArea} ${styles.noSelect}`}>
      <h3 className={styles.title}>{title}</h3>
      <div
        className={styles.row}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        ref={row}
      >
        {items.results.length > 0 &&
          items.results.map((item, idx) => <Movie key={idx} {...item} />)}
      </div>
    </div>
  );
};

export default MovieRow;
