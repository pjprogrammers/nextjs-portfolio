"use client";

import { motion } from "framer-motion";
import { Cloud, Shield, Server, Lock, Database, Key, Network, Award, Layers, Code, Cpu } from "lucide-react";

const skills = [
  {
    category: "Cloud Computing",
    icon: <Cloud size={32} className="skill-category-icon" />,
    items: [
      "AWS (EC2, S3, Lambda, CloudFormation)", 
      "Azure (Virtual Machines, Blob Storage, Functions)", 
      "Google Cloud Platform (Compute Engine, Cloud Storage)",
      "Docker & Kubernetes Orchestration",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "CI/CD Pipelines (GitHub Actions, Jenkins)",
      "Cloud Security Best Practices",
      "Serverless Architecture"
    ],
    description: "Expertise in designing, implementing, and managing scalable and secure cloud solutions across major platforms."
  },
  {
    category: "Cloud Architecture",
    icon: <Server size={32} className="skill-category-icon" />,
    items: [
      "Microservices Architecture",
      "Event-Driven Design",
      "High Availability Systems",
      "Disaster Recovery Planning", 
      "Cost Optimization",
      "Performance Tuning",
      "Multi-Cloud Strategy",
      "Cloud Migration"
    ],
    description: "Skilled in creating robust cloud architectures that balance performance, cost, and security requirements."
  },
  {
    category: "Cybersecurity",
    icon: <Shield size={32} className="skill-category-icon" />,
    items: [
      "Network Security & Firewalls", 
      "Penetration Testing (OWASP Top 10)", 
      "Security Auditing & Compliance",
      "Threat Intelligence & Analysis",
      "Encryption Protocols",
      "Identity & Access Management",
      "SIEM Implementation",
      "Zero Trust Architecture"
    ],
    description: "Comprehensive understanding of cybersecurity principles, threats, and protection strategies across various environments."
  },
  {
    category: "Security Operations",
    icon: <Lock size={32} className="skill-category-icon" />,
    items: [
      "Security Incident Response",
      "Vulnerability Management",
      "Security Monitoring",
      "Digital Forensics",
      "Ethical Hacking",
      "Security Policy Development",
      "Risk Assessment",
      "Compliance Frameworks (GDPR, HIPAA, SOC2)"
    ],
    description: "Experience in implementing and managing security operations to protect digital assets and respond to incidents effectively."
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="bg-blur bg-blur-1"></div>
      <div className="bg-blur bg-blur-2"></div>
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <h2>
            My <span className="accent">Skills</span>
          </h2>
          <div className="divider"></div>
          <p>
            I've developed specialized expertise in cloud computing and cybersecurity, constantly expanding my knowledge to stay ahead in this rapidly evolving field.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-category"
            >
              <div className="skill-category-header">
                {skillGroup.icon}
                <h3 className="skill-category-title">{skillGroup.category}</h3>
              </div>
              
              <p className="skill-category-description">
                {skillGroup.description}
              </p>
              
              <div className="skill-items">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="skill-item"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="approach"
        >
          <h3 className="approach-title">Professional Approach</h3>
          <div className="approach-text">
            <p>
              I approach every project with a security-first mindset, ensuring that solutions are not only functional but also protected against the evolving threat landscape. By staying current with the latest cloud technologies and security practices, I design architectures that are scalable, resilient, and compliant with industry standards.
            </p>
            <p>
              My methodology integrates security at every stage of the development lifecycle, from initial architecture design to deployment and ongoing maintenance. I believe in continuous improvement, regularly auditing systems, updating security policies, and implementing new protective measures as threats evolve.
            </p>
            <p>
              I'm committed to balancing robust security with optimized performance and cost efficiency, creating cloud solutions that provide maximum value while maintaining the highest level of protection for sensitive data and critical resources.
            </p>
          </div>
          
          <div className="certifications-container">
            <h4 className="certifications-title">Certifications</h4>
            <div className="certifications-grid">
              <div className="certification">
                <Award className="certification-icon" />
                <span className="certification-name">AWS Certified Solutions Architect</span>
              </div>
              <div className="certification">
                <Award className="certification-icon" />
                <span className="certification-name">Azure Security Engineer Associate</span>
              </div>
              <div className="certification">
                <Award className="certification-icon" />
                <span className="certification-name">Certified Ethical Hacker (CEH)</span>
              </div>
              <div className="certification">
                <Award className="certification-icon" />
                <span className="certification-name">Certified Information Systems Security Professional (CISSP)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 