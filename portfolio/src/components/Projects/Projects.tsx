import { projectsData } from '../../data/projectsData';
import styles from './Projects.module.scss';
import { renderTechIcon } from '../../utils/renderTechIcon';

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
                            <div className={`${styles.statusIndicator} ${styles[project.status]}`}>
                                <span className={styles.pulse}></span>
                                {project.status === 'completed' ? 'Concluído' : 'Em Desenvolvimento'}
                            </div>
                        </div>

                        <div className={styles.content}>

                            <div className={styles.mainInfo}>
                                <span className={styles.highlight}>{project.keyHighlight}</span>
                                <h3>{project.title}</h3>
                                <p className={styles.motive}>{project.motive}</p>
                            </div>

                            <div className={styles.cardFooter}>
                                <div className={styles.techStack}>
                                    {project.techStack.slice(0, 3).map((tech) => (
                                        <span key={tech} className={styles.techBadge}>
                                            {renderTechIcon(tech)}
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className={styles.cardActions}>
                                    {project.deployUrl && (
                                        <a href={project.deployUrl} target="_blank" rel="noopener noreferrer" className={styles.btnDeploy}>
                                            Deploy
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.btnGithub}>
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>

                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};