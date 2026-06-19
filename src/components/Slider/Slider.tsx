import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Slider.module.scss';

interface SliderProps {
  children: React.ReactNode;
}

export function Slider({ children }: SliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.sliderWrapper}>
      <button
        className={`${styles.navButton} ${styles.leftBtn}`}
        onClick={() => scroll('left')}
        aria-label="Rolar para a esquerda"
      >
        <ChevronLeft size={24} />
      </button>

      <div className={styles.track} ref={trackRef}>
        {children}
      </div>

      <button
        className={`${styles.navButton} ${styles.rightBtn}`}
        onClick={() => scroll('right')}
        aria-label="Rolar para a direita"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}