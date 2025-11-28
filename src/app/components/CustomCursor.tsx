// app/components/CustomCursor.tsx
'use client';

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      return window.innerWidth <= 768 || 
             'ontouchstart' in window || 
             navigator.maxTouchPoints > 0;
    };

    setIsMobile(checkMobile());

    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    // Don't set up cursor events if mobile
    if (isMobile) return;

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
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleLinkHover);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  // Don't render cursor on mobile
  if (isMobile) return null;
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
    </>
  );
};

export default CustomCursor;