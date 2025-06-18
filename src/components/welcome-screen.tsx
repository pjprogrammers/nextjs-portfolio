"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeScreen() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showWelcome && (
        <motion.div
          className="welcome-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -50,
            filter: "blur(10px)",
            transition: { 
              duration: 0.8,
              ease: [0.65, 0, 0.35, 1]
            }
          }}
        >
          <div className="welcome-content">
            <motion.div 
              className="welcome-logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }
              }}
            >
              <span className="welcome-icon">
                <svg 
                  viewBox="0 0 24 24" 
                  width="48" 
                  height="48" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                <motion.div 
                  className="welcome-icon-glow"
                  animate={{ 
                    opacity: [0.5, 1, 0.5], 
                    scale: [1, 1.2, 1] 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2, 
                    ease: "easeInOut" 
                  }}
                ></motion.div>
              </span>
            </motion.div>
            
            <div className="welcome-text">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }}
              >
                <span className="welcome-gradient">Welcome</span>
              </motion.h1>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }}
              >
                Exploring Cloud Security & Cybersecurity
              </motion.p>
            </div>
          </div>
          
          <motion.div 
            className="loading-bar"
            initial={{ scaleX: 0 }}
            animate={{ 
              scaleX: 1,
              transition: {
                duration: 2.5,
                ease: [0.22, 1, 0.36, 1]
              }
            }}
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 