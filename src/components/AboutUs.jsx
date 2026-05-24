import React from 'react';
import { Target, Eye, Heart, Star } from 'lucide-react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <section id="about" className="about-us-section section-padding">
      <div className="container">
        {/* Breadcrumb Header */}
        <div className="section-header-left">
          <h2 className="section-title-large text-primary">हमारे बारे में</h2>
          <div className="breadcrumbs">
            <span>होम</span> <span className="separator">&gt;</span> <span className="current">हमारे बारे में</span>
          </div>
        </div>

        {/* Main Content Split */}
        <div className="about-split-layout">
          <div className="about-text-content">
            <h3 className="about-subtitle">
              24/7 भंडारा हर किसी को दिन के 24 घंटे, सप्ताह के 7 दिन मुफ्त, शुद्ध और पौष्टिक भोजन परोसने की एक दिव्य पहल है।
            </h3>
            <p className="about-paragraph">
              हमारा मानना है कि कोई भी भूखा नहीं सोना चाहिए। हमारा मिशन बिना किसी भेदभाव के प्रेम, सम्मान और विनम्रता के साथ मानवता की सेवा करना है। दिल में एक छोटे से विचार के रूप में जो शुरू हुआ था, वह अब एक निरंतर सेवा बन चुका है जो हर दिन हजारों जीवन को छूता है।
            </p>
          </div>
          <div className="about-image-content">
            <img src="/2.jpeg" alt="भंडारे की सेवा करते लोग" className="about-main-image" />
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="about-feature-cards">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Target className="feature-icon" size={32} />
            </div>
            <h4>हमारा मिशन</h4>
            <p>बिना किसी भेदभाव के, 24/7 हर जरूरतमंद को मुफ्त और शुद्ध भोजन परोसना।</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Eye className="feature-icon" size={32} />
            </div>
            <h4>हमारी दृष्टि</h4>
            <p>करुणा, शांति, सद्भाव और समानता से भरा भूख मुक्त समाज।</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Heart className="feature-icon" size={32} />
            </div>
            <h4>हमारे मूल्य</h4>
            <p>सेवा, प्रेम, समर्पण, सादगी, समानता और सम्मान।</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Star className="feature-icon" size={32} />
            </div>
            <h4>हमारा ध्येय</h4>
            <p>मुस्कान के साथ सेवा करें, प्रेम से खिलाएं, मानवता को प्रेरित करें।</p>
          </div>
        </div>
      </div>

      {/* Dark Journey Stats Banner */}
      <div className="journey-stats-banner">
        <div className="container journey-container">
          <div className="journey-text">
            <h3>हमारी यात्रा</h3>
            <p>दिल में एक छोटे से विचार के रूप में जो शुरू हुआ था, वह अब एक निरंतर सेवा बन चुका है जो हर दिन हजारों जीवन को छूता है। आपके सहयोग से, हम समाज में और बड़ा प्रभाव डाल रहे हैं।</p>
          </div>
          <div className="journey-metrics">
            <div className="metric-item">
              <span className="metric-number text-gold">5+</span>
              <span className="metric-label">वर्षों की निरंतर सेवा</span>
            </div>
            <div className="metric-item">
              <span className="metric-number text-gold">5000+</span>
              <span className="metric-label">दैनिक परोसा गया भोजन</span>
            </div>
            <div className="metric-item">
              <span className="metric-number text-gold">50+</span>
              <span className="metric-label">सक्रिय सेवा स्वयंसेवक</span>
            </div>
            <div className="metric-item">
              <span className="metric-number text-gold">100%</span>
              <span className="metric-label">दान केवल सेवा में उपयोग</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
