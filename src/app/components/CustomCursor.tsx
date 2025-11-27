// app/components/CustomCursor.tsx
'use client';

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleLinkHover);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleLinkHover);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed top-0 left-0 w-4 h-4 bg-[#4a9eff] rounded-full mix-blend-difference pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-75 ${
          isPointer ? 'scale-150 bg-white' : 'scale-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      
      {/* Outer ring */}
      {/* <div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-[#4a9eff] rounded-full mix-blend-difference pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-150"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      /> */}
    </>
  );
};

export default CustomCursor;