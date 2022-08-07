import { useState } from 'react';
import logo from '../imgs/sb-logo-blue.png';
import styles from './Header.module.css';

const Header = () => {
  const [scrollY, setScrollY] = useState(null);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
      setScrollY(true);
    } else {
      setScrollY(false);
    }
  });

  const handleReload = () => {
    window.location.reload()
  }

  return (
    <nav
      className={styles.header}
      style={
        scrollY
          ? { backgroundColor: '#eceff6' }
          : { backgroundColor: 'transparent' }
      }
    >
      <img className={styles.logo} src={logo} alt="SB logo" onClick={handleReload}/>

      <p
        className={styles.info}
        style={scrollY ? { color: '#141414' } : { color: '#eceff6' }}
      >
        este não é um aplicativo real
      </p>
    </nav>
  );
};

export default Header;
