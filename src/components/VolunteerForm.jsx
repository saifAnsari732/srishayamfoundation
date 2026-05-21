import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Send, HelpingHand } from 'lucide-react';
import './VolunteerForm.css';

export default function VolunteerForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'human',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "कृपया अपना नाम दर्ज करें (Name is required)";
    
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      tempErrors.phone = "कृपया मोबाइल नंबर दर्ज करें (Phone is required)";
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = "कृपया मान्य 10-अंकीय मोबाइल नंबर दर्ज करें (Invalid 10-digit number)";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() && !emailRegex.test(formData.email)) {
      tempErrors.email = "कृपया मान्य ईमेल दर्ज करें (Invalid email)";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      interest: 'human',
      message: ''
    });
    setErrors({});
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="volunteer-modal-card glass" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-wrapper">
            <HelpingHand className="header-icon saffron" size={24} />
            <div>
              <h3>स्वयंसेवक पंजीकरण (Join as Volunteer)</h3>
              <span className="modal-subtitle">श्री श्याम सेवा परिवार से जुड़कर पुण्य कमाएं</span>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="modal-body-content">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="volunteer-form">
              <p className="form-info-text">
                यदि आप समाज के कल्याण, बच्चों की शिक्षा, भंडारा वितरण अथवा बेजुबान पशुओं के संरक्षण व उपचार कार्यों में शारीरिक या मानसिक रूप से सहयोग करना चाहते हैं, तो कृपया नीचे विवरण दर्ज करें।
              </p>

              {/* Name */}
              <div className="form-group">
                <label htmlFor="name">आपका नाम (Full Name) <span className="required">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="उदा. राहुल शर्मा"
                  className={`form-control ${errors.name ? 'error' : ''}`}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              {/* Flex row for Phone & Email */}
              <div className="form-row">
                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="phone">मोबाइल नंबर (WhatsApp No.) <span className="required">*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="उदा. 9876543210"
                    maxLength={10}
                    className={`form-control ${errors.phone ? 'error' : ''}`}
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">ईमेल आईडी (Email - Optional)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="sharma@example.com"
                    className={`form-control ${errors.email ? 'error' : ''}`}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
              </div>

              {/* Field of Interest */}
              <div className="form-group">
                <label htmlFor="interest">सेवा में रुचि (Area of Interest) <span className="required">*</span></label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="human">मानव सेवा (भंडारा, राशन व शिक्षा सहयोग)</option>
                  <option value="animal">जीव दया (पशु रेस्क्यू, चारा-पानी व शेल्टर)</option>
                  <option value="devotional">धार्मिक सेवा (श्याम संकीर्तन, भजन व उत्सव)</option>
                  <option value="both">सभी सेवा कार्य (All initiatives)</option>
                </select>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">संक्षिप्त संदेश (Message / Skill Details)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="आप समाज सेवा में किस प्रकार मदद कर सकते हैं (उदा: सप्ताह में 4 घंटे समय देना, पशु चिकित्सा अनुभव आदि)..."
                  className="form-control"
                />
              </div>

              {/* Form Action */}
              <div className="form-actions-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>
                  रद्द करें (Cancel)
                </button>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span>पंजीकरण हो रहा है...</span>
                  ) : (
                    <>
                      <Send size={16} /> विवरण सबमिट करें (Submit Detail)
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            /* Success Screen */
            <div className="success-screen-wrapper">
              <div className="success-icon-container">
                <CheckCircle size={64} className="success-checkmark" />
                <Sparkles size={24} className="success-sparkle" />
              </div>
              
              <h3>सादर धन्यवाद! (Thank You!)</h3>
              <p className="success-para">
                <strong>{formData.name}</strong> जी, श्री श्री श्याम सेवा परिवार फाउंडेशन का सदस्य बनने के लिए आपका हृदय से आभार। 
                आपके सेवा भाव को हमारा नमन।
              </p>
              
              <div className="success-notice-card glass">
                <p>
                  हमारा सेवा दल आपके द्वारा प्रदान किए गए विवरण <strong>(+91 {formData.phone})</strong> पर 24 से 48 घंटे के भीतर संपर्क कर आगे की रूपरेखा साझा करेगा।
                </p>
              </div>

              <button className="btn btn-primary btn-lg" onClick={handleReset}>
                होम पेज पर जाएं (Done)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
