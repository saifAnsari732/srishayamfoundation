import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Facebook, Instagram, Twitter } from './BrandIcons';
import './ContactUs.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', subject: '', message: '' });
  const [mobileError, setMobileError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'mobile') {
      if (e.target.value && !/^\d{10}$/.test(e.target.value)) {
        setMobileError('कृपया एक वैध 10-अंकीय मोबाइल नंबर दर्ज करें।');
      } else {
        setMobileError('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(formData.mobile)) {
      setMobileError('कृपया एक वैध 10-अंकीय मोबाइल नंबर दर्ज करें।');
      return;
    }
    const text = `*नया संपर्क संदेश*%0A*नाम:* ${formData.name}%0A*ईमेल:* ${formData.email}%0A*मोबाइल:* ${formData.mobile}%0A*विषय:* ${formData.subject}%0A*संदेश:* ${formData.message}`;
    window.open(`https://wa.me/919651111303?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header-left">
          <h2 className="section-title-large text-primary">संपर्क करें</h2>
          <div className="breadcrumbs">
            <span>होम</span> <span className="separator">&gt;</span> <span className="current">संपर्क</span>
          </div>
        </div>

        <div className="contact-split">
          {/* Left: Contact Info */}
          <div className="contact-info-panel">
            <h3 className="contact-subtitle">संपर्क करें</h3>
            <p className="contact-desc">
              हमें आपसे सुनकर प्रसन्नता होगी। चाहे हमारे सेवा कार्यों के बारे में आपका कोई प्रश्न हो, स्वयंसेवक बनना चाहते हों, या सहायता की आवश्यकता हो, हमारा सेवा दल आपके सभी प्रश्नों के उत्तर देने के लिए सदैव तत्पर है।
            </p>
            
            <ul className="contact-details">
              <li>
                <div className="icon-circle">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div className="detail-text">
                  <strong>पता</strong>
                  <span>आलमबाग, लखनऊ - 226012</span>
                </div>
              </li>
              <li>
                <div className="icon-circle">
                  <Phone size={20} className="text-primary" />
                </div>
                <div className="detail-text">
                  <strong>फ़ोन</strong>
                  <span>+91 96511 11303</span>
                </div>
              </li>
              <li>
                <div className="icon-circle">
                  <Mail size={20} className="text-primary" />
                </div>
                <div className="detail-text">
                  <strong>ईमेल</strong>
                  <span>srisrisyamsewaparivar@gmail.com</span>
                </div>
              </li>
            </ul>

            <div className="contact-social">
              <h4>हमसे जुड़ें</h4>
              <div className="social-icons-row">
                <a href="#" className="social-btn"><Facebook size={20} /></a>
                <a href="#" className="social-btn"><Instagram size={20} /></a>
                <a href="#" className="social-btn"><Twitter size={20} /></a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-panel">
            <h3 className="contact-subtitle">हमें संदेश भेजें</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="आपका नाम" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="आपका ईमेल" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="tel" name="mobile" placeholder="आपका मोबाइल नंबर" value={formData.mobile} onChange={handleChange} required />
                {mobileError && <span style={{color: 'red', fontSize: '12px'}}>{mobileError}</span>}
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="विषय" value={formData.subject} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="आपका संदेश" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn-send-message">
                व्हाट्सएप के माध्यम से संदेश भेजें
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
