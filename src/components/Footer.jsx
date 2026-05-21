import React from 'react';
import { Mail, MapPin, Sparkles, Heart, Copyright } from 'lucide-react';
import { Facebook, Instagram, Twitter } from './BrandIcons';
import './Footer.css';

export default function Footer({ onDonateClick, onVolunteerClick }) {
  
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <footer className="main-footer">
      <div className="footer-top-accent"></div>
      
      <div className="container footer-container">
        {/* Col 1: Brand & Motto */}
        <div className="footer-col brand-col">
          <a href="#" className="footer-logo" onClick={handleScrollToTop}>
            <span className="footer-peacock">🦚</span>
            <div className="footer-logo-text">
              <span className="f-brand-main">SHRI SHRI SHYAM</span>
              <span className="f-brand-sub">SEWA PARIVAR FOUNDATION</span>
            </div>
          </a>
          <p className="footer-motto">
            “नर सेवा ही नारायण सेवा है, भोजन दान ही महादान है।” <br />
            बाबा श्याम की पावन प्रेरणा से जरूरतमंदों के सशक्तिकरण और नियमित भंडारा सेवा के प्रति समर्पित एक रजिस्टर्ड संस्था।
          </p>
          <div className="footer-social-icons">
            <a href="https://facebook.com/shrishyamsewaparivar" target="_blank" rel="noopener noreferrer" className="social-icon-btn fb" aria-label="Facebook">
              <Facebook size={18} fill="currentColor" />
            </a>
            <a href="https://instagram.com/shrishyamsewaparivarfoundation" target="_blank" rel="noopener noreferrer" className="social-icon-btn ig" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://x.com/shyamparivarfdn" target="_blank" rel="noopener noreferrer" className="social-icon-btn tw" aria-label="Twitter">
              <Twitter size={18} fill="currentColor" />
            </a>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="footer-col links-col">
          <h4 className="footer-col-title">त्वरित संपर्क सूत्र</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#hero" onClick={handleScrollToTop}>गृह (Home Page)</a>
            </li>
            <li>
              <a href="#mission" onClick={(e) => { e.preventDefault(); scrollToSection('mission'); }}>हमारा मिशन व विज़न</a>
            </li>
            <li>
              <a href="#initiatives" onClick={(e) => { e.preventDefault(); scrollToSection('initiatives'); }}>सेवा कार्य क्षेत्र</a>
            </li>
            <li>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>चित्र दीर्घा (Gallery)</a>
            </li>
            <li>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>हमारे बारे में (About Us)</a>
            </li>
            <li>
              <a href="#social-hub" onClick={(e) => { e.preventDefault(); scrollToSection('social-hub'); }}>गतिविधियां (Social Feed)</a>
            </li>
          </ul>
        </div>

        {/* Col 3: Direct Actions */}
        <div className="footer-col actions-col">
          <h4 className="footer-col-title">पुण्य कार्य में भागीदार बनें</h4>
          <p className="footer-action-text">
            फाउंडेशन के भंडारा, शिक्षा, स्वास्थ्य शिविर अथवा अन्य जन-सेवा अभियानों में प्रत्यक्ष सहयोग देने हेतु:
          </p>
          <div className="footer-ctas">
            <button className="btn btn-primary btn-sm w-full" onClick={onDonateClick}>
              <Heart size={14} fill="currentColor" /> दान सहयोग (Donate)
            </button>
            <button className="btn btn-secondary btn-sm w-full" onClick={onVolunteerClick}>
              स्वयंसेवक जुड़ें (Volunteer)
            </button>
          </div>
        </div>

        {/* Col 4: Contact Coordinate details */}
        <div className="footer-col contact-col">
          <h4 className="footer-col-title">आधिकारिक संपर्क सूत्र</h4>
          <ul className="footer-contact-list">
            <li className="contact-list-item">
              <MapPin size={22} className="contact-icon saffron" />
              <div className="contact-text-wrap">
                <strong>पंजीकृत कार्यालय:</strong>
                <span>ग्राम व पोस्ट: मौंदा, लखनऊ, उत्तर प्रदेश - 226008</span>
              </div>
            </li>
            <li className="contact-list-item">
              <Mail size={18} className="contact-icon maroon" />
              <div className="contact-text-wrap">
                <strong>आधिकारिक ईमेल:</strong>
                <a href="mailto:shrishrishyamsewaparivar@gmail.com" className="email-link">
                  shrishrishyamsewaparivar@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Credentials Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <div className="credentials-left">
            <p className="corp-detail-row">
              <strong>कॉर्पोरेट विवरण:</strong> CIN - प्राइवेट लिमिटेड सामाजिक संस्थान (पंजीकृत: 13 मार्च, 2026) | लखनऊ, उत्तर प्रदेश
            </p>
            <p className="corp-detail-row">
              <strong>मार्गदर्शक एवं निदेशक मंडल:</strong> स्व. श्री मित्रसेन यादव (वरिष्ठ मार्गदर्शक) एवं श्री आनंद सेन यादव (संस्थापक व निदेशक)
            </p>
          </div>
          
          <div className="credentials-right">
            <p className="copyright-row">
              <Copyright size={14} /> {new Date().getFullYear()} श्री श्री श्याम सेवा परिवार फाउंडेशन। सर्वाधिकार सुरक्षित।
            </p>
            <p className="copyright-dev">
              Made with <Heart size={10} fill="#ef4444" color="#ef4444" /> for Social Good & Community Sewa.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
