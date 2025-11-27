// app/components/PageLoader.tsx
'use client';

import { useEffect, useState } from 'react';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-[#0a0f1a] z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo/Text */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 animate-pulse">
            Khushie Pal
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4a9eff] to-[#3a7ad9] mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-gradient-to-r from-[#4a9eff] to-[#3a7ad9] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading Text */}
        <p className="text-gray-400 text-sm animate-pulse">
          Loading portfolio...
        </p>
      </div>
    </div>
  );
};

export default PageLoader;