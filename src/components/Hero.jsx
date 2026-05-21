import React, { useState, useEffect } from 'react';
import { Heart, Users, Sparkles, ShieldAlert, Award } from 'lucide-react';
import './Hero.css';

export default function Hero({ onDonateClick, onVolunteerClick }) {
  const [heroImgIdx, setHeroImgIdx] = useState(0);

  const heroImages = [
    { src: "/1.jpeg", caption: "श्री श्याम रसोई - दैनिक भंडारा वितरण" },
    { src: "/2.jpeg", caption: "बाबा श्याम की कृपा से शुद्ध भोजन सेवा" },
    { src: "/3.jpeg", caption: "स्वच्छ, पौष्टिक एवं शुद्ध सात्विक भोजन" },
    { src: "/5.jpeg", caption: "पूर्ण शुद्धता और शुचिता से तैयार भोजन सेवा" },
    { src: "/7.jpeg", caption: "मुस्कान व संतोष के साथ प्रसाद वितरण" }
  ];

  const heroPillars = [
    {
      icon: "🍲",
      title: "दैनिक भंडारा",
      subtitle: "Daily Meals",
      desc: "निशुल्क भोजन वितरण, निर्धन व असहाय लोगों के लिए शुद्ध सात्विक प्रसाद।",
      class: "saffron"
    },
    {
      icon: "🩺",
      title: "स्वास्थ्य सेवा",
      subtitle: "Healthcare Aid",
      desc: "निशुल्क स्वास्थ्य शिविर, दवा वितरण व गंभीर रोगियों का चिकित्सा सहयोग।",
      class: "maroon"
    },
    {
      icon: "📚",
      title: "शिक्षा व स्वावलंबन",
      subtitle: "Education & Livelihood",
      desc: "निर्धन बच्चों की शिक्षा व महिलाओं के स्वरोजगार हेतु निरंतर आर्थिक सहयोग।",
      class: "gold"
    }
  ];

  useEffect(() => {
    const imgTimer = setInterval(() => {
      setHeroImgIdx((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(imgTimer);
  }, []);

  return (
    <header id="hero" className="hero-section">
      <div className="bg-pulse-saffron" style={{ top: '25%', left: '5%' }}></div>
      <div className="bg-pulse-maroon" style={{ bottom: '25%', right: '5%' }}></div>
      
      <div className="container hero-container">
        {/* Left Side: Content */}
        <div className="hero-content">
          <div className="hero-badge glass">
            <Sparkles size={14} className="badge-icon" />
            <span>दैनिक भंडारा एवं जनकल्याण फाउंडेशन</span>
          </div>

          <h1 className="hero-title">
            नर सेवा ही <span className="highlight saffron">नारायण सेवा</span> है, <br />
            भोजन दान ही <span className="highlight maroon">महादान</span> है।
          </h1>

          <p className="hero-description">
            श्री श्री श्याम सेवा परिवार फाउंडेशन (Lucknow) का पावन संकल्प: समाज के वंचित वर्ग को शिक्षा, 
            स्वास्थ्य, भोजन व रोजगार से आत्मनिर्भर बनाना, तथा असहाय लोगों तक नित्य सात्विक भंडारा प्रसाद पहुंचाना।
          </p>

          {/* Three Core Focus Pillars */}
          <div className="hero-pillars">
            {heroPillars.map((p, idx) => (
              <div key={idx} className={`pillar-card glass ${p.class}`}>
                <div className="pillar-card-title">
                  <span className="pillar-icon">{p.icon}</span>
                  <div className="pillar-title-text">
                    <h4>{p.title}</h4>
                    <span className="pillar-subtitle">{p.subtitle}</span>
                  </div>
                </div>
                <p className="pillar-card-desc">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <button className="btn btn-primary btn-lg" onClick={onDonateClick}>
              <Heart fill="currentColor" size={18} /> सहयोग करें (Donate Now)
            </button>
            <button className="btn btn-secondary btn-lg" onClick={onVolunteerClick}>
              <Users size={18} /> स्वयंसेवक बनें (Join Us)
            </button>
          </div>

          <div className="hero-meta">
            <div className="meta-item">
              <Award className="meta-icon saffron" size={20} />
              <span>पंजीकृत संस्था (Regd. NGO)</span>
            </div>
            <div className="meta-item">
              <ShieldAlert className="meta-icon maroon" size={20} />
              <span>100% करमुक्त दान (Tax Exempt)</span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive spatial 3D Collage */}
        <div className="hero-display">
          <div className="hero-collage-container">
            {/* Ambient Background Glow Frame */}
            <div className="collage-glow-backdrop"></div>

            {/* Main Slideshow Frame */}
            <div className="hero-slider-frame">
              {/* LIVE IMPACT Pulse Badge */}
              <div className="live-impact-badge">
                <span className="pulse-dot"></span>
                <span>LIVE IMPACT</span>
              </div>

              {/* Slider */}
              <div className="hero-image-slider">
                {heroImages.map((img, index) => (
                  <div 
                    key={index}
                    className={`hero-slide-img-wrapper ${index === heroImgIdx ? 'active' : ''}`}
                  >
                    <img src={img.src} alt={img.caption} className="hero-slide-img" />
                    <div className="hero-slide-caption glass">
                      <span>{img.caption}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Spatial Floating Glass Counter Cards */}
            <div className="floating-counter-card card-meals glass">
              <div className="counter-icon-wrapper saffron-bg">🍲</div>
              <div className="counter-info">
                <span className="counter-number">12,500+</span>
                <span className="counter-label">दैनिक भोजन (Meals)</span>
              </div>
            </div>

            <div className="floating-counter-card card-rescues glass">
              <div className="counter-icon-wrapper maroon-bg">🩺</div>
              <div className="counter-info">
                <span className="counter-number">2,500+</span>
                <span className="counter-label">चिकित्सा सहायता (Medical)</span>
              </div>
            </div>

            <div className="floating-counter-card card-students glass">
              <div className="counter-icon-wrapper gold-bg">📚</div>
              <div className="counter-info">
                <span className="counter-number">1,800+</span>
                <span className="counter-label">बाल शिक्षा (Students)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
