"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Shield, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Cloud Security Dashboard",
    description: "An enterprise-grade dashboard monitoring cloud infrastructure security posture across AWS, Azure & GCP with real-time threat detection and compliance visualization.",
    image: "/images/projects/cloud-dashboard.jpg",
    tags: ["AWS", "Azure", "Security", "React", "Node.js"],
    demoUrl: "https://cloud-security-dashboard.example.com",
    repoUrl: "https://github.com/pjcoder/cloud-security-dashboard",
    url: "cloud-security-dashboard.example.com",
    bgGradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)",
    iconGradient: "linear-gradient(135deg, #10b981, #0ea5e9)",
    icon: <Shield className="project-feature-icon" />
  },
  {
    id: 2,
    title: "Zero Trust Access Platform",
    description: "A comprehensive zero-trust network solution providing fine-grained access control for cloud resources with advanced threat protection and identity verification.",
    image: "/images/projects/zero-trust.jpg",
    tags: ["Zero Trust", "Network Security", "Go", "Kubernetes"],
    demoUrl: "https://ztna.example.com",
    repoUrl: "https://github.com/pjcoder/zero-trust-access",
    url: "ztna.example.com",
    bgGradient: "linear-gradient(135deg, rgba(14, 165, 233, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)",
    iconGradient: "linear-gradient(135deg, #0ea5e9, #8b5cf6)",
    icon: <Globe className="project-feature-icon" />
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="bg-blur bg-blur-1"></div>
      <div className="bg-blur bg-blur-2"></div>
      
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <h2>
            Featured <span className="accent">Projects</span>
          </h2>
          <div className="divider"></div>
          <p>
            Explore my innovative work in cloud computing and cybersecurity
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <div className="project-feature" style={{ background: project.bgGradient }}>
                <div className="project-feature-icon-wrapper" style={{ background: project.iconGradient }}>
                  {project.icon}
                </div>
                <h3 className="gradient-text project-feature-title">{project.title}</h3>
              </div>
              
              <div className="browser-mockup">
                <div className="browser-bar">
                  <div className="browser-circles">
                    <div className="browser-circle"></div>
                    <div className="browser-circle"></div>
                    <div className="browser-circle"></div>
                  </div>
                  <div className="browser-address">{project.url}</div>
                </div>
                <div className="project-image-container">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={340}
                    className="project-image"
                  />
                  <div className="project-overlay"></div>
                </div>
              </div>
              
              <div className="project-info">
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary project-link-button">
                    Live Demo <ExternalLink size={16} />
                  </Link>
                  <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline project-link-button">
                    Source <Github size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 