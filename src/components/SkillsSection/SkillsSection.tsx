import { useState } from 'react';
import { TECHNOLOGIES, CERTIFICATES } from '../../data/skills';
import { TechnologyCard } from '../TechnologyCard';
import { CertificateCard } from '../CertificateCard';
import styles from './SkillsSection.module.scss';
import { Slider } from '../Slider/Slider';

type TabId = 'technologies' | 'certificates';

const TABS: { id: TabId; label: string; count: number }[] = [
  { id: 'technologies', label: 'Linguagens & Tecnologias', count: TECHNOLOGIES.length },
  { id: 'certificates', label: 'Certificados',             count: CERTIFICATES.length },
];

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<TabId>('technologies');

  return (
    <section className={styles.section} aria-labelledby="skills-heading">
      <p className={styles.badge}>Habilidades</p>
      <h2 id="skills-heading" className={styles.heading}>
        Tecnologias & Certificados
      </h2>

      <div className={styles.tabBar} role="tablist" aria-label="Categorias de habilidades">
        {TABS.map(({ id, label, count }) => (
          <button
            key={id}
            role="tab"
            id={`tab-${id}`}
            aria-selected={activeTab === id}
            aria-controls={`panel-${id}`}
            className={`${styles.tab} ${activeTab === id ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(id)}
          >
            {label}
            <span className={styles.tabCount}>{count}</span>
          </button>
        ))}
      </div>

     <div
        id="panel-technologies"
        role="tabpanel"
        aria-labelledby="tab-technologies"
        hidden={activeTab !== 'technologies'}
        className={styles.panel}
      >
        <Slider>
          {TECHNOLOGIES.map((tech) => (
            <div key={tech.name} style={{ width: '160px' }}> {/* Largura fixa para o TechCard */}
              <TechnologyCard technology={tech} />
            </div>
          ))}
        </Slider>
      </div>

      <div
        id="panel-certificates"
        role="tabpanel"
        aria-labelledby="tab-certificates"
        hidden={activeTab !== 'certificates'}
        className={styles.panel}
      >
        <Slider>
          {CERTIFICATES.map((cert) => (
            <div key={`${cert.issuer}-${cert.title}`} style={{ width: '300px' }}> {/* Largura fixa para o CertCard */}
              <CertificateCard certificate={cert} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}