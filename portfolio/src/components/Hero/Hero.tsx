import { toast } from 'sonner';
import styles from './Hero.module.scss';
import { EqualApproximately, MailCheckIcon } from 'lucide-react';

export const Hero = () => {
  const handleCopyContact = async () => {
    try {
      await navigator.clipboard.writeText('claudiorobertof@outlook.com.br');
      toast.success('Email copiado !');
    } catch (err) {
      toast.error('Falha ao copiar contato');
    }
  };
  return (
    <section className={styles.heroContainer} id="home">
      <div className={styles.heroContent}>
        <span className={styles.heroBadge}>Desenvolvedor Fullstack</span>
        <h1 className={styles.heroTitle}>
          Arquitetando soluções com <br />
          <span className={styles.heroHighlight}>Clean Code</span> & Performance.
        </h1>
        <p className={styles.heroDescription}>
          Transformo regras de negócio complexas em interfaces fluidas e APIs resilientes.
        </p>

        <div className={styles.heroActions}>
          <a href="/public/CV_Cláudio_Roberto.pdf" download className={styles.btnPrimary}>
            Baixar CV
          </a>
          <button onClick={handleCopyContact} className={styles.btnSecondary}>
            <MailCheckIcon/>  Email
          </button>
        </div>
      </div>

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