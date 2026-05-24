import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import OurSeva from './components/OurSeva';
import OurProjects from './components/OurProjects';
import Gallery from './components/Gallery';
import Volunteer from './components/Volunteer';
import ContactUs from './components/ContactUs';
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

        {/* About Us Section */}
        <AboutUs />

        {/* Our Seva Section */}
        <OurSeva onDonateClick={handleOpenDonate} />

        {/* Dynamic Projects */}
        <OurProjects onDonateClick={handleOpenDonate} />

        {/* Beautiful local image photo gallery */}
        <Gallery />

        {/* Volunteer Section */}
        <Volunteer />

        {/* Contact Us Section */}
        <ContactUs />
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
