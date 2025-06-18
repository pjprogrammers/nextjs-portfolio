"use client";

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ExternalLink, Code, ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
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
  
  const projects = [
    {
      title: "Cloud Security Platform",
      description: "A comprehensive security platform for AWS and Azure cloud environments with real-time threat detection and automated remediation.",
      tags: ["AWS", "Azure", "Python", "React", "Terraform"],
      demoUrl: "https://github.com/username/cloud-security-platform",
      repoUrl: "https://github.com/username/cloud-security-platform",
      image: "/images/cybersecurity-bg.jpg"
    },
    {
      title: "Network Vulnerability Scanner",
      description: "An advanced network vulnerability scanner that identifies security risks and provides mitigation recommendations.",
      tags: ["Python", "Docker", "JavaScript", "Security"],
      demoUrl: "https://github.com/username/vulnerability-scanner",
      repoUrl: "https://github.com/username/vulnerability-scanner",
      image: "/images/cybersecurity-bg.jpg"
    }
  ];
  
  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };
  
  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" ref={sectionRef} className="section projects-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="section-title gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Showcasing my work in cloud computing and cybersecurity
          </motion.p>
        </motion.div>
        
        <div className="projects-container">
          <motion.div 
            className="project-navigation"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button 
              onClick={prevProject} 
              className="nav-button prev-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous project"
            >
              <ChevronLeft />
            </motion.button>
            <div className="project-indicator">
              {projects.map((_, index) => (
                <motion.div
                  key={index}
                  className={`indicator-dot ${index === activeProject ? 'active' : ''}`}
                  onClick={() => setActiveProject(index)}
                  whileHover={{ scale: 1.2 }}
                  animate={index === activeProject ? { scale: 1.2 } : { scale: 1 }}
                />
              ))}
            </div>
            <motion.button 
              onClick={nextProject} 
              className="nav-button next-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next project"
            >
              <ChevronRight />
            </motion.button>
          </motion.div>
          
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card browser-mockup ${index === activeProject ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView && index === activeProject ? 
                { opacity: 1, y: 0 } : 
                { opacity: 0, y: 20, display: index === activeProject ? 'block' : 'none' }
              }
              transition={{ duration: 0.5 }}
              style={{
                backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.8), rgba(10, 10, 10, 0.9)), url(${project.image})`,
              }}
            >
              <div className="browser-dots">
                <span className="browser-dot"></span>
                <span className="browser-dot"></span>
                <span className="browser-dot"></span>
              </div>
              <div className="project-content">
                <motion.h3 
                  className="project-title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="project-description"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.description}
                </motion.p>
                <motion.div 
                  className="project-tags"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {project.tags.map((tag, i) => (
                    <motion.span 
                      key={i} 
                      className="project-tag"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i + 0.4 }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "var(--primary)",
                        color: "var(--bg)"
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div 
                  className="project-links"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      className="project-link-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      View Project
                    </motion.button>
                  </Link>
                  <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      className="project-link-button secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Code size={18} />
                      Source Code
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 