"use client";

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Globe, Mail, ExternalLink } from 'lucide-react';

export default function LinkTreeSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const links = [
    {
      title: 'GitHub',
      description: 'Check out my code repositories and open-source contributions',
      url: 'https://github.com/pjcoder',
      icon: <Github size={24} />,
      color: '#333',
    },
    {
      title: 'LinkedIn',
      description: 'Connect with me professionally and view my experience',
      url: 'https://linkedin.com/in/pjcoder',
      icon: <Linkedin size={24} />,
      color: '#0077B5',
    },
    {
      title: 'Twitter',
      description: 'Follow me for the latest in cloud security and tech news',
      url: 'https://twitter.com/pjcoder',
      icon: <Twitter size={24} />,
      color: '#1DA1F2',
    },
    {
      title: 'Blog',
      description: 'Read my articles on cloud security, cybersecurity, and more',
      url: 'https://pjcoder-blog.com',
      icon: <Globe size={24} />,
      color: '#10b981',
    },
    {
      title: 'Email',
      description: 'Get in touch with me directly for inquiries and collaboration',
      url: 'mailto:contact@pjcoder.com',
      icon: <Mail size={24} />,
      color: '#E94E77',
    },
    {
      title: 'Resume',
      description: 'View and download my professional resume',
      url: '/resume.pdf',
      icon: <ExternalLink size={24} />,
      color: '#8b5cf6',
    }
  ];

  return (
    <section id="links" ref={sectionRef} className="section linktree-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title gradient-text">Connect With Me</h2>
          <p className="section-subtitle">Find me across the web and social platforms</p>
        </motion.div>

        <div className="linktree-grid">
          {links.map((link, index) => (
            <motion.div 
              key={index}
              className="linktree-card card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15), 0 0 15px rgba(16, 185, 129, 0.2)', 
                transition: { duration: 0.3 } 
              }}
            >
              <Link href={link.url} target="_blank" rel="noopener noreferrer" className="linktree-link">
                <div className="linktree-icon" style={{ color: link.color }}>
                  {link.icon}
                  <div className="icon-ring" style={{ borderColor: link.color }}></div>
                </div>
                <div className="linktree-content">
                  <h3 className="linktree-title">{link.title}</h3>
                  <p className="linktree-description">{link.description}</p>
                </div>
                <div className="linktree-arrow">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink size={18} />
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 