import React from 'react';
import { Award, Landmark, Calendar, MapPin, ShieldCheck, Mail, Compass } from 'lucide-react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">हमारे बारे में</span>
          <h2>संगठन का परिचय व वैधता</h2>
          <p>श्री श्री श्याम सेवा परिवार फाउंडेशन समाज में पारदर्शिता, शुचिता और सेवा के उच्च मापदंडों के साथ कार्य करता है।</p>
        </div>

        {/* Content Layout */}
        <div className="about-grid">
          {/* Left Column: Description & Directors */}
          <div className="about-content-left">
            <h3 className="about-sub-title">नेतृत्व एवं जन-सेवा पृष्ठभूमि</h3>
            <p className="about-para">
              लखनऊ, उत्तर प्रदेश में संस्थापित **श्री श्री श्याम सेवा परिवार फाउंडेशन** एक मान्यता प्राप्त सामाजिक संस्था है। 
              हमारा पावन उद्देश्य बाबा श्याम की असीम प्रेरणा से मानवता की सेवा करना और हर प्राणी के जीवन को सुगम बनाना है।
            </p>
            <p className="about-para">
              संस्था के मार्गदर्शक एवं संचालक मंडल में शामिल महानुभाव जन-सेवा व लोक-कल्याण के क्षेत्र में दशकों का अनुभव रखते हैं:
            </p>

            {/* Directors Card */}
            <div className="directors-card glass">
              <div className="director-profile-item">
                <div className="director-avatar">MS</div>
                <div className="director-info">
                  <h4>स्व. श्री मित्रसेन यादव (वरिष्ठ मार्गदर्शक)</h4>
                  <p>उत्तर प्रदेश के अत्यंत सम्मानित लोकनेता, पूर्व सांसद (लोकसभा) एवं विधायक, जिन्होंने अपना संपूर्ण जीवन शोषितों, गरीबों व समाज के अंतिम पायदान पर खड़े लोगों के अधिकारों व उत्थान के लिए समर्पित कर दिया। उनका सेवा-पथ ही हमारा आदर्श है।</p>
                </div>
              </div>

              <div className="director-profile-divider"></div>

              <div className="director-profile-item">
                <div className="director-avatar">AS</div>
                <div className="director-info">
                  <h4>श्री आनंद सेन यादव (संस्थापक व निदेशक)</h4>
                  <p>पूर्व मंत्री एवं विधायक (Milkipur विधानसभा), उत्तर प्रदेश शासन। श्री आनंद सेन यादव अपने पूज्य पिता के जन-कल्याण के पदचिह्नों पर चलते हुए फाउंडेशन का कुशल नेतृत्व कर रहे हैं और गरीबों की समृद्धि व पशु कल्याण कार्यों को दिशा दे रहे हैं।</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Legitimacy Cards */}
          <div className="about-content-right">
            <h3 className="about-sub-title">पंजीकरण एवं प्रशासनिक विवरण</h3>
            
            <div className="legitimacy-cards">
              {/* Card 1: Registration date */}
              <div className="legit-card glass">
                <Calendar className="legit-icon saffron" size={24} />
                <div className="legit-text">
                  <h5>स्थापना तिथि (Incorporation Date)</h5>
                  <p>13 मार्च, 2026</p>
                  <span className="legit-badge green">सक्रिय (Active Entity)</span>
                </div>
              </div>

              {/* Card 2: Registered address */}
              <div className="legit-card glass">
                <MapPin className="legit-icon saffron" size={24} />
                <div className="legit-text">
                  <h5>पंजीकृत कार्यालय (Registered Office)</h5>
                  <p>ग्राम व पोस्ट: मौंदा, जिला: लखनऊ, उत्तर प्रदेश - 226008, भारत</p>
                </div>
              </div>

              {/* Card 3: Capital and Corporate Type */}
              <div className="legit-card glass">
                <Landmark className="legit-icon saffron" size={24} />
                <div className="legit-text">
                  <h5>कॉर्पोरेट प्रशासनिक दर्जा (Structure)</h5>
                  <p>गैर-सरकारी संस्था (Private Limited Non-Profit Social Work)</p>
                  <div className="capitals-list">
                    <span>अधिकृत पूंजी: <strong>₹10.00 लाख</strong></span>
                    <span>•</span>
                    <span>प्रदत्त पूंजी: <strong>₹5.00 लाख</strong></span>
                  </div>
                </div>
              </div>

              {/* Card 4: Compliance Status */}
              <div className="legit-card glass">
                <ShieldCheck className="legit-icon green" size={24} />
                <div className="legit-text">
                  <h5>पारदर्शिता एवं सरकारी मान्यता</h5>
                  <p>कॉर्पोरेट कार्य मंत्रालय (Ministry of Corporate Affairs) द्वारा पंजीकृत व शत-प्रतिशत ऑडिट-युक्त वित्तीय प्रशासन।</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Address callout */}
        <div className=" Lucknow-callout glass">
          <Mail className="callout-icon" size={20} />
          <span>कार्यालय से संपर्क सूत्र: <strong>shrishrishyamsewaparivar@gmail.com</strong></span>
        </div>
      </div>
    </section>
  );
}
