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
      title: "मानव सेवा",
      subtitle: "Human Welfare",
      desc: "निशुल्क भोजन वितरण (भंडारा), निर्धन शिक्षा व चिकित्सा सहयोग कार्य।",
      class: "saffron"
    },
    {
      icon: "🐾",
      title: "जीव दया",
      subtitle: "Animal Care",
      desc: "असहाय बेजुबान पशुओं का उपचार, दैनिक चारा-पानी व सुरक्षित आश्रय।",
      class: "green"
    },
    {
      icon: "🕉️",
      title: "भक्ति व चेतना",
      subtitle: "Spiritual Focus",
      desc: "बाबा श्याम संकीर्तन, धार्मिक-सामाजिक उत्सव व परोपकार प्रचार।",
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
      <div className="bg-pulse-green" style={{ bottom: '25%', right: '5%' }}></div>
      
      <div className="container hero-container">
        {/* Left Side: Content */}
        <div className="hero-content">
          <div className="hero-badge glass">
            <Sparkles size={14} className="badge-icon" />
            <span>मानव सेवा एवं जीव संरक्षण फाउंडेशन</span>
          </div>

          <h1 className="hero-title">
            नर सेवा ही <span className="highlight saffron">नारायण सेवा</span> है, <br />
            जीव दया ही <span className="highlight green">परम धर्म</span> है।
          </h1>

          <p className="hero-description">
            श्री श्री श्याम सेवा परिवार फाउंडेशन (Lucknow) का पावन संकल्प: समाज के वंचित वर्ग को शिक्षा, 
            भोजन व रोजगार से आत्मनिर्भर बनाना, तथा असहाय व मूक पशुओं को चिकित्सा, भोजन व आश्रय प्रदान कर 
            करुणा की गंगा बहाना।
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
              <ShieldAlert className="meta-icon green" size={20} />
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
              <div className="counter-icon-wrapper green-bg">🐾</div>
              <div className="counter-info">
                <span className="counter-number">4,200+</span>
                <span className="counter-label">पशु उपचार (Rescues)</span>
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
