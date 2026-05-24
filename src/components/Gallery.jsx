import React, { useState } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

export default function Gallery({ onDonateClick }) {
  const [selectedImgIdx, setSelectedImgIdx] = useState(null);
  const [filter, setFilter] = useState('all'); 

  const images = [
    { src: "/1.jpeg", category: "bhandara", title: "भंडारा सेवा" },
    { src: "/2.jpeg", category: "food", title: "भोजन वितरण" },
    { src: "/3.jpeg", category: "bhandara", title: "दैनिक भोजन सेवा" },
    { src: "/4.jpeg", category: "charity", title: "बच्चों की शिक्षा व मदद" },
    { src: "/5.jpeg", category: "food", title: "पौष्टिक भोजन वितरण" },
    { src: "/6.jpeg", category: "charity", title: "स्वयंसेवक सेवा कार्य" },
    { src: "/7.jpeg", category: "bhandara", title: "सामुदायिक सेवा" },
    { src: "/8.jpeg", category: "food", title: "राहत शिविर सेवा" }
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  const openLightbox = (idx) => setSelectedImgIdx(idx);
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
        {/* Header */}
        <div className="section-header-left">
          <h2 className="section-title-large text-primary">गैलरी</h2>
          <div className="breadcrumbs">
            <span>होम</span> <span className="separator">&gt;</span> <span className="current">गैलरी</span>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="gallery-tabs">
          <button className={`tab-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>सभी</button>
          <button className={`tab-btn ${filter === 'bhandara' ? 'active' : ''}`} onClick={() => setFilter('bhandara')}>भंडारा</button>
          <button className={`tab-btn ${filter === 'food' ? 'active' : ''}`} onClick={() => setFilter('food')}>भोजन वितरण</button>
          <button className={`tab-btn ${filter === 'charity' ? 'active' : ''}`} onClick={() => setFilter('charity')}>सेवा कार्य</button>
        </div>

        {/* Gallery Masonry Grid */}
        <div className="gallery-grid">
          {filteredImages.map((img, idx) => (
            <div key={idx} className="gallery-item" onClick={() => openLightbox(idx)}>
              <div className="gallery-img-wrapper">
                <img src={img.src} alt={img.title} className="gallery-img" loading="lazy" />
                <div className="gallery-hover-overlay">
                  <ZoomIn size={32} className="zoom-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Overlay */}
        {selectedImgIdx !== null && (
          <div className="lightbox-backdrop" onClick={closeLightbox}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <X size={28} />
            </button>
            <button className="lightbox-arrow prev" onClick={slidePrev}>
              <ChevronLeft size={36} />
            </button>
            <div className="lightbox-content-card" onClick={(e) => e.stopPropagation()}>
              <img src={filteredImages[selectedImgIdx].src} alt={filteredImages[selectedImgIdx].title} className="lightbox-main-img" />
              <div className="lightbox-meta">
                <h3>{filteredImages[selectedImgIdx].title}</h3>
              </div>
            </div>
            <button className="lightbox-arrow next" onClick={slideNext}>
              <ChevronRight size={36} />
            </button>
          </div>
        )}
      </div>

      {/* Mint CTA Banner */}
      <div className="primary-cta-banner">
        <div className="container cta-container">
          <div className="cta-text">
            <h3>इस सेवा का हिस्सा बनें</h3>
            <p>आपका छोटा सा सहयोग हमें हर दिन अधिक से अधिक जरूरतमंदों तक पहुँचने में मदद करता है।</p>
          </div>
          <div className="cta-action">
            <button className="btn btn-secondary btn-lg donate-inverse" onClick={onDonateClick}>
              अभी दान करें
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
