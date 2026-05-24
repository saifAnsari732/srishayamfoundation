import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Phone, Mail, MapPin, Soup } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onDonateClick, onVolunteerClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // offset for sticky navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Header Contact Bar (First Tier) */}
      <div className="navbar-top">
        <div className="container nav-top-container">
          {/* Circular Logo Image & Title Text */}
          <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="logo-icon-circle">
              <img src="/logo.jpeg" className="logo-img" alt="श्री श्री श्याम सेवा परिवार लोगो" />
            </div>
            <div className="logo-text-block">
              <span className="logo-title-main">श्री श्री श्याम सेवा परिवार</span>
              <span className="logo-subtitle-sub">सेवा. प्रेम. समर्पण.</span>
            </div>
          </a>
          
          {/* Top Contacts Row */}
          <div className="nav-contact-info">
            <div className="contact-item">
              <Phone className="contact-icon" size={18} />
              <div className="contact-text">
                <span className="contact-label">24/7 हेल्पलाइन</span>
                <span className="contact-value">+91 96511 11303</span>
              </div>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" size={18} />
              <div className="contact-text">
                <span className="contact-label">हमें ईमेल करें</span>
                <span className="contact-value">srisrisyamsewaparivar@gmail.com</span>
              </div>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" size={18} />
              <div className="contact-text">
                <span className="contact-label">हमारा स्थान</span>
                <span className="contact-value">आलमबाग, लखनऊ - 226012</span>
              </div>
            </div>
            <button className="btn btn-primary nav-donate-top" onClick={onDonateClick}>
              <Heart size={14} fill="currentColor" style={{ marginRight: '6px' }} />
              अभी दान करें
            </button>
          </div>

          <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Bottom Nav Links Bar (Second Tier) */}
      <div className="navbar-bottom">
        <div className="container">
          <div className="nav-menu-desktop">
            <a href="#hero" className="nav-link" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>होम</a>
            <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>हमारे बारे में</a>
            <a href="#mission" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('mission'); }}>हमारी सेवा</a>
            <a href="#initiatives" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('initiatives'); }}>परियोजनाएं</a>
            <a href="#gallery" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>गैलरी</a>
            <a href="#volunteer" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('volunteer'); }}>स्वयंसेवक</a>
            <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>संपर्क करें</a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`nav-menu-mobile ${isOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          <a href="#hero" className="mobile-link" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }}>होम</a>
          <a href="#about" className="mobile-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>हमारे बारे में</a>
          <a href="#mission" className="mobile-link" onClick={(e) => { e.preventDefault(); scrollToSection('mission'); }}>हमारी सेवा</a>
          <a href="#initiatives" className="mobile-link" onClick={(e) => { e.preventDefault(); scrollToSection('initiatives'); }}>परियोजनाएं</a>
          <a href="#gallery" className="mobile-link" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>गैलरी</a>
          <a href="#volunteer" className="mobile-link" onClick={(e) => { e.preventDefault(); scrollToSection('volunteer'); }}>स्वयंसेवक</a>
          <a href="#contact" className="mobile-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>संपर्क करें</a>
          <div className="mobile-ctas">
            <button className="btn btn-primary w-full" onClick={() => { setIsOpen(false); onDonateClick(); }}>
              अभी दान करें
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
