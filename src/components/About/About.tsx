import styles from './About.module.scss'
import { galleryData } from '../../data/galleryData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCarousel } from '../../hooks/useCarousel';

const About = () => {

    const { trackRef, handleScroll } = useCarousel(320);

    return (
        <section className={styles.aboutContainer} id="sobre">
            <div className={styles.header}>
                <span className={styles.sectionBadge}>Minha Trajetória</span>
                <h2 className={styles.title}>De 2017 ao Código Limpo</h2>
            </div>
            <div className={styles.carouselWrapper}>

                <button
                    className={`${styles.navButton} ${styles.leftBtn}`}
                    onClick={() => handleScroll('left')}
                    aria-label="Rolar para a esquerda"
                >
                    <ChevronLeft size={24} />
                </button>

                <div className={styles.carouselTrack} ref={trackRef}>
                    {galleryData.map((item) => (
                        <article key={item.id} className={styles.carouselCard}>
                            <div className={styles.imageContainer}>
                                <img src={item.image} alt={item.title} loading="lazy" />
                                <span className={styles.contextBadge}>{item.context}</span>
                            </div>
                            <div className={styles.cardContent}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <button
                    className={`${styles.navButton} ${styles.rightBtn}`}
                    onClick={() => handleScroll('right')}
                    aria-label="Rolar para a direita">
                    <ChevronRight size={24} />
                </button>

            </div>
        </section>
    );
};

export default About
