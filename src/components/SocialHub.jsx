import React from 'react';
import { MessageCircle, Heart, Share2, ExternalLink } from 'lucide-react';
import { Facebook, Instagram, Twitter } from './BrandIcons';
import './SocialHub.css';

export default function SocialHub() {
  const posts = [
    {
      id: 'fb-post',
      platform: 'facebook',
      icon: <Facebook size={20} className="platform-icon fb" />,
      handle: "@shrishyamsewaparivar",
      link: "https://facebook.com/shrishyamsewaparivar",
      date: "2 दिन पूर्व",
      text: "बाबा श्याम की कृपा से लखनऊ के मौंदा क्षेत्र में आज पुनः विशाल भंडारा सेवा का आयोजन किया गया। 650 से अधिक निर्धन, असहाय व राहगीरों को आदर सहित भोजन परोसा गया। सेवा ही माधव पूजा है। आप सभी का सहयोग व आशीर्वाद प्रार्थनीय है। 🍲🙏",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=600",
      likes: "1.2K",
      comments: "145",
      color: "#1877F2"
    },
    {
      id: 'ig-post',
      platform: 'instagram',
      icon: <Instagram size={20} className="platform-icon ig" />,
      handle: "@shrishyamsewaparivarfoundation",
      link: "https://instagram.com/shrishyamsewaparivarfoundation",
      date: "4 दिन पूर्व",
      text: "लखनऊ मौंदा मार्ग पर कल शाम चोटिल हुई एक असहाय नंदी (बछड़े) को हमारी रेस्क्यू एम्बुलेंस टीम ने त्वरित उपचार प्रदान किया। घाव की मरहम-पट्टी कर उसे सुरक्षित स्थान पर चारे-पानी के साथ रखा गया है। मूक पशुओं पर दया करें। 🐾❤️🚑",
      image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=600",
      likes: "956",
      comments: "84",
      color: "#E1306C"
    },
    {
      id: 'tw-post',
      platform: 'twitter',
      icon: <Twitter size={20} className="platform-icon tw" />,
      handle: "@shyamparivarfdn",
      link: "https://x.com/shyamparivarfdn",
      date: "1 सप्ताह पूर्व",
      text: "शिक्षा सहयोग अभियान के अंतर्गत आज फाउंडेशन द्वारा मौंदा प्राथमिक विद्यालय के 75 से अधिक जरूरतमंद बच्चों को कॉपियां, पेंसिल बॉक्स और बस्ते वितरित किए गए। बच्चों की मुस्कान ही हमारी सच्ची पूंजी है। 📚🎒✍️ #NGO #Lucknow",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600",
      likes: "420",
      comments: "32",
      color: "#000000"
    }
  ];

  return (
    <section id="social-hub" className="social-hub-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">सोशल मीडिया से जुड़ाव</span>
          <h2>गतिविधियां एवं दैनिक झलकियां</h2>
          <p>हमारे फेसबुक, इंस्टाग्राम और ट्विटर हैंडल से सीधे जुड़ें और हमारी दैनिक सेवा गतिविधियों से अपडेट रहें।</p>
        </div>

        {/* Channels Row */}
        <div className="social-channels glass">
          <a href="https://facebook.com/shrishyamsewaparivar" target="_blank" rel="noopener noreferrer" className="channel-pill fb">
            <Facebook size={18} fill="currentColor" />
            <span>Facebook</span>
            <ExternalLink size={12} />
          </a>
          <a href="https://instagram.com/shrishyamsewaparivarfoundation" target="_blank" rel="noopener noreferrer" className="channel-pill ig">
            <Instagram size={18} />
            <span>Instagram</span>
            <ExternalLink size={12} />
          </a>
          <a href="https://x.com/shyamparivarfdn" target="_blank" rel="noopener noreferrer" className="channel-pill tw">
            <Twitter size={18} fill="currentColor" />
            <span>Twitter / X</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Grid layout of Mock Feeds */}
        <div className="grid-3 social-feeds-grid">
          {posts.map((post) => (
            <article key={post.id} className="feed-card glass">
              {/* Card Header */}
              <div className="feed-card-header">
                <div className="feed-user">
                  <div className="avatar-wrapper" style={{ borderColor: post.color }}>
                    {post.icon}
                  </div>
                  <div className="feed-user-info">
                    <h4>Shri Shyam Sewa Parivar</h4>
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="feed-handle" style={{ color: post.color }}>
                      {post.handle}
                    </a>
                  </div>
                </div>
                <span className="feed-date">{post.date}</span>
              </div>

              {/* Feed Content text */}
              <p className="feed-text">{post.text}</p>

              {/* Feed Image mockup */}
              <div className="feed-image-container">
                <img src={post.image} alt="Social Media Activity Post" className="feed-img" loading="lazy" />
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="feed-hover-overlay">
                  <ExternalLink size={24} />
                  <span>मूल पोस्ट देखें (View Original)</span>
                </a>
              </div>

              {/* Feed Actions footer */}
              <div className="feed-actions">
                <button className="feed-action-btn hover-red">
                  <Heart size={18} />
                  <span>{post.likes}</span>
                </button>
                <button className="feed-action-btn hover-blue">
                  <MessageCircle size={18} />
                  <span>{post.comments}</span>
                </button>
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="feed-action-btn hover-orange ml-auto" style={{ color: post.color }}>
                  <Share2 size={18} />
                  <span>फ़ॉलो करें</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
