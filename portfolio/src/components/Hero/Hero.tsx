import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      

    {/* Efeito scroll */}
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <span className={styles.scrollText}>Click Here</span>
      </div>

    </section>
  );
};