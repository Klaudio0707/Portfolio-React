import type { Certificate } from '../../types/index';
import styles from './CertificateCard.module.css';

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  const { title, issuer, year, credentialUrl } = certificate;

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <span className={`${styles.badge} ${styles[`badge${issuer}`]}`}>
          {issuer}
        </span>
        <svg
          aria-hidden="true"
          className={styles.certIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 8a3 3 0 1 0-6 0v7H7l5 5 5-5h-2V8z" />
          <path d="M3 20h18" />
        </svg>
      </header>

      <p className={styles.title}>{title}</p>

      <footer className={styles.footer}>
        <time className={styles.year} dateTime={String(year)}>{year}</time>

        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={`Ver credencial de ${title}`}
          >
            Ver credencial
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        )}
      </footer>
    </article>
  );
}
