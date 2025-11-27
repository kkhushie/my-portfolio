// app/components/AnimatedBackground.tsx
'use client';

import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(74,158,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(74,158,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] animate-grid-pulse"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#4a9eff] rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-[#4a9eff] rounded-full filter blur-[100px] opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-[#3a7ad9] rounded-full filter blur-[100px] opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default AnimatedBackground;