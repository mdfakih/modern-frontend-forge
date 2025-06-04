import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { customCursor } from '../lib/animations';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cursorRef.current && cursorDotRef.current) {
      customCursor(cursorRef.current);

      // Add hover effect for interactive elements
      const handleMouseEnter = () => {
        gsap.to(cursorRef.current, {
          scale: 1.5,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      const handleMouseLeave = () => {
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"]',
      );
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });

      return () => {
        interactiveElements.forEach((el) => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    }
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 w-8 h-8 rounded-full border-2 border-primary/50 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-50 w-2 h-2 rounded-full bg-primary"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};
