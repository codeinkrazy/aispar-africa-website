
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import PartnersSection from '../components/PartnersSection';
import SolutionsSection from '../components/SolutionsSection';
import ResearchSection from '../components/ResearchSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import MambaTechFooter from '../components/MambaTechFooter';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Index = () => {
  useEffect(() => {
    // Easter egg: Triple click triggers special animation
    let clickCount = 0;
    let clickTimer: NodeJS.Timeout;

    const handleTripleClick = () => {
      clickCount++;
      
      if (clickCount === 1) {
        clickTimer = setTimeout(() => {
          clickCount = 0;
        }, 500);
      } else if (clickCount === 3) {
        clearTimeout(clickTimer);
        clickCount = 0;
        
        // Trigger magenta virus animation
        document.body.style.animation = 'glitch 0.5s ease-in-out';
        setTimeout(() => {
          document.body.style.animation = '';
        }, 500);
      }
    };

    document.addEventListener('click', handleTripleClick);
    
    return () => {
      document.removeEventListener('click', handleTripleClick);
      if (clickTimer) clearTimeout(clickTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <PartnersSection />
      <SolutionsSection />
      <ResearchSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <MambaTechFooter />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
