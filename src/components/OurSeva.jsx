import React from 'react';
import { Clock, Calendar, ShieldCheck, Users } from 'lucide-react';
import './OurSeva.css';

export default function OurSeva({ onDonateClick }) {
  return (
    <section id="mission" className="our-seva-section section-padding">
      <div className="container">
        {/* Breadcrumb Header */}
        <div className="section-header-left">
          <h2 className="section-title-large text-primary">हमारी सेवा</h2>
          <div className="breadcrumbs">
            <span>होम</span> <span className="separator">&gt;</span> <span className="current">हमारी सेवा</span>
          </div>
        </div>

        {/* Top Split Layout */}
        <div className="seva-split-layout">
          <div className="seva-text-content">
            <span className="seva-badge">समाज सेवा और दान</span>
            <h3 className="seva-title">दिव्य 24/7 भंडारा <span className="highlight">लखनऊ में</span></h3>
            <p className="seva-paragraph">
              श्री श्री श्याम सेवा परिवार <strong>लखनऊ में</strong> मानवता की सेवा के लिए समर्पित एक प्रमुख <strong>NGO</strong> है। हम अपने <strong>दिव्य भंडारे</strong> के माध्यम से सप्ताह के 7 दिन, 24 घंटे सभी के लिए <strong>निःशुल्क भोजन वितरण</strong> का आयोजन करते हैं। हमारी निःशुल्क सामुदायिक रसोई बिना किसी भेदभाव के सभी के लिए खुली है।
            </p>
            <p className="seva-paragraph">
              <strong>समाज कल्याण</strong> के प्रति हमारी अटूट प्रतिबद्धता यह सुनिश्चित करती है कि वंचितों और जरूरतमंदों के लिए गर्म, पौष्टिक और स्वच्छ भोजन हमेशा उपलब्ध रहे। भुखमरी मिटाने के हमारे इस मिशन में शामिल हों।
            </p>
          </div>
          <div className="seva-image-content">
            <div className="seva-image-wrapper">
              <img src="/3.jpeg" alt="Free Food Distribution Lucknow Bhandara" className="seva-main-image" />
              <div className="floating-seo-badge">
                <span className="badge-number">10 लाख+</span>
                <span className="badge-text">भोजन परोसा गया</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Quick Stats */}
        <div className="seva-stats-row">
          <div className="seva-stat-item">
            <Clock className="stat-icon" size={28} />
            <div className="stat-text">
              <span className="stat-title">24 घंटे</span>
              <span className="stat-subtitle">निरंतर सेवा</span>
            </div>
          </div>
          <div className="seva-stat-item">
            <Calendar className="stat-icon" size={28} />
            <div className="stat-text">
              <span className="stat-title">सप्ताह के 7 दिन</span>
              <span className="stat-subtitle">कोई छुट्टी नहीं</span>
            </div>
          </div>
          <div className="seva-stat-item">
            <ShieldCheck className="stat-icon" size={28} />
            <div className="stat-text">
              <span className="stat-title">शुद्ध और स्वच्छ</span>
              <span className="stat-subtitle">तैयार भोजन</span>
            </div>
          </div>
          <div className="seva-stat-item">
            <Users className="stat-icon" size={28} />
            <div className="stat-text">
              <span className="stat-title">सभी का</span>
              <span className="stat-subtitle">स्वागत है</span>
            </div>
          </div>
        </div>

        {/* How We Serve Timeline */}
        <div className="how-we-serve-section">
          <h3 className="timeline-title">हम सेवा कैसे करते हैं</h3>
          <div className="timeline-container">
            <div className="timeline-step">
              <div className="step-icon-wrapper">
                <span className="step-icon">01</span>
              </div>
              <h4>भोजन की तैयारी</h4>
              <p>ताजा और स्वच्छ भोजन प्रेम के साथ तैयार किया जाता है।</p>
            </div>
            
            <div className="timeline-connector"></div>
            
            <div className="timeline-step">
              <div className="step-icon-wrapper">
                <span className="step-icon">02</span>
              </div>
              <h4>सेवा का कार्य</h4>
              <p>हमारे स्वयंसेवक विनम्रता और सम्मान के साथ सेवा करते हैं।</p>
            </div>
            
            <div className="timeline-connector"></div>
            
            <div className="timeline-step">
              <div className="step-icon-wrapper">
                <span className="step-icon">03</span>
              </div>
              <h4>कोई भूखा न रहे</h4>
              <p>सभी का स्वागत किया जाता है और सम्मान के साथ परोसा जाता है।</p>
            </div>
            
            <div className="timeline-connector"></div>
            
            <div className="timeline-step">
              <div className="step-icon-wrapper">
                <span className="step-icon">04</span>
              </div>
              <h4>निरंतर सेवा</h4>
              <p>यह सेवा 24/7 बिना रुके चलती रहती है।</p>
            </div>
          </div>
        </div>
      </div>

      {/* Primary CTA Banner */}
      <div className="primary-cta-banner">
        <div className="container cta-container">
          <div className="cta-text">
            <h3>इस सेवा का हिस्सा बनें</h3>
            <p>आपका सहयोग हमें हर दिन अधिक से अधिक लोगों की सेवा करने में मदद कर सकता है।</p>
          </div>
          <div className="cta-action">
            <button className="btn btn-secondary btn-lg donate-inverse" onClick={onDonateClick}>
              अभी दान करें
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
