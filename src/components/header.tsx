"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, Code } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      
      // Find active section
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#links", label: "Links" },
    { href: "#contact", label: "Contact" }
  ];
  
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };
  
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };
  
  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }
    },
    exit: { 
      opacity: 0, 
      x: "100%",
      transition: { 
        ease: "easeInOut", 
        duration: 0.3 
      }
    }
  };

  return (
    <motion.header 
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`header ${scrolled ? "header-scrolled" : ""}`}
    >
      <div className="container">
        <div className="header-content">
          <Link href="/" className="logo">
            <div className="logo-icon">
              <Shield className="logo-shield animate-pulse" />
              <Code className="logo-code animate-float" />
            </div>
            <span className="logo-text">PJ <span className="gradient-text">Coder</span></span>
          </Link>
          
          <nav className="desktop-nav">
            <ul>
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.href} 
                  custom={i}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link 
                    href={link.href} 
                    className={`nav-link ${activeSection === link.href.substring(1) ? "active" : ""}`}
                  >
                    {link.label}
                    {activeSection === link.href.substring(1) && (
                      <motion.span 
                        className="nav-indicator" 
                        layoutId="nav-indicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
          
          <button className="menu-button" onClick={toggleMenu} aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="mobile-menu-header">
              <Link href="/" className="logo" onClick={() => setIsOpen(false)}>
                <div className="logo-icon">
                  <Shield className="logo-shield" />
                  <Code className="logo-code" />
                </div>
                <span className="logo-text">PJ <span className="gradient-text">Coder</span></span>
              </Link>
              <button className="close-button" onClick={toggleMenu} aria-label="Close">
                <X size={24} />
              </button>
            </div>
            <nav className="mobile-nav">
              <ul>
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: i * 0.1, duration: 0.3 }
                    }}
                  >
                    <Link 
                      href={link.href} 
                      className={activeSection === link.href.substring(1) ? "active" : ""}
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
} 