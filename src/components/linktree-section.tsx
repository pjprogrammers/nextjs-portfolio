"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Youtube, Twitter, Instagram, BookOpen, Server, Shield, Terminal, Laptop, ExternalLink } from "lucide-react";

const links = [
  {
    id: 1,
    title: "GitHub",
    description: "Code repositories",
    icon: <Github className="link-icon" />,
    url: "https://github.com/pjcoder",
    color: "rgba(33, 37, 41, 0.8)",
  },
  {
    id: 2,
    title: "LinkedIn",
    description: "Professional network",
    icon: <Linkedin className="link-icon" />,
    url: "https://linkedin.com/in/pjcoder",
    color: "rgba(10, 102, 194, 0.8)",
  },
  {
    id: 3,
    title: "Twitter (X)",
    description: "Tech insights",
    icon: <Twitter className="link-icon" />,
    url: "https://twitter.com/pjcoder",
    color: "rgba(29, 161, 242, 0.8)",
  },
  {
    id: 4,
    title: "YouTube",
    description: "Tutorials & demos",
    icon: <Youtube className="link-icon" />,
    url: "https://youtube.com/@pjcoder",
    color: "rgba(255, 0, 0, 0.8)",
  },
  {
    id: 5,
    title: "Instagram",
    description: "Behind the scenes",
    icon: <Instagram className="link-icon" />,
    url: "https://instagram.com/pjcoder",
    color: "rgba(195, 42, 163, 0.8)",
  },
  {
    id: 6,
    title: "TryHackMe",
    description: "Security learning",
    icon: <Shield className="link-icon" />,
    url: "https://tryhackme.com/p/pjcoder",
    color: "rgba(255, 25, 25, 0.8)",
  },
  {
    id: 7,
    title: "HackTheBox",
    description: "Hacking challenges",
    icon: <Terminal className="link-icon" />,
    url: "https://app.hackthebox.com/profile/pjcoder",
    color: "rgba(158, 234, 52, 0.8)",
  },
  {
    id: 8,
    title: "AWS Community",
    description: "Cloud resources",
    icon: <Server className="link-icon" />,
    url: "https://aws.amazon.com/developer/community/pjcoder",
    color: "rgba(255, 153, 0, 0.8)",
  },
  {
    id: 9,
    title: "Blog",
    description: "Articles & insights",
    icon: <BookOpen className="link-icon" />,
    url: "https://medium.com/@pjcoder",
    color: "rgba(15, 115, 115, 0.8)",
  },
];

export default function LinkTreeSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="links" className="linktree-section">
      <div className="linktree-bg">
        <div className="linktree-grid-pattern"></div>
        <div className="linktree-gradient"></div>
      </div>
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <h2>
            Connect <span className="accent">With Me</span>
          </h2>
          <div className="divider"></div>
          <p>
            Find me across the internet on these platforms
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="links-container"
        >
          {links.map((link) => (
            <motion.div
              key={link.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="link-card"
              style={{
                '--link-color': link.color,
              } as React.CSSProperties}
            >
              <Link href={link.url} target="_blank" rel="noopener noreferrer" className="link-card-inner">
                <div className="link-icon-container">
                  {link.icon}
                </div>
                <div className="link-content">
                  <div className="link-title">{link.title}</div>
                  <div className="link-description">{link.description}</div>
                </div>
                <ExternalLink className="link-external-icon" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 