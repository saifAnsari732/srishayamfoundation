import React from 'react';
import { ShieldCheck, Heart, Soup, CheckSquare } from 'lucide-react';
import './OurProjects.css';

export default function OurProjects({ onDonateClick }) {
  const projectCards = [
    {
      id: 1,
      title: "दैनिक भंडारा",
      desc: "हर जरूरतमंद को 24/7 पौष्टिक और ताजा भोजन परोसा जाता है।",
      image: "/2.jpeg"
    },
    {
      id: 2,
      title: "भोजन निर्माण",
      desc: "भोजन पूरी शुद्धता, पवित्रता, प्रेम और स्वच्छता के साथ तैयार किया जाता है।",
      image: "/3.jpeg"
    },
    {
      id: 3,
      title: "मुस्कान के साथ सेवा",
      desc: "हमारे स्वयंसेवक विनम्रता, सम्मान और असीम सेवा भाव से भोजन परोसते हैं।",
      image: "/V20210623_5125T01.JPG.jpeg"
    }
  ];

  return (
    <section id="initiatives" className="projects-section section-padding">
      <div className="container project-split-container">
        
        {/* Left Side: Description Text & 4 Gold Feature Grid */}
        <div className="project-description-block">
          <span className="project-subtitle">हमारी परियोजनाएं</span>
          <h2 className="project-title-large">24/7 भंडारा सेवा</h2>
          
          <p className="project-desc-paragraph">
            हमारा मिशन बेहद सरल है - कोई भी भूखा न सोए। हम जाति, धर्म या वर्ग की परवाह किए बिना सभी को निःशुल्क भोजन प्रदान करते हैं।
          </p>
          
          {/* 4 Feature Badges in 2x2 Grid Layout */}
          <div className="project-features-grid">
            <div className="project-feature-item">
              <div className="feature-circle-gold">
                <Soup size={16} />
              </div>
              <div className="feature-texts">
                <span className="feat-title">निःशुल्क भोजन</span>
                <span className="feat-sub">सभी के लिए</span>
              </div>
            </div>
            
            <div className="project-feature-item">
              <div className="feature-circle-gold">
                <ShieldCheck size={16} />
              </div>
              <div className="feature-texts">
                <span className="feat-title">स्वच्छता</span>
                <span className="feat-sub">और शुद्ध भोजन</span>
              </div>
            </div>
            
            <div className="project-feature-item">
              <div className="feature-circle-gold">
                <Heart size={16} />
              </div>
              <div className="feature-texts">
                <span className="feat-title">प्रेमपूर्वक निर्मित</span>
                <span className="feat-sub">और पूरी देखभाल</span>
              </div>
            </div>
            
            <div className="project-feature-item">
              <div className="feature-circle-gold">
                <CheckSquare size={16} />
              </div>
              <div className="feature-texts">
                <span className="feat-title">दान का उपयोग</span>
                <span className="feat-sub">केवल सेवा कार्यों में</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side: 3 Columns of Vertical Interactive Cards */}
        <div className="project-cards-grid-block">
          {projectCards.map((item) => (
            <div key={item.id} className="project-card-mockup">
              <div className="card-image-wrapper">
                <img src={item.image} alt={item.title} className="card-image" />
              </div>
              <div className="card-contents">
                <h3 className="card-title-main">{item.title}</h3>
                <p className="card-desc-sub">{item.desc}</p>
                <button className="btn-view-details-mockup">
                  विवरण देखें
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      
      {/* Dark Navy CTA Banner underneath */}
      <div className="dark-cta-banner">
        <div className="container cta-container">
          <div className="cta-text">
            <h3>हमारी परियोजनाओं का समर्थन करें</h3>
            <p>आपका छोटा सा योगदान समाज में एक बड़ा बदलाव ला सकता है। आइए मिलकर सेवा करें।</p>
          </div>
          <div className="cta-action">
            <button className="btn btn-primary btn-lg" onClick={onDonateClick}>
              अभी दान करें
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
