import { Mail, Phone, ArrowUp } from 'lucide-react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import styles from './Footer.module.scss';
import { useFooterVisibility } from '../../hooks/useFooterVisibility';

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/claudiorobertofilho',
    icon: <FiLinkedin size={18} />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Klaudio0707',
    icon: <FiGithub size={18} />,
  },
  {
    label: 'claudiorobertof@outlook.com.br',
    href: 'mailto:claudiorobertof@outlook.com.br',
    icon: <Mail size={18} />,
  },
  {
    label: '(81) 99683-0110',
    href: 'tel:+5581996830110',
    icon: <Phone size={18} />,
  },
] as const;

export const Footer = () => {
  const visible = useFooterVisibility(300);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`${styles.footer} ${visible ? styles.visible : ''}`}>
      <div className={styles.container}>

        <div className={styles.brand}>
          <span translate="no" className={styles.name}>Cláudio Roberto</span>
          <p className={styles.role}>Engenheiro Full Stack · Java & Spring Boot · React & Angular</p>

          <a href="#contato" className={styles.available}>
            <span className={styles.dot} aria-hidden="true" />
            Disponível para novas oportunidades
          </a>
        </div>

        <div className={styles.contactCol}>
          <p className={styles.colTitle}>Contato & Redes</p>
          <ul>
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className={styles.socialLink}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <span className={styles.socialIcon} aria-hidden="true">{icon}</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Cláudio Roberto · Feito com React & TypeScript
        </p>

        <button
          onClick={scrollToTop}
          className={styles.backToTop}
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={16} />
          Topo
        </button>
      </div>
    </footer>
  );
};