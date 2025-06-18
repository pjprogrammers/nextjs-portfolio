"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <Link href="/" className="footer-logo">
              <span>PJ</span>
              <span>Coder</span>
            </Link>
            <p className="footer-description">
              Cloud computing and cybersecurity enthusiast, building modern websites with AI assistance.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-nav">
              <h3>Navigation</h3>
              <ul className="footer-nav-links">
                <li>
                  <Link href="/" className="footer-nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="footer-nav-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#projects" className="footer-nav-link">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/#skills" className="footer-nav-link">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="footer-nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="footer-social">
              <h3>Connect</h3>
              <div className="social-links">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </Link>
                <Link
                  href="mailto:pjcoder@example.com"
                  className="social-link"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} PJ Coder. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="scroll-top"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
} 