import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale';
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const animationClasses = {
    'fade-up': 'scroll-animate',
    'fade-left': 'scroll-animate-left',
    'fade-right': 'scroll-animate-right',
    'scale': 'scroll-animate-scale',
  };

  return (
    <div
      ref={ref}
      className={cn(
        animationClasses[animation],
        isVisible && 'visible',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
