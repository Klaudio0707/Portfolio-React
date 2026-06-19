import { toast } from 'sonner';
import styles from './Hero.module.scss';
import { renderTechIcon } from '../../utils/renderTechIcon';
import { useScrollVisibility } from '../../hooks/useScrollVisibility';

export const Hero = () => {
  const isScrolled = useScrollVisibility(50);

  const handleCopyContact = async (e: React.MouseEvent) => {
    e.preventDefault();
   try {
      await navigator.clipboard.writeText('claudiorobertof@outlook.com.br');
      toast.success('Email copiado!');
    } catch { 
      toast.error('Erro ao copiar');
    }
  };

  return (
    <section className={styles.heroSection} id="home">
      <div className={styles.heroGrid}>

        <div className={styles.textContent}>
          <span className={styles.greeting}>Olá, meu nome é Cláudio Roberto</span>
          <h1 className={styles.title}>
            Engenheiro Full Stack · <span translate="no">Java</span>, <span translate="no">Spring Boot</span>, <span translate="no">Angular</span> e <span translate="no">React</span>.
          </h1>
          <p className={styles.bio}>
            +7 anos unindo operações reais de negócio com engenharia de software limpa.
            Construo APIs robustas em Java/Spring Boot e interfaces modernas em React e Angular — do backend escalável até o último pixel do frontend.
          </p>

          <div className={styles.actionButtons}>
            <a href="/CV_ClaudioRoberto.pdf" download className={styles.btnPrimary}>
              Baixar CV
            </a>

            <button onClick={handleCopyContact} className={styles.btnOutline} type="button">
              Copiar Email
            </button>
          </div>
        </div>


        <div className={styles.visualContent}>
          <div className={styles.techConstellation}>
            <div className={styles.glowRing}></div>
            <div className={`${styles.techBadge} ${styles.pos1}`}>{renderTechIcon('Java')}</div>
            <div className={`${styles.techBadge} ${styles.pos2}`}>{renderTechIcon('Spring Boot')}</div>
            <div className={`${styles.techBadge} ${styles.pos3}`}>{renderTechIcon('Google')}</div>
            <div className={`${styles.techBadge} ${styles.pos4}`}>{renderTechIcon('Typescript')}</div>
            <div className={`${styles.techBadge} ${styles.pos5}`}>{renderTechIcon('Angular')}</div>
            <div className={`${styles.techBadge} ${styles.pos6}`}>{renderTechIcon('React')}</div>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        className={`${styles.scrollIndicator} ${isScrolled ? styles.hidden : ''}`}
        aria-label="Rolar para a seção sobre"
      >
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <span className={styles.scrollText}>Click Here</span>
      </a>
    </section>
  );
};