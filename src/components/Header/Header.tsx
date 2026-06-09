import styles from './Header.module.scss';
import fotoPerfil from '../../assets/foto-perfil.jpeg';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerBrand}>
        <a href="#home" className={styles.logoGroup}>
          <img src={fotoPerfil} alt="Cláudio Roberto" className={styles.microAvatar} />
          <span translate="no" className={styles.logo}>Cláudio Roberto</span>
        </a>
      </div>

      <div className={styles.headerNavigation}>
        <nav>
          <ul>
            <li><a className={styles.navLink} href="#home">Home</a></li>
            <li><a className={styles.navLink} href="#about">About</a></li>
            <li><a className={styles.navLink} href="#projects">Projects</a></li>
            <li><a className={styles.navLink} href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};