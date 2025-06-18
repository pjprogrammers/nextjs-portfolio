"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown, Twitter, Shield } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
        <div className="hero-shapes">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="hero-title">
                <span>Hi, I&apos;m </span>
                <span className="gradient-text">
                  PJ Coder
                </span>
              </h1>
            </motion.div>

            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Cloud Computing & Cybersecurity Specialist
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I architect secure cloud environments and implement robust cybersecurity solutions to protect digital assets and infrastructure from evolving threats.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="/#contact" className="btn btn-primary">
                Get in Touch <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link href="/#projects" className="btn btn-outline">
                View Projects
              </Link>
            </motion.div>

            <motion.div
              className="social-links"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link
                href="https://github.com/pjcoder"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://linkedin.com/in/pjcoder"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com/pjcoder"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://tryhackme.com/p/pjcoder"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="TryHackMe"
              >
                <Shield size={20} />
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="hero-image">
              <div className="hero-image-wrapper">
                <div className="hero-blob"></div>
                <div className="hero-analytics">
                  <div className="hero-analytics-item">
                    <span className="hero-analytics-number">99.9%</span>
                    <span className="hero-analytics-label">Uptime</span>
                  </div>
                  <div className="hero-analytics-item">
                    <span className="hero-analytics-number">100%</span>
                    <span className="hero-analytics-label">Security</span>
                  </div>
                </div>
                <div className="hero-security-badges">
                  <div className="hero-security-badge">
                    <svg viewBox="0 0 24 24" fill="none" className="hero-security-icon">
                      <path d="M20.91 11.12C20.91 16.01 17.36 20.59 12.51 21.93C12.18 22.02 11.82 22.02 11.49 21.93C6.64 20.59 3.09 16.01 3.09 11.12V6.73C3.09 5.91 3.7 5.23 4.51 5.13L11.42 4.02C11.8 3.98 12.2 3.98 12.58 4.02L19.49 5.13C20.3 5.23 20.91 5.91 20.91 6.73V11.12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 12.5C13.1 12.5 14 11.6 14 10.5C14 9.4 13.1 8.5 12 8.5C10.9 8.5 10 9.4 10 10.5C10 11.6 10.9 12.5 12 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 12.5V15.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="hero-security-badge">
                    <svg viewBox="0 0 24 24" fill="none" className="hero-security-icon">
                      <path d="M16.4232 9.44756V7.30056C16.4232 4.78756 14.3852 2.74956 11.8722 2.74956C9.35925 2.73856 7.31325 4.76656 7.30225 7.28056V7.30056V9.44756" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12.0001 14.6667V17.5089" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.0001 8.79492C6.37913 8.79492 4.01513 10.8509 4.01513 15.9209C4.01513 20.9899 6.37913 23.0459 12.0001 23.0459C17.6211 23.0459 19.9851 20.9899 19.9851 15.9209C19.9851 10.8509 17.6211 8.79492 12.0001 8.79492Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="hero-security-badge">
                    <svg viewBox="0 0 24 24" fill="none" className="hero-security-icon">
                      <path d="M8.38086 12.0002L10.7909 14.4102L15.6209 9.58023" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.9993 2.3999H12.9993C16.9993 2.3999 18.9993 4.3999 18.9993 8.3999V15.5999C18.9993 19.5999 16.9993 21.5999 12.9993 21.5999H10.9993C6.99929 21.5999 4.99929 19.5999 4.99929 15.5999V8.3999C4.99929 4.3999 6.99929 2.3999 10.9993 2.3999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="hero-scroll"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link href="/#about" className="scroll-down">
            <span className="scroll-text">Scroll Down</span>
            <ChevronDown size={18} className="scroll-icon animate-float" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 