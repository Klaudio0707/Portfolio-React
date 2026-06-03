import styles from './Header.module.scss';
import fotoPerfil from '../../assets/foto-perfil.jpeg';
const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerBrand}>
        <div className={styles.logoGroup}>
          <img src={fotoPerfil} alt="Cláudio Roberto" className={styles.microAvatar} />
          <h1 className={styles.logo}>Cláudio Roberto</h1>
        </div>
      </div>
      <div className={styles.headerNavigation}>
        <nav>
          <ul>
            <li><a className={styles.navLink} href="#home">Home</a></li>
            <li><a className={styles.navLink} href="#about">About</a></li>
            <li><a className={styles.navLink} href="#contact">Contact</a></li>
            <li><a className={styles.navLink} href="#projects">Projects</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header