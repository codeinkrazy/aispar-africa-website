
import React from 'react';
import TypingAnimation from './TypingAnimation';
import Logo3D from './Logo3D';
import Globe3D from './Globe3D';
import ErrorBoundary from './ErrorBoundary';

const HeroSection = () => {
  const typingTexts = [
    "Leading Supply Chain Training Hub in Africa",
    "Premier Research Institution for African Markets",
    "Strategic Consultation Excellence Across 54 Nations",
    "Transforming African Trade and Logistics",
    "Building Sustainable Supply Chain Networks",
    "Empowering African Businesses Through Innovation"
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left">
            {/* Company Logo */}
            <div className="flex justify-center lg:justify-start mb-8">
              <img 
                src="/lovable-uploads/60c5a76c-4e92-411d-9446-f05af861d5bf.png" 
                alt="AISPAR Africa" 
                className="h-20 w-auto cyber-glow rounded-full shadow-2xl"
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-raleway font-bold text-white">
                <span className="text-cyber-cyan">AISPAR</span>
                <br />
                <span className="text-neon-yellow">AFRICA</span>
              </h1>
              
              <div className="h-24">
                <p className="text-lg lg:text-xl font-montserrat text-gray-300">
                  <TypingAnimation 
                    texts={typingTexts}
                    speed={80}
                    deleteSpeed={40}
                    pauseDuration={2500}
                  />
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                Africa's premier institute for supply chain excellence, delivering world-class training, 
                cutting-edge research, and strategic consultation services across the continent.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="px-6 py-3 bg-cyber-cyan text-void-black font-semibold rounded-lg hover-skew hover:bg-neon-yellow transition-all duration-300 cyber-glow">
                  Explore Solutions
                </button>
                <button className="px-6 py-3 border-2 border-hacker-magenta text-hacker-magenta font-semibold rounded-lg hover-skew hover:bg-hacker-magenta hover:text-void-black transition-all duration-300 magenta-glow">
                  Download Report
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - 3D Earth Globe */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-hacker-magenta rounded-full blur-3xl opacity-20 animate-glow-pulse"></div>
              <ErrorBoundary>
                <Globe3D />
              </ErrorBoundary>
            </div>
          </div>
        </div>

        {/* Bottom Counters - Centralized */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-cyber-cyan/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-cyan">54</div>
            <div className="text-sm text-gray-400">African Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-yellow">285</div>
            <div className="text-sm text-gray-400">Companies Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-hacker-magenta">15+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cyber-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-cyan rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
