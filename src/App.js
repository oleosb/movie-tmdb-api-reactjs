import styles from './App.module.css';
import { useState, useEffect } from 'react';
import { getHomeList, getMovieInfo, getOriginals } from './helpers/Tmdb';
import Header from './components/Header';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Footer from './components/Footer';

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await getHomeList();
      setMovieList(list);

      let originals = await getOriginals();
      let randomNum = Math.floor(
        Math.random() * (originals[0].items.results.length - 1),
      );
      let chosen = originals[0].items.results[randomNum];
      let chosenInfo = await getMovieInfo(chosen.id, 'tv');
      console.log(chosenInfo)
      setFeaturedData(chosenInfo);
      console.log(featuredData)
    };

    loadAll();
  }, []);

  return (
    <>
    <Header />
      {featuredData && <FeaturedMovie {...featuredData} />}
      <section className={styles.movieList}>
        {movieList.map((item, idx) => (
          <MovieRow key={idx} {...item} />
        ))}
      </section>
      <Footer />
    </>
  );
};

export default App;
