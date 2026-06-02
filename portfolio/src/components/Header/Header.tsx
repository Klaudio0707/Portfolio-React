import styles from './Header.module.scss';

const Header = () => {
    console.log("Meus estilos:", styles);
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerBrand}>
        <h3> Cláudio Roberto</h3>    
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