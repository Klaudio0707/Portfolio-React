import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      

    //efeito scroll
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <span className={styles.scrollText}>Scroll</span>
      </div>

    </section>
  );
};