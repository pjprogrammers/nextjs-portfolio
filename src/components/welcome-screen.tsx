"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Code } from "lucide-react";

export default function WelcomeScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`welcome-overlay ${!isVisible ? 'hidden' : ''}`}>
      <div className="welcome-content">
        <motion.div 
          className="welcome-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="logo-container">
            <div className="logo-icon">
              <Shield size={48} className="logo-shield" />
              <Code size={24} className="logo-code" />
            </div>
          </div>
        </motion.div>
        
        <h1 className="welcome-title">Welcome to PJ Coder</h1>
        <p className="welcome-message">
          Empowering the cloud with security expertise
        </p>
        
        <div className="welcome-loader"></div>
      </div>
    </div>
  );
} 