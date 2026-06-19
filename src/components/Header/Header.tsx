import { Menu, X } from 'lucide-react';
import styles from './Header.module.scss';
import fotoPerfil from '../../assets/foto-perfil.jpeg';
import { useHeader } from '../../hooks/useHeader';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrollVisibility } from '../../hooks/useScrollVisibility';

const NAV_LINKS = [
  { href: '#home', label: 'Início' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#about', label: 'Sobre' },
  { href: '#project', label: 'Projetos' },
  { href: '#contact', label: 'Contato' },
] as const;

const SECTION_IDS = NAV_LINKS.map(l => l.href.replace('#', ''));

export const Header = () => {
  const { menuOpen, toggleMenu, closeMenu } = useHeader();
  const activeSection = useActiveSection(SECTION_IDS);
  const isScrolled = useScrollVisibility(80);

  return (
    <header
      className={`${styles.headerContainer} ${isScrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.headerBrand}>
        <a href="#home" className={styles.logoGroup} onClick={closeMenu}>
          <img
            src={fotoPerfil}
            alt="Foto de Cláudio Roberto"
            className={styles.microAvatar}
          />
          <span translate="no" className={styles.logo}>Cláudio Roberto</span>
        </a>
      </div>

      <nav
        className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
        aria-label="Navegação principal"
      >
        <ul>
          {NAV_LINKS.map(({ href, label }) => {
            const id = href.replace('#', '');
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className={`${styles.navLink} ${activeSection === id ? styles.active : ''
                    }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={styles.headerRight}>

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
};
