import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import './Volunteer.css';

export default function Volunteer() {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', days: '' });
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
    const text = `*नया स्वयंसेवक आवेदन*%0A*नाम:* ${formData.name}%0A*ईमेल:* ${formData.email}%0A*मोबाइल:* ${formData.mobile}%0A*उपलब्ध दिन:* ${formData.days}`;
    window.open(`https://wa.me/919651111303?text=${text}`, '_blank');
  };

  return (
    <section id="volunteer" className="volunteer-section">
      <div className="container">
        <div className="volunteer-split">
          {/* Left Side Info */}
          <div className="volunteer-info">
            <h2 className="volunteer-title">स्वयंसेवक बनें</h2>
            <p className="volunteer-desc">
              स्वयंसेवकों की हमारी समर्पित टीम में शामिल हों और समाज में सकारात्मक बदलाव लाने में मदद करें। हम हमेशा ऐसे उत्साही लोगों की तलाश में रहते हैं जो मानवता की सेवा के लिए अपना समय और ऊर्जा देने को तैयार हों।
            </p>
            
            <ul className="volunteer-requirements">
              <li>
                <CheckCircle2 className="req-icon" size={20} />
                <span><strong>कार्य:</strong> भोजन की तैयारी और परोसना</span>
              </li>
              <li>
                <CheckCircle2 className="req-icon" size={20} />
                <span><strong>स्थान:</strong> स्थानीय सेवा केंद्र</span>
              </li>
              <li>
                <CheckCircle2 className="req-icon" size={20} />
                <span><strong>समय योगदान:</strong> न्यूनतम 4 घंटे/सप्ताह</span>
              </li>
            </ul>
          </div>

          {/* Right Side Form */}
          <div className="volunteer-form-container">
            <form className="volunteer-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="पूरा नाम" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="ईमेल पता" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="tel" name="mobile" placeholder="मोबाइल नंबर" value={formData.mobile} onChange={handleChange} required />
                {mobileError && <span style={{color: 'red', fontSize: '12px'}}>{mobileError}</span>}
              </div>
              <div className="form-group">
                <input type="text" name="days" placeholder="उपलब्ध दिन (जैसे: रविवार, प्रतिदिन आदि)" value={formData.days} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn-submit-volunteer">
                व्हाट्सएप के माध्यम से आवेदन सबमिट करें
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
