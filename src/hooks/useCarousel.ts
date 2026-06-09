import { useRef, type MouseEvent } from 'react';

export const useCarousel = (scrollAmount: number = 350) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false); 
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleScroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollPos = trackRef.current.scrollLeft;
      trackRef.current.scrollTo({
        left: direction === 'left' ? scrollPos - scrollAmount : scrollPos + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const onMouseDown = (e: MouseEvent) => {
    isDragging.current = true;
    if (!trackRef.current) return;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = 'grabbing';
  };

  const onMouseLeaveOrUp = () => {
    isDragging.current = false;
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grab';
    }
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; 
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const dragEvents = {
    onMouseDown,
    onMouseLeave: onMouseLeaveOrUp,
    onMouseUp: onMouseLeaveOrUp,
    onMouseMove,
  };

  return { trackRef, handleScroll, dragEvents };
};