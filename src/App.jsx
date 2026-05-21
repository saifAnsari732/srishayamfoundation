import  { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import Initiatives from './components/Initiatives';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import SocialHub from './components/SocialHub';
import DonationModal from './components/DonationModal';
import VolunteerForm from './components/VolunteerForm';
import Footer from './components/Footer';
import { Heart, MessageCircle } from 'lucide-react';
import './App.css';

export default function App() {
  const [donateOpen, setDonateOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  const handleOpenDonate = () => setDonateOpen(true);
  const handleCloseDonate = () => setDonateOpen(false);

  const handleOpenVolunteer = () => setVolunteerOpen(true);
  const handleCloseVolunteer = () => setVolunteerOpen(false);

  return (
    <div className="app-wrapper">
      {/* Sticky Top Navbar */}
      <Navbar 
        onDonateClick={handleOpenDonate} 
        onVolunteerClick={handleOpenVolunteer} 
      />

      {/* Main Semantic Content */}
      <main>
        {/* Immersive Hero */}
        <Hero 
          onDonateClick={handleOpenDonate} 
          onVolunteerClick={handleOpenVolunteer} 
        />

        {/* Bilingual Mission & Vision */}
        <MissionVision />

        {/* Dynamic Initiatives Checklist */}
        <Initiatives onDonateClick={handleOpenDonate} />

        {/* Beautiful local image photo gallery */}
        <Gallery />

        {/* Leadership & Corporate Legitimacy */}
        <AboutUs />

        {/* Interactive Social Media Hub */}
        <SocialHub />
      </main>

      {/* Structured Footer */}
      <Footer 
        onDonateClick={handleOpenDonate} 
        onVolunteerClick={handleOpenVolunteer} 
      />

      {/* Interactive Modals */}
      <DonationModal 
        isOpen={donateOpen} 
        onClose={handleCloseDonate} 
      />
      
      <VolunteerForm 
        isOpen={volunteerOpen} 
        onClose={handleCloseVolunteer} 
      />

      {/* Sticky Support Float Action Badge */}
      <div className="quick-action-floater">
        <button 
          className="float-btn float-donate" 
          onClick={handleOpenDonate}
          title="सहयोग करें (Support)"
        >
          <Heart size={22} fill="currentColor" />
          <span className="float-label">सहयोग</span>
        </button>
        <button 
          className="float-btn  float-volunteer" 
          onClick={handleOpenVolunteer}
          title="जुड़ें (Join)"
        >
          <MessageCircle size={22} fill="white" />
          <span className="float-label">जुड़ें</span>
        </button>
      </div>
    </div>
  );
}
