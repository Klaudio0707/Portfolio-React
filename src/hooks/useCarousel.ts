import { useRef, useState, type MouseEvent } from 'react';

export const useCarousel = (scrollAmount: number = 320) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const newScrollPosition = trackRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      trackRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);

    trackRef.current.style.scrollBehavior = 'auto';
    trackRef.current.style.scrollSnapType = 'none';
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
    if (trackRef.current) {
      trackRef.current.style.scrollBehavior = 'smooth';
      trackRef.current.style.scrollSnapType = 'x proximity';
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault(); 
    
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; 
   
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  return {
    trackRef,
    handleScroll,
    dragEvents: {
      onMouseDown: handleMouseDown,
      onMouseLeave: handleMouseLeaveOrUp,
      onMouseUp: handleMouseLeaveOrUp,
      onMouseMove: handleMouseMove,
    }
  } as const;
};