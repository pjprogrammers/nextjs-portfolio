"use client";

import { motion } from "framer-motion";
import { Cloud, Shield, Code, Server } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <h2>
            About <span className="accent">Me</span>
          </h2>
          <div className="divider"></div>
          <p>
            I'm passionate about leveraging technology to solve complex problems and enhance digital experiences.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="journey-content"
          >
            <h3 className="journey-title">My Journey</h3>
            <p className="journey-text">
              My passion for technology began early, and I've been developing my skills in cloud computing
              and cybersecurity ever since. I believe in creating secure, scalable solutions 
              that leverage the power of modern cloud infrastructures.
            </p>
            <p className="journey-text">
              I also enjoy building websites and web applications, using AI tools to enhance
              development workflows and create more intuitive user experiences. 
            </p>
            <p className="journey-text">
              When I'm not working with cloud services or security protocols, you might find me
              exploring new frameworks, contributing to open-source projects, or learning about
              the latest advancements in AI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="skills-grid"
          >
            <div className="skill-card">
              <Cloud className="skill-icon" size={28} />
              <h4 className="skill-title">Cloud Computing</h4>
              <p className="skill-description">
                Designing and implementing scalable cloud infrastructures.
              </p>
            </div>
            
            <div className="skill-card">
              <Shield className="skill-icon" size={28} />
              <h4 className="skill-title">Cybersecurity</h4>
              <p className="skill-description">
                Implementing robust security protocols and best practices.
              </p>
            </div>
            
            <div className="skill-card">
              <Code className="skill-icon" size={28} />
              <h4 className="skill-title">Web Development</h4>
              <p className="skill-description">
                Building modern, responsive websites with cutting-edge technologies.
              </p>
            </div>
            
            <div className="skill-card">
              <Server className="skill-icon" size={28} />
              <h4 className="skill-title">AI Integration</h4>
              <p className="skill-description">
                Leveraging AI tools to enhance development and user experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 