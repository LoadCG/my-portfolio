// src/hooks/useDynamicHeight.ts
import { useState, useEffect } from 'react';

export const useDynamicHeight = (offsetPx: number) => {
  const [height, setHeight] = useState('100vh');

  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight - offsetPx;
      setHeight(`${vh}px`);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    return () => window.removeEventListener('resize', updateHeight);
  }, [offsetPx]);

  return height;
};