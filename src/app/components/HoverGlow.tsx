// app/components/HoverGlow.tsx
'use client';

import { useState } from 'react';

interface HoverGlowProps {
  children: React.ReactNode;
  className?: string;
}

const HoverGlow = ({ children, className = '' }: HoverGlowProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative transition-all duration-500 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-[#4a9eff] to-[#3a7ad9] rounded-2xl blur-md transition-opacity duration-500 ${
          isHovered ? 'opacity-30' : 'opacity-0'
        }`}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default HoverGlow;