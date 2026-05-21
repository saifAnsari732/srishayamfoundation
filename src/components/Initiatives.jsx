import React, { useState } from 'react';
import { BookOpen, Stethoscope, HelpingHand, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import './Initiatives.css';

export default function Initiatives({ onDonateClick }) {
  const [filter, setFilter] = useState('all'); // 'all' | 'bhandara' | 'sewa'

  const items = [
    {
      id: 'bhandara',
      category: 'bhandara',
      icon: "🍲",
      image: "/V20210623_5125T01.JPG.jpeg",
      title: "दैनिक भंडारा सेवा (Nutritious Meals)",
      desc: "समाज के गरीब, झुग्गी-झोपड़ी में रहने वाले बच्चों, रिक्शाचालकों व अत्यंत असहाय लोगों तक नित्य गर्म, शुद्ध और पौष्टिक सात्विक भोजन पहुंचाना।",
      impact: "12,500+ वितरित भोजन",
      color: "var(--color-saffron)"
    },
    {
      id: 'water',
      category: 'bhandara',
      icon: "💧",
      title: "निशुल्क जल सेवा (Water Relief)",
      desc: "भीषण गर्मी में राहगीरों और जरूरतमंदों के लिए स्वच्छ और ठंडे जल की व्यवस्था करना।",
      impact: "दैनिक 2000+ लाभार्थी",
      color: "var(--color-saffron)"
    },
    {
      id: 'education',
      category: 'sewa',
      icon: "📚",
      title: "शिक्षा सहयोग अभियान (Child Education)",
      desc: "निर्धन बच्चों को विद्यालयीय सामग्री (किताबें, बस्ते, वर्दी) प्रदान करना, कंप्यूटर साक्षरता देना, और उनकी ट्यूशन फीस प्रायोजित कर सशक्त बनाना।",
      impact: "1,800+ शिक्षित बच्चे",
      color: "var(--color-gold)"
    },
    {
      id: 'health',
      category: 'sewa',
      icon: "🩺",
      image: "/V20210623_5137T01.JPG.jpeg",
      title: "स्वास्थ्य व चिकित्सा सहयोग (Healthcare)",
      desc: "समय-समय पर निशुल्क स्वास्थ्य शिविरों का आयोजन, दवाइयां उपलब्ध करवाना, और गंभीर रोगियों को बड़े अस्पतालों में इलाज हेतु आर्थिक सहायता देना।",
      impact: "2,500+ लाभांवित मरीज",
      color: "var(--color-maroon)"
    },
    {
      id: 'livelihood',
      category: 'sewa',
      icon: "💼",
      image: "/V20210623_5130T01.JPG.jpeg",
      title: "स्वावलंबन (Livelihood Assistance)",
      desc: "निर्धन महिलाओं को निशुल्क सिलाई मशीनें देना, हस्तशिल्प प्रशिक्षण देना और उन्हें स्वरोजगार स्थापित कर आत्मनिर्भर बनाने में आर्थिक सहयोग करना।",
      impact: "350+ आत्मनिर्भर लोग",
      color: "var(--color-gold)"
    },
    {
      id: 'relief',
      category: 'sewa',
      icon: "🤝",
      title: "आपातकालीन राहत (Emergency Relief)",
      desc: "प्राकृतिक आपदाओं, कड़ाके की ठंड या अन्य संकट के समय गर्म कपड़े, राशन किट और बुनियादी आवश्यकताएं प्रदान कर प्रभावित परिवारों की सहायता करना।",
      impact: "5000+ राहत सामग्री किट",
      color: "var(--color-maroon)"
    }
  ];

  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

  return (
    <section id="initiatives" className="initiatives-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className={`section-header ${filter === 'sewa' ? 'maroon-header' : ''}`}>
          <span className="subtitle">हमारे निरंतर प्रयास</span>
          <h2>मुख्य सेवा कार्य क्षेत्र</h2>
          <p>श्री श्री श्याम सेवा परिवार फाउंडेशन के माध्यम से संचालित होने वाली मुख्य सामाजिक और कल्याणकारी गतिविधियां:</p>

          {/* Tab Filter */}
          <div className="filter-tabs glass">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              सभी सेवा कार्य (All)
            </button>
            <button 
              className={`filter-btn human-tab ${filter === 'bhandara' ? 'active' : ''}`}
              onClick={() => setFilter('bhandara')}
            >
              भंडारा सेवा (Food Distribution)
            </button>
            <button 
              className={`filter-btn animal-tab ${filter === 'sewa' ? 'active' : ''}`}
              onClick={() => setFilter('sewa')}
            >
              जन सेवा (Community Service)
            </button>
          </div>
        </div>

        {/* Grid Layout of Cards */}
        <div className="grid-3 initiatives-grid">
          {filteredItems.map((item, idx) => (
            <div key={item.id} className={`initiative-card glass ${item.image ? 'has-image' : ''}`} style={{ animationDelay: `${idx * 0.1}s` }}>
              {/* Category Glow Accent */}
              <div 
                className="category-glow" 
                style={{ background: `radial-gradient(circle, ${item.color}15 0%, transparent 70%)` }}
              ></div>

              {item.image && (
                <div className="card-image-header">
                  <img src={item.image} alt={item.title} className="card-header-img" loading="lazy" />
                </div>
              )}

              {/* Decorative Tag */}
              <span className={`category-tag ${item.category}`}>
                {item.category === 'bhandara' ? 'भंडारा सेवा' : 'जन सेवा'}
              </span>

              {/* Card Main Icon */}
              <div className="card-emoji-icon" style={{ backgroundColor: item.color + '12' }}>
                {item.icon}
              </div>

              {/* Title & Description */}
              <div className="card-main-content">
                <h3 className="initiative-card-title">{item.title}</h3>
                <p className="initiative-card-desc">{item.desc}</p>
              </div>

              {/* Impact Stats Banner */}
              <div className="impact-stats-banner" style={{ borderLeftColor: item.color }}>
                <span className="impact-metrics-label">कुल प्रभाव (Live Impact)</span>
                <span className="impact-metrics-value" style={{ color: item.color }}>
                  {item.impact}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic CTA at the bottom */}
        <div className="initiatives-cta glass">
          <div className="cta-left">
            <Sparkles className="cta-sparkle" size={24} />
            <div className="cta-text">
              <h3>इन पुनीत सेवा कार्यों में अपना योगदान दें</h3>
              <p>आपका एक छोटा सा सहयोग समाज के किसी गरीब को रोटी और जरूरतमंद को नया जीवन दे सकता है।</p>
            </div>
          </div>
          <button className="btn btn-primary btn-lg" onClick={onDonateClick}>
            <Heart fill="currentColor" size={16} /> सहयोग करें (Support Now)
          </button>
        </div>
      </div>
    </section>
  );
}
