import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import './Gallery.css';

export default function Gallery() {
  const [selectedImgIdx, setSelectedImgIdx] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all' | 'bhandara' | 'sewa'

  const images = [
    { src: "/1.jpeg", category: "bhandara", title: "श्री श्याम रसोई भंडारा", desc: "मौंदा, लखनऊ में जरूरतमंदों को निशुल्क भोजन वितरण" },
    { src: "/2.jpeg", category: "bhandara", title: "पवित्र प्रसाद वितरण", desc: "बाबा श्याम की प्रेरणा से नित्य भंडारा सेवा" },
    { src: "/3.jpeg", category: "bhandara", title: "दैनिक भोजन सेवा", desc: "स्वच्छ, पौष्टिक एवं शुद्ध सात्विक भोजन प्रसाद" },
    { src: "/4.jpeg", category: "bhandara", title: "बच्चों को प्रसाद वितरण", desc: "झुग्गी-झोपड़ी के मासूम बच्चों को आदर सहित भोजन" },
    { src: "/5.jpeg", category: "bhandara", title: "शुद्ध सात्विक रसोई", desc: "पूर्ण शुद्धता और शुचिता से तैयार किया जाने वाला प्रसाद" },
    { src: "/6.jpeg", category: "bhandara", title: "अथक सेवा कार्य", desc: "स्वयंसेवकों द्वारा पूर्ण निष्ठा से संचालित भंडारा वितरण" },
    { src: "/7.jpeg", category: "bhandara", title: "तृप्ति और मुस्कान", desc: "भोजन पाकर संतुष्ट और प्रसन्न ग्रामवासियों की झलक" },
    { src: "/8.jpeg", category: "bhandara", title: "राहत सेवा शिविर", desc: "मौंदा ग्राम में भीषण गर्मी में भोजन एवं जल सेवा का आयोजन" },
    { src: "/9.jpeg", category: "bhandara", title: "करुणा सेवा संकल्प", desc: "जरूरतमंदों तक स्नेहपूर्वक भोजन पहुंचाने का पावन संकल्प" },
    { src: "/V20210623_5125T01.JPG.jpeg", category: "bhandara", title: "पौष्टिक भोजन वितरण", desc: "गरीब व वंचित लोगों को सात्विक भंडारा वितरण" },
    { src: "/V20210623_5126T01.JPG.jpeg", category: "bhandara", title: "भंडारा प्रसाद वितरण", desc: "बाबा श्याम की प्रेरणा से मौंदा, लखनऊ में नित्य सेवा" },
    { src: "/V20210623_5127T01.JPG.jpeg", category: "sewa", title: "जन-कल्याण सेवा", desc: "झुग्गी-झोपड़ियों व बस्तियों में जरूरतमंदों की सहायता" },
    { src: "/V20210623_5128T01.JPG.jpeg", category: "bhandara", title: "गरम सात्विक भोजन", desc: "नित्य तैयार होने वाला स्वच्छ और पौष्टिक प्रसाद" },
    { src: "/V20210623_5129T01.JPG.jpeg", category: "bhandara", title: "सेवा दल वितरण कार्य", desc: "अनुशासित रूप से सभी तक प्रसाद पहुंचाने का कार्य" },
    { src: "/V20210623_5130T01.JPG.jpeg", category: "sewa", title: "गरीब व वंचित सहायता", desc: "लखनऊ मौंदा के ग्रामीण इलाकों में राहत वितरण" },
    { src: "/V20210623_5131T01.JPG.jpeg", category: "bhandara", title: "निशुल्क भंडारा", desc: "राहगीरों व निर्धनों के लिए भोजन पानी की उत्तम व्यवस्था" },
    { src: "/V20210623_5133T01.JPG.jpeg", category: "sewa", title: "सहयोग एवं सहभागिता", desc: "स्थानीय नागरिकों के सहयोग से संचालित होने वाले कार्य" },
    { src: "/V20210623_5135T01.JPG.jpeg", category: "bhandara", title: "प्रसाद वितरण झलक", desc: "भंडारे में उमड़ा जनसैलाब एवं सेवा कार्य" },
    { src: "/V20210623_5136T01.JPG.jpeg", category: "bhandara", title: "सामुदायिक भंडारा सेवा", desc: "बच्चों व बुजुर्गों को आदर सहित भोजन सेवा" },
    { src: "/V20210623_5137T01.JPG.jpeg", category: "sewa", title: "राहत सामग्री वितरण", desc: "कमजोर वर्ग के परिवारों को राशन व आवश्यक वस्तुओं का वितरण" },
    { src: "/V20210623_5138T01.JPG.jpeg", category: "bhandara", title: "भोजन वितरण स्थल", desc: "लखनऊ के मौंदा ग्राम में सेवा शिविर की एक झलक" },
    { src: "/V20210623_5139T01.JPG.jpeg", category: "bhandara", title: "स्वच्छ भोजन सेवा", desc: "पूर्ण शुद्धता और शुचिता से तैयार भोजन का वितरण" },
    { src: "/V20210623_5140T01.JPG.jpeg", category: "sewa", title: "करुणा व सेवा संकल्प", desc: "फाउंडेशन के सेवादारों द्वारा समर्पित जन-कार्य" }
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  const openLightbox = (idx) => {
    // Find index in filtered list to allow smooth sliding
    setSelectedImgIdx(idx);
  };

  const closeLightbox = () => setSelectedImgIdx(null);

  const slidePrev = (e) => {
    e.stopPropagation();
    setSelectedImgIdx((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const slideNext = (e) => {
    e.stopPropagation();
    setSelectedImgIdx((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="gallery-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">सेवा दीर्घा</span>
          <h2>चित्र दीर्घा (Photo Gallery)</h2>
          <p>लखनऊ के मौंदा क्षेत्र में फाउंडेशन द्वारा संचालित होने वाले निशुल्क भंडारे और लोक-कल्याण कार्यों की वास्तविक तस्वीरें:</p>

          {/* Filter Navigation */}
          <div className="gallery-filters glass">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              सभी चित्र (All)
            </button>
            <button 
              className={`filter-btn ${filter === 'bhandara' ? 'active' : ''}`}
              onClick={() => setFilter('bhandara')}
            >
              भंडारा सेवा (Bhandara)
            </button>
            <button 
              className={`filter-btn ${filter === 'sewa' ? 'active' : ''}`}
              onClick={() => setFilter('sewa')}
            >
              जन-सेवा कार्य (Community Sewa)
            </button>
          </div>
        </div>

        {/* Gallery Masonry Grid */}
        <div className="gallery-grid">
          {filteredImages.map((img, idx) => (
            <div 
              key={idx} 
              className="gallery-item glass"
              onClick={() => openLightbox(idx)}
            >
              <div className="gallery-img-wrapper">
                <img src={img.src} alt={img.title} className="gallery-img" loading="lazy" />
                <div className="gallery-hover-overlay">
                  <ZoomIn size={24} className="zoom-icon" />
                  <h4>{img.title}</h4>
                  <p>{img.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Overlay */}
        {selectedImgIdx !== null && (
          <div className="lightbox-backdrop" onClick={closeLightbox}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close Lightbox">
              <X size={28} />
            </button>
            
            <button className="lightbox-arrow prev" onClick={slidePrev} aria-label="Previous Image">
              <ChevronLeft size={36} />
            </button>
            
            <div className="lightbox-content-card" onClick={(e) => e.stopPropagation()}>
              <img 
                src={filteredImages[selectedImgIdx].src} 
                alt={filteredImages[selectedImgIdx].title} 
                className="lightbox-main-img" 
              />
              <div className={`lightbox-meta ${filteredImages[selectedImgIdx].category}`}>
                <div className="lightbox-meta-header">
                  <span className={`lightbox-category-badge ${filteredImages[selectedImgIdx].category}`}>
                    {filteredImages[selectedImgIdx].category === 'bhandara' ? '🍲 भोजन सेवा (Bhandara)' : '🤝 जन-कल्याण (Community Sewa)'}
                  </span>
                  <span className="lightbox-counter">
                    {selectedImgIdx + 1} / {filteredImages.length}
                  </span>
                </div>
                <h3>{filteredImages[selectedImgIdx].title}</h3>
                <p>{filteredImages[selectedImgIdx].desc}</p>
              </div>
            </div>
            
            <button className="lightbox-arrow next" onClick={slideNext} aria-label="Next Image">
              <ChevronRight size={36} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
