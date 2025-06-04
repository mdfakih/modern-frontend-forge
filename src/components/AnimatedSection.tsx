import { useEffect } from 'react';
import { useAnimations } from '../hooks/useAnimations';

interface AnimatedSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const AnimatedSection = ({
  title,
  children,
  className = '',
}: AnimatedSectionProps) => {
  const { elementRef, animate } = useAnimations<HTMLElement>();

  useEffect(() => {
    // Animate the section when it mounts
    animate.fadeIn();
    animate.slideUp();
  }, []);

  return (
    <section
      ref={elementRef}
      className={`py-20 ${className}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">{title}</h2>
        <div className="space-y-8">{children}</div>
      </div>
    </section>
  );
};

// Example usage of animated elements
export const AnimatedCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const { elementRef, animate } = useAnimations<HTMLDivElement>();

  useEffect(() => {
    animate.scrollFadeIn();
    animate.hoverScale(1.05);
  }, []);

  return (
    <div
      ref={elementRef}
      className="p-6 rounded-lg bg-card hover:bg-accent transition-colors duration-300"
    >
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

// Example of a magnetic button
export const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const { elementRef, animate } = useAnimations<HTMLButtonElement>();

  useEffect(() => {
    animate.magnetic();
  }, []);

  return (
    <button
      ref={elementRef}
      className="px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
    >
      {children}
    </button>
  );
};
