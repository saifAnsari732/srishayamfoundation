import React from 'react';
import { Heart, Users, Clock, Calendar, Soup, ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero({ onDonateClick, onVolunteerClick }) {
  return (
    <section id="hero" className="hero-landing-section">
      {/* Upper Landing Split */}
      <div className="hero-upper-split">
        <div className="container hero-container">
          
          {/* Left Text Block */}
          <div className="hero-text-block">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              सेवा ही हमारा धर्म है
            </div>
            
            <h1 className="hero-title">
              श्री श्री श्याम <span className="text-mint">सेवा परिवार</span><br />
              <span className="text-orange">दिव्य भंडारा</span>
            </h1>
            
            <p className="hero-desc-para">
              शुद्ध और पौष्टिक भोजन के साथ मानवता की सेवा। हमारी 24/7 भोजन सेवा सभी का खुले दिल और असीम प्रेम के साथ स्वागत करती है।
            </p>
            
            {/* Mockup Solid & Outlined Action Row */}
            <div className="hero-buttons-row">
              <button className="btn btn-primary hero-btn-donate" onClick={onDonateClick}>
                <Heart size={16} fill="currentColor" />
                अभी दान करें
              </button>
              <button className="btn btn-outline hero-btn-join" onClick={onVolunteerClick}>
                <Users size={16} />
                सेवा से जुड़ें
              </button>
            </div>
            
            {/* Inline Stats Block (Transparent Orange Container) */}
            <div className="hero-stats-pill">
              <div className="hero-stat-pill-item">
                <div className="pill-icon-circle">
                  <Soup size={16} fill="currentColor" />
                </div>
                <div className="pill-stat-texts">
                  <span className="pill-stat-num">+ 24/7</span>
                  <span className="pill-stat-label">निरंतर सेवा</span>
                </div>
              </div>
              <div className="hero-pill-divider"></div>
              <div className="hero-stat-pill-item">
                <div className="pill-icon-circle icon-mint">
                  <Users size={16} fill="currentColor" />
                </div>
                <div className="pill-stat-texts">
                  <span className="pill-stat-num">+ 5000+</span>
                  <span className="pill-stat-label">दैनिक परोसा भोजन</span>
                </div>
              </div>
              <div className="hero-pill-divider"></div>
              <div className="hero-stat-pill-item">
                <div className="pill-icon-circle">
                  <Heart size={16} fill="currentColor" />
                </div>
                <div className="pill-stat-texts">
                  <span className="pill-stat-num">+ 100%</span>
                  <span className="pill-stat-label">दान केवल सेवा में</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side Visual Image Holder */}
          <div className="hero-visual-block">
            <img src="/3.jpeg" alt="भंडारे की तैयारी करते स्वयंसेवक" className="hero-visual-image" />
            <div className="hero-fade-overlay-left"></div>
          </div>
          
        </div>
      </div>
      
      {/* Lower Horizontal Full-Width Feature Bar (Saffron Orange) */}
      <div className="hero-lower-orange-bar">
        <div className="container orange-bar-container">
          <div className="orange-bar-item">
            <Clock className="orange-bar-icon" size={24} />
            <div className="orange-bar-texts">
              <span className="orange-bar-title">24 घंटे</span>
              <span className="orange-bar-desc">निरंतर सेवा</span>
            </div>
          </div>
          <div className="orange-bar-item">
            <Calendar className="orange-bar-icon" size={24} />
            <div className="orange-bar-texts">
              <span className="orange-bar-title">सप्ताह के 7 दिन</span>
              <span className="orange-bar-desc">कोई छुट्टी नहीं</span>
            </div>
          </div>
          <div className="orange-bar-item">
            <Users className="orange-bar-icon" size={24} />
            <div className="orange-bar-texts">
              <span className="orange-bar-title">सभी के लिए</span>
              <span className="orange-bar-desc">बिना किसी भेदभाव के</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
