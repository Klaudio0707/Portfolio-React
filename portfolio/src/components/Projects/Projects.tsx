import { projectsData } from '../../data/projectsData';
import styles from './Projects.module.scss';

export const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projetos">
      <div className={styles.header}>
        <span className={styles.badge}>Portfólio</span>
        <h2 className={styles.title}>Engenharia em Prática</h2>
      </div>

      <div className={styles.gridContainer}>
        {projectsData.map((project) => (
          <article key={project.id} className={styles.projectCard}>
            <div className={styles.imageWrapper}>
              <img src={project.image} alt={`Interface do projeto ${project.title}`} loading="lazy" />
              
              {/* Indicador de Status Visual */}
              <div className={`${styles.statusIndicator} ${styles[project.status]}`}>
                <span className={styles.pulse}></span>
                {project.status === 'completed' ? 'Concluído' : 'Em Desenvolvimento'}
              </div>
            </div>

            <div className={styles.content}>
              <span className={styles.highlight}>{project.keyHighlight}</span>
              <h3>{project.title}</h3>
              <p className={styles.motive}>{project.motive}</p>
              
              <div className={styles.techStack}>
                {project.techStack.map((tech) => (
                  <span key={tech} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};