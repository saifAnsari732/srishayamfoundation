import React from 'react';
import { MapPin, Phone, Mail, Heart, Users, Calendar, Share2, Quote } from 'lucide-react';
import { Facebook, Instagram, Twitter } from './BrandIcons';
import './Footer.css';

export default function Footer({ onDonateClick, onVolunteerClick }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'श्री श्री श्याम सेवा परिवार',
        text: '24/7 भंडारा सेवा के माध्यम से मानवता की सेवा में हमारे साथ जुड़ें।',
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert(`शेयर लिंक: ${window.location.href}`);
    }
  };

  return (
    <footer className="site-footer">
      {/* Upper Structured Multi-Column Footer */}
      <div className="footer-upper">
        <div className="container">
          <div className="footer-grid">
            {/* Col 1: About */}
            <div className="footer-col">
              <h3 className="footer-logo-text">श्री श्री श्याम सेवा परिवार</h3>
              <p className="footer-desc">
                निरंतर भंडारा सेवा, भोजन वितरण और सामुदायिक सहायता के माध्यम से मानवता की सेवा के लिए समर्पित।
              </p>
              <div className="footer-socials">
                <a href="#" className="social-icon" aria-label="Facebook"><Facebook size={18} /></a>
                <a href="#" className="social-icon" aria-label="Instagram"><Instagram size={18} /></a>
                <a href="#" className="social-icon" aria-label="Twitter"><Twitter size={18} /></a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading">त्वरित लिंक</h4>
              <ul className="footer-links">
                <li><a href="#about">हमारे बारे में</a></li>
                <li><a href="#initiatives">हमारी परियोजनाएं</a></li>
                <li><a href="#gallery">गैलरी</a></li>
                <li><a href="#volunteer">स्वयंसेवक</a></li>
                <li><a href="#contact">संपर्क करें</a></li>
              </ul>
            </div>

            {/* Col 3: Our Services */}
            <div className="footer-col">
              <h4 className="footer-heading">हमारी सेवा</h4>
              <ul className="footer-links">
                <li><a href="#mission">24/7 भंडारा</a></li>
                <li><a href="#initiatives">भोजन वितरण</a></li>
                <li><a href="#initiatives">विशेष अवसर</a></li>
                <li><a href="#initiatives">मोबाइल भंडारा</a></li>
                <li><a href="#gallery">फोटो गैलरी</a></li>
              </ul>
            </div>

            {/* Col 4: Contact Info */}
            <div className="footer-col">
              <h4 className="footer-heading">संपर्क जानकारी</h4>
              <ul className="footer-contact">
                <li>
                  <MapPin size={16} className="contact-icon-small" />
                  <span>आलमबाग, लखनऊ - 226012</span>
                </li>
                <li>
                  <Phone size={16} className="contact-icon-small" />
                  <span>+91 96511 11303</span>
                </li>
                <li>
                  <Mail size={16} className="contact-icon-small" />
                  <span>srisrisyamsewaparivar@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mockup-Exact Navy Quote & Quick-Action Dock (Full Window) */}
      <div className="footer-bottom-dock">
        <div className="container dock-container">
          
          {/* Left Side: Spiritual Quote */}
          <div className="dock-quote-block">
            <Quote className="dock-quote-icon" size={24} fill="currentColor" />
            <p className="dock-quote-text">
              अन्नदान महादान है। इस नेक कार्य में हमारे साथ जुड़ें।
            </p>
          </div>
          
          {/* Right Side: Action Badges Row */}
          <div className="dock-actions-block">
            <button className="btn btn-primary dock-support-btn" onClick={onDonateClick}>
              <Heart size={15} fill="currentColor" style={{ marginRight: '6px' }} />
              इस सेवा का समर्थन करें
            </button>
            
            <div className="dock-icon-buttons">
              <button className="dock-circle-btn" onClick={onDonateClick} title="अभी दान करें">
                <Heart size={16} />
                <span className="dock-btn-tooltip">दान करें</span>
              </button>
              <button className="dock-circle-btn" onClick={onVolunteerClick} title="स्वयंसेवक बनें">
                <Users size={16} />
                <span className="dock-btn-tooltip">स्वयंसेवक</span>
              </button>
              <button className="dock-circle-btn" onClick={onDonateClick} title="मासिक सहयोग">
                <Calendar size={16} />
                <span className="dock-btn-tooltip">मासिक</span>
              </button>
              <button className="dock-circle-btn" onClick={handleShare} title="साझा करें और प्रेरित करें">
                <Share2 size={16} />
                <span className="dock-btn-tooltip">साझा करें</span>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
