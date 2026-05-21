import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Sparkles } from 'lucide-react';
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
      const offset = 80; // height of sticky navbar
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
    <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src="/logo.png" alt="Sri Syam Foundation Logo" className="navbar-logo-img" />
        </a>

        {/* Desktop Menu */}
        <div className="nav-menu-desktop">
          <a href="#hero" className="nav-link" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>गृह (Home)</a>
          <a href="#mission" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('mission'); }}>मिशन व विज़न</a>
          <a href="#initiatives" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('initiatives'); }}>कार्य क्षेत्र</a>
          <a href="#gallery" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>चित्र दीर्घा</a>
          <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>हमारे बारे में</a>
          <a href="#social" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('social-hub'); }}>सोशल मीडिया</a>
          <button className="btn btn-secondary nav-btn-volunteer" onClick={onVolunteerClick}>
            जुड़ें (Volunteer)
          </button>
          <button className="btn btn-primary nav-btn-donate" onClick={onDonateClick}>
            <Heart size={16} fill="currentColor" /> सहयोग करें (Donate)
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`nav-menu-mobile glass ${isOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          <a href="#hero" className="mobile-link" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }}>गृह (Home)</a>
          <a href="#mission" className="mobile-link" onClick={(e) => { e.preventDefault(); scrollToSection('mission'); }}>मिशन व विज़न</a>
          <a href="#initiatives" className="mobile-link" onClick={(e) => { e.preventDefault(); scrollToSection('initiatives'); }}>कार्य क्षेत्र</a>
          <a href="#gallery" className="mobile-link" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>चित्र दीर्घा</a>
          <a href="#about" className="mobile-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>हमारे बारे में</a>
          <a href="#social" className="mobile-link" onClick={(e) => { e.preventDefault(); scrollToSection('social-hub'); }}>सोशल मीडिया</a>
          <div className="mobile-ctas">
            <button className="btn btn-secondary w-full" onClick={() => { setIsOpen(false); onVolunteerClick(); }}>
              जुड़ें (Volunteer)
            </button>
            <button className="btn btn-primary w-full" onClick={() => { setIsOpen(false); onDonateClick(); }}>
              <Heart size={16} fill="currentColor" /> सहयोग करें (Donate)
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
