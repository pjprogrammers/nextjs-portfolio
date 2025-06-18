"use client";

import { useEffect } from 'react';

export default function AmbientEffects() {
  useEffect(() => {
    // Mouse cursor effect
    const handleMouseMove = (e: MouseEvent) => {
      const cursorEffect = document.documentElement;
      cursorEffect.style.setProperty('--cursor-x', `${e.clientX}px`);
      cursorEffect.style.setProperty('--cursor-y', `${e.clientY}px`);
      document.body.classList.add('has-cursor-effect');
      
      // Debounce to remove the effect when mouse stops moving
      const timeout = setTimeout(() => {
        document.body.classList.remove('has-cursor-effect');
      }, 2000);
      
      return () => clearTimeout(timeout);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="bg-animation">
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
    </div>
  );
} 