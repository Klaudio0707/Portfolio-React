import { renderTechIcon } from '@/utils/renderTechIcon';
import type { Technology } from '../../types/index';
import styles from './TechnologyCard.module.scss';

interface TechnologyCardProps {
  technology: Technology;
}

interface TechnologyCardProps {
  technology: Technology;
}

export const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  const { name } = technology;

  return (
  <article className={styles.card} aria-label={name}>
      <span className={styles.icon} aria-hidden="true">
        {renderTechIcon(name)}
      </span>
      <span className={styles.name}>{name}</span>
    </article>
  );
}
