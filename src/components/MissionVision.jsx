import React, { useState } from 'react';
import { Target, Eye, Sparkles, Compass } from 'lucide-react';
import './MissionVision.css';

export default function MissionVision() {
  const [lang, setLang] = useState('both'); // 'hindi' | 'english' | 'both'

  return (
    <section id="mission" className="mission-vision-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">हमारा संकल्प</span>
          <h2>लक्ष्य और दृष्टिकोण</h2>
          <p>सेवा परमो धर्म: — मानवता और समाज के निर्धन वर्ग की सेवा के प्रति हमारा पावन समर्पण।</p>
          
          {/* Language Switcher */}
          <div className="lang-switcher glass">
            <button 
              className={`lang-btn ${lang === 'both' ? 'active' : ''}`}
              onClick={() => setLang('both')}
            >
              दोनों (Bilingual)
            </button>
            <button 
              className={`lang-btn ${lang === 'hindi' ? 'active' : ''}`}
              onClick={() => setLang('hindi')}
            >
              हिन्दी (Hindi)
            </button>
            <button 
              className={`lang-btn ${lang === 'english' ? 'active' : ''}`}
              onClick={() => setLang('english')}
            >
              English
            </button>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="cards-wrapper">
          {/* Card 1: Mission */}
          <div className="card-item mission-card glass">
            <div className="card-accent-saffron"></div>
            <div className="card-header-inner">
              <div className="icon-box saffron-glow">
                <Target size={28} className="saffron-color" />
              </div>
              <div className="card-title-group">
                <h3>मिशन / Mission</h3>
                <span className="spiritual-tag saffron">मानव सेवा व जीव दया</span>
              </div>
            </div>
            
            <div className="card-body">
              {(lang === 'hindi' || lang === 'both') && (
                <div className="lang-block hindi-text">
                  <span className="quote-mark">“</span>
                  <p>
                    समाज के गरीब, जरूरतमंद और वंचित लोगों के जीवन स्तर को बेहतर बनाना तथा शिक्षा, स्वास्थ्य, भोजन (भंडारा), रोजगार और सामाजिक सहयोग के माध्यम से उन्हें आत्मनिर्भर बनाना। हमारा उद्देश्य है कि समाज का कोई भी व्यक्ति भूखा न सोए और उसे सम्मानजनक जीवन जीने के अवसर प्राप्त हों।
                  </p>
                  <span className="quote-mark-end">”</span>
                </div>
              )}
              
              {(lang === 'english' || lang === 'both') && (
                <div className={`lang-block english-text ${lang === 'both' ? 'bilingual-divider' : ''}`}>
                  <span className="quote-mark">“</span>
                  <p>
                    To uplift the standard of living of the poor, needy, and deprived sections of society, making them self-reliant through education, healthcare, nutrition (Bhandara), employment, and social support. Our goal is to ensure no one goes to bed hungry and everyone has the opportunity to live a life of dignity.
                  </p>
                  <span className="quote-mark-end">”</span>
                </div>
              )}
            </div>

            <div className="card-footer-decor">
              <Sparkles size={16} className="decor-sparkle" />
              <span>श्री श्री श्याम सेवा संस्थान</span>
            </div>
          </div>

          {/* Card 2: Vision */}
          <div className="card-item vision-card glass">
            <div className="card-accent-maroon"></div>
            <div className="card-header-inner">
              <div className="icon-box maroon-glow">
                <Eye size={28} className="maroon-color" />
              </div>
              <div className="card-title-group">
                <h3>विज़न / Vision</h3>
                <span className="spiritual-tag maroon">संवेदनशील व समतामूलक समाज</span>
              </div>
            </div>

            <div className="card-body">
              {(lang === 'hindi' || lang === 'both') && (
                <div className="lang-block hindi-text">
                  <span className="quote-mark">“</span>
                  <p>
                    एक ऐसा संवेदनशील और समतामूलक समाज बनाना जहाँ हर व्यक्ति को सम्मान, अवसर और आवश्यक सुविधाएँ प्राप्त हों। हम एक ऐसे भविष्य की कल्पना करते हैं जहाँ मानवता, करुणा और परस्पर सेवा के मूल्यों पर आधारित एक सशक्त समाज का निर्माण हो।
                  </p>
                  <span className="quote-mark-end">”</span>
                </div>
              )}

              {(lang === 'english' || lang === 'both') && (
                <div className={`lang-block english-text ${lang === 'both' ? 'bilingual-divider' : ''}`}>
                  <span className="quote-mark">“</span>
                  <p>
                    To establish a sensitive, empathetic, and egalitarian society where every individual is treated with dignity and granted access to equal opportunities and essential amenities. We envision a future empowered by the values of humanity, compassion, and mutual service.
                  </p>
                  <span className="quote-mark-end">”</span>
                </div>
              )}
            </div>

            <div className="card-footer-decor">
              <Compass size={16} className="decor-sparkle" />
              <span>करुणा एवं सेवा संकल्प</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
