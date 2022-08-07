import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        API by{' '}
        <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
          TMDB
        </a>
        .
      </p>
      <p>
        Este aplicativo é apenas um objeto de estudo desenvolvido por{' '}
        <a href="https://www.leosb.com.br" target="_blank" rel="noreferrer">
          Leo
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
