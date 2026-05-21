import React, { useState } from 'react';
import { X, Heart, Landmark, QrCode, CreditCard, Sparkles, CheckCircle2, Download } from 'lucide-react';
import './DonationModal.css';

export default function DonationModal({ isOpen, onClose }) {
  const [method, setMethod] = useState('online'); // 'online' | 'bank' | 'qr'
  const [amount, setAmount] = useState('1100'); // '501' | '1100' | '2100' | '5100' | custom
  const [customAmount, setCustomAmount] = useState('');
  const [isPaying, setIsPaying] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [donorName, setDonorName] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const presets = ['501', '1100', '2100', '5100', '11000'];

  const validate = () => {
    let tempErrors = {};
    if (!donorName.trim()) tempErrors.name = "कृपया अपना नाम दर्ज करें (Name is required)";
    
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!donorPhone.trim()) {
      tempErrors.phone = "कृपया मोबाइल नंबर दर्ज करें (Phone is required)";
    } else if (!phoneRegex.test(donorPhone)) {
      tempErrors.phone = "कृपया मान्य 10-अंकीय मोबाइल नंबर दर्ज करें (Invalid phone)";
    }

    const finalAmt = amount === 'custom' ? customAmount : amount;
    if (!finalAmt || isNaN(finalAmt) || parseInt(finalAmt) <= 0) {
      tempErrors.amount = "कृपया वैध सहयोग राशि दर्ज करें (Enter a valid amount)";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handlePaySubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsPaying(true);
      setTimeout(() => {
        setIsPaying(false);
        setPaymentSuccess(true);
      }, 2000);
    }
  };

  const handleReset = () => {
    setAmount('1100');
    setCustomAmount('');
    setDonorName('');
    setDonorPhone('');
    setEmail('');
    setErrors({});
    setPaymentSuccess(false);
    onClose();
  };

  const activeAmount = amount === 'custom' ? (customAmount || '0') : amount;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="donation-modal-card glass" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-wrapper">
            <Heart className="header-icon pulse-dot-action saffron" fill="currentColor" size={24} />
            <div>
              <h3>सहयोग राशि एवं दान (Contribute / Donate)</h3>
              <span className="modal-subtitle">आपका दान बेजुबानों और जरूरतमंदों का संबल है</span>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body-content donation-body">
          {!paymentSuccess ? (
            <>
              {/* Method Switcher */}
              <div className="method-switcher glass">
                <button 
                  className={`method-btn ${method === 'online' ? 'active' : ''}`}
                  onClick={() => setMethod('online')}
                >
                  <CreditCard size={16} /> ऑनलाइन भुगतान
                </button>
                <button 
                  className={`method-btn ${method === 'qr' ? 'active' : ''}`}
                  onClick={() => setMethod('qr')}
                >
                  <QrCode size={16} /> UPI / QR कोड
                </button>
                <button 
                  className={`method-btn ${method === 'bank' ? 'active' : ''}`}
                  onClick={() => setMethod('bank')}
                >
                  <Landmark size={16} /> बैंक ट्रांसफर
                </button>
              </div>

              {/* ONLINE METHOD */}
              {method === 'online' && (
                <form onSubmit={handlePaySubmit} className="donation-form">
                  {/* Presets Grid */}
                  <div className="presets-wrapper">
                    <label className="presets-label">सहयोग राशि चुनें (Select Amount - ₹)</label>
                    <div className="presets-grid">
                      {presets.map((val) => (
                        <button
                          key={val}
                          type="button"
                          className={`preset-btn ${amount === val ? 'active' : ''}`}
                          onClick={() => { setAmount(val); setErrors({ ...errors, amount: '' }); }}
                        >
                          ₹{parseInt(val).toLocaleString('en-IN')}
                        </button>
                      ))}
                      <button
                        type="button"
                        className={`preset-btn ${amount === 'custom' ? 'active' : ''}`}
                        onClick={() => setAmount('custom')}
                      >
                        अन्य (Custom)
                      </button>
                    </div>
                  </div>

                  {/* Custom Amount input */}
                  {amount === 'custom' && (
                    <div className="form-group custom-amount-container">
                      <label htmlFor="customAmount">सहयोग राशि दर्ज करें (Enter Custom Amount - ₹)</label>
                      <div className="input-with-currency">
                        <span className="currency-prefix">₹</span>
                        <input
                          type="number"
                          id="customAmount"
                          value={customAmount}
                          onChange={(e) => { setCustomAmount(e.target.value); setErrors({ ...errors, amount: '' }); }}
                          placeholder="उदा. 5000"
                          className={`form-control ${errors.amount ? 'error' : ''}`}
                        />
                      </div>
                      {errors.amount && <span className="error-text">{errors.amount}</span>}
                    </div>
                  )}

                  {/* Donor details row */}
                  <div className="form-group">
                    <label htmlFor="donorName">दाता का नाम (Donor Name) <span className="required">*</span></label>
                    <input
                      type="text"
                      id="donorName"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="उदा. अमित यादव"
                      className={`form-control ${errors.name ? 'error' : ''}`}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="donorPhone">मोबाइल नंबर (Phone) <span className="required">*</span></label>
                      <input
                        type="tel"
                        id="donorPhone"
                        maxLength={10}
                        value={donorPhone}
                        onChange={(e) => setDonorPhone(e.target.value)}
                        placeholder="उदा. 9876543210"
                        className={`form-control ${errors.phone ? 'error' : ''}`}
                      />
                      {errors.phone && <span className="error-text">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="donorEmail">ईमेल (Email ID - Receipts)</label>
                      <input
                        type="email"
                        id="donorEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="amit@example.com"
                        className="form-control"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="donation-submit-wrapper">
                    <button type="submit" className="btn btn-primary btn-lg w-full" disabled={isPaying}>
                      {isPaying ? (
                        <span className="loading-spinner-wrapper">
                          <span className="spinner-mandala">🦚</span> भुगतान सुरक्षा पोर्टल लोड हो रहा है...
                        </span>
                      ) : (
                        <>
                          सुरक्षित भुगतान करें: ₹{parseInt(activeAmount).toLocaleString('en-IN')} (Pay Securely)
                        </>
                      )}
                    </button>
                    <span className="tax-exemption-note">🛡️ 80G कर छूट के तहत पात्र दान (Tax Benefit Receipts generated instantly)</span>
                  </div>
                </form>
              )}

              {/* QR CODE METHOD */}
              {method === 'qr' && (
                <div className="qr-method-container">
                  <p className="qr-info-para">
                    नीचे दिए गए आधिकारिक क्यूआर कोड (UPI QR Code) को अपने गूगल पे, फोनपे, पेटीएम अथवा किसी भी यूपीआई ऐप से स्कैन करके दान राशि सीधे संस्था के बैंक खाते में भेज सकते हैं।
                  </p>

                  <div className="qr-box glass">
                    {/* Simulated SVG High-Quality QR Code */}
                    <div className="qr-graphic-wrapper">
                      <svg width="200" height="200" viewBox="0 0 100 100" className="qr-svg">
                        {/* Outer corners */}
                        <rect x="5" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="5" />
                        <rect x="10" y="10" width="15" height="15" fill="currentColor" />
                        <rect x="70" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="5" />
                        <rect x="75" y="10" width="15" height="15" fill="currentColor" />
                        <rect x="5" y="70" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="5" />
                        <rect x="10" y="75" width="15" height="15" fill="currentColor" />
                        
                        {/* Center peacock placeholder logo */}
                        <rect x="42" y="42" width="16" height="16" fill="var(--color-saffron)" rx="2" />
                        <circle cx="50" cy="50" r="4" fill="var(--color-gold)" />

                        {/* Random technical bits represent QR Code noise */}
                        <rect x="40" y="10" width="10" height="5" fill="currentColor" />
                        <rect x="55" y="15" width="5" height="15" fill="currentColor" />
                        <rect x="5" y="40" width="15" height="5" fill="currentColor" />
                        <rect x="25" y="45" width="10" height="10" fill="currentColor" />
                        <rect x="45" y="30" width="10" height="5" fill="currentColor" />
                        <rect x="75" y="40" width="20" height="5" fill="currentColor" />
                        <rect x="80" y="55" width="10" height="10" fill="currentColor" />
                        <rect x="40" y="75" width="15" height="5" fill="currentColor" />
                        <rect x="45" y="85" width="15" height="10" fill="currentColor" />
                        <rect x="70" y="75" width="5" height="15" fill="currentColor" />
                        <rect x="85" y="85" width="10" height="5" fill="currentColor" />
                      </svg>
                      <span className="qr-overlay-text">SHRI SHYAM SEWA FOUNDATION</span>
                    </div>

                    <div className="upi-details">
                      <span className="upi-id-label">UPI ID:</span>
                      <span className="upi-id-value">shrishrishyamsewa@sbi</span>
                    </div>
                  </div>

                  <div className="qr-notices glass">
                    <p>⚠️ <strong>महत्वपूर्ण सूचना:</strong> क्यूआर कोड द्वारा भुगतान करने के पश्चात कृपया अपनी रसीद प्राप्त करने के लिए स्क्रीनशॉट व नाम संस्था के ईमेल पर अवश्य भेजें।</p>
                  </div>
                </div>
              )}

              {/* BANK TRANSFER METHOD */}
              {method === 'bank' && (
                <div className="bank-method-container">
                  <p className="bank-info-para">
                    डायरेक्ट बैंक ट्रांसफर (NEFT / RTGS / IMPS) के माध्यम से दान भेजने के लिए संस्था के आधिकारिक बैंक खाते का विवरण नीचे दिया गया है:
                  </p>

                  <div className="bank-details-card glass">
                    <div className="bank-row">
                      <span className="bank-label">खाता धारक (A/C Name):</span>
                      <span className="bank-value">Shri Shri Shyam Sewa Parivar Foundation</span>
                    </div>
                    <div className="bank-row">
                      <span className="bank-label">बैंक का नाम (Bank Name):</span>
                      <span className="bank-value">State Bank of India (SBI)</span>
                    </div>
                    <div className="bank-row">
                      <span className="bank-label">शाखा (Branch Address):</span>
                      <span className="bank-value">Lucknow Main Branch, Uttar Pradesh</span>
                    </div>
                    <div className="bank-row">
                      <span className="bank-label">खाता संख्या (A/C Number):</span>
                      <span className="bank-value account-no">367482910394</span>
                    </div>
                    <div className="bank-row">
                      <span className="bank-label">IFSC कोड (IFSC Code):</span>
                      <span className="bank-value ifsc">SBIN0000124</span>
                    </div>
                  </div>

                  <div className="tax-cert-card glass">
                    <Sparkles className="cert-sparkle" size={20} />
                    <div className="cert-text">
                      <h5>80G आयकर छूट (Tax Benefits)</h5>
                      <p>यह संस्था आयकर अधिनियम की धारा 80G के अंतर्गत पंजीकृत है। बैंक ट्रांसफर के दाताओं को रसीद ईमेल द्वारा प्रेषित की जाती है।</p>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Payment Success Screen */
            <div className="payment-success-wrapper">
              <div className="success-circle-check">
                <CheckCircle2 size={70} className="receipt-check" />
              </div>

              <h3>सहयोग प्राप्त हुआ! (Donation Received!)</h3>
              <p className="payment-thanks">
                <strong>{donorName}</strong> जी, <strong>₹{parseInt(activeAmount).toLocaleString('en-IN')}</strong> की सहयोग राशि के लिए फाउंडेशन आपका कोटि-कोटि धन्यवाद करता है।
              </p>

              {/* Detailed Receipt Card */}
              <div className="receipt-details-box glass">
                <div className="receipt-header-logo">
                  <span>🦚 श्री श्री श्याम सेवा परिवार</span>
                </div>
                <div className="receipt-divider"></div>
                <div className="receipt-line">
                  <span>ट्रांजैक्शन आईडी (Txn ID):</span>
                  <strong>SSSPF-{Math.floor(Math.random()*900000000 + 100000000)}</strong>
                </div>
                <div className="receipt-line">
                  <span>दाता का नाम (Donor):</span>
                  <span>{donorName}</span>
                </div>
                <div className="receipt-line">
                  <span>मोबाइल नंबर (Phone):</span>
                  <span>+91 {donorPhone}</span>
                </div>
                <div className="receipt-line">
                  <span>सहयोग राशि (Amount Paid):</span>
                  <span className="receipt-amount-highlight">₹{parseInt(activeAmount).toLocaleString('en-IN')}.00</span>
                </div>
                <div className="receipt-line">
                  <span>भुगतान स्थिति (Status):</span>
                  <span className="success-pill">SUCCESSFUL</span>
                </div>
                <div className="receipt-divider"></div>
                <p className="exemption-receipt-text">
                  *आयकर छूट धारा 80G रसीद आपके ईमेल/व्हाट्सएप पर भी भेज दी गई है।
                </p>
              </div>

              <div className="receipt-actions">
                <button className="btn btn-secondary" onClick={() => alert("रसीद डाउनलोड की जा रही है... (Downloading Mock Receipt)")}>
                  <Download size={16} /> रसीद डाउनलोड (Receipt)
                </button>
                <button className="btn btn-primary" onClick={handleReset}>
                  धन्यवाद (Done)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
