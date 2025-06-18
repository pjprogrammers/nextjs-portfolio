"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AmbientEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    // Mouse cursor effect
    const handleMouseMove = (e: MouseEvent) => {
      const cursorEffect = document.documentElement;
      const x = e.clientX;
      const y = e.clientY;
      
      // Update CSS variables for cursor position
      cursorEffect.style.setProperty('--cursor-x', `${x}px`);
      cursorEffect.style.setProperty('--cursor-y', `${y}px`);
      
      setMousePosition({ x, y });
      document.body.classList.add('has-cursor-effect');
      
      // Debounce to remove the effect when mouse stops moving
      const timeout = setTimeout(() => {
        document.body.classList.remove('has-cursor-effect');
      }, 2000);
      
      return () => clearTimeout(timeout);
    };
    
    // Scroll effect
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = Math.min(scrolled / scrollTotal, 1);
      setScrollProgress(progress);
      
      // Add scroll-active class when user scrolls
      document.body.classList.add('is-scrolling');
      
      // Debounce to remove the effect when scrolling stops
      const timeout = setTimeout(() => {
        document.body.classList.remove('is-scrolling');
      }, 100);
      
      return () => clearTimeout(timeout);
    };
    
    // Add floating elements animation on interval
    const floatingInterval = setInterval(() => {
      const floatingElements = document.querySelectorAll('.animate-float');
      floatingElements.forEach((el) => {
        if (Math.random() > 0.5) {
          el.classList.add('float-active');
          setTimeout(() => {
            el.classList.remove('float-active');
          }, 3000);
        }
      });
    }, 5000);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(floatingInterval);
    };
  }, []);
  
  return (
    <>
      <div className="bg-animation">
        <motion.div 
          className="particle"
          animate={{
            x: [0, 20, 0, -20, 0],
            y: [0, -20, 0, 20, 0],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="particle"
          animate={{
            x: [0, -30, 0, 30, 0],
            y: [0, 30, 0, -30, 0],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
        <motion.div 
          className="particle"
          animate={{
            x: [0, 40, 20, -20, 0],
            y: [0, -10, 20, 10, 0],
          }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      <div className="ambient-grid">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className={`grid-point ${Math.random() > 0.7 ? 'grid-point-active' : ''}`}
            style={{
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>
      
      <div 
        className="scroll-progress-bar" 
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
    </>
  );
} 