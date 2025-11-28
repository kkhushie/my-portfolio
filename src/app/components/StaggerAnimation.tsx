// app/components/StaggerAnimation.tsx
'use client';

import { useEffect, useState } from 'react';

interface StaggerAnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const StaggerAnimation = ({ children, delay = 2, className = '' }: StaggerAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default StaggerAnimation;