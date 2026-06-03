import { useRef } from 'react';

/**
 * @param scrollAmount Distância em pixels que o carrossel deve andar por clique.
 * @param tolerance Margem de segurança para arredondamento de pixels dos navegadores.
 */

export const useCarousel = (scrollAmount: number = 372, tolerance: number = 10) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const handleScroll = (direction: 'left' | 'right') => {
    if (!trackRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;

    if (direction === 'left') {
      if (scrollLeft <= tolerance) {
        trackRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
      } else {
        trackRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    } else {
      if (scrollLeft + clientWidth >= scrollWidth - tolerance) {
        trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return { trackRef, handleScroll };
};