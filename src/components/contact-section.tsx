"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <h2>
            Get in <span className="accent">Touch</span>
          </h2>
          <div className="divider"></div>
          <p>
            I'm always interested in new projects and opportunities. Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="contact-info"
          >
            <h3>Contact Information</h3>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-method-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-method-content">
                  <h4>Email</h4>
                  <a href="mailto:pjcoder@example.com">
                    pjcoder@example.com
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-method-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-method-content">
                  <h4>Phone</h4>
                  <a href="tel:+1234567890">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-method-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-method-content">
                  <h4>Location</h4>
                  <p>
                    Remote - Worldwide
                  </p>
                </div>
              </div>
            </div>
            
            <div className="availability">
              <h4>Availability</h4>
              <p>
                I'm currently available for freelance work and consultations.
              </p>
              <p>
                Feel free to reach out for collaborations or just to say hello!
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="contact-form"
          >
            <h3>Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Your message here..."
                />
              </div>
              
              <div className="form-submit">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-btn"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>Send Message <Send size={16} /></>
                  )}
                </button>
              </div>
              
              {submitted && (
                <div className="success-message">
                  Your message has been sent successfully!
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 