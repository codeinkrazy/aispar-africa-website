
import React from 'react';
import TypingAnimation from './TypingAnimation';
import Logo3D from './Logo3D';
import Globe3D from './Globe3D';
import SocialMediaIcons from './SocialMediaIcons';

const HeroSection = () => {
  const typingTexts = [
    "Transforming African Supply Chains",
    "Data-Driven Research Solutions",
    "Strategic Consulting Excellence",
    "Training the Next Generation",
    "Connecting Africa to Global Markets"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-center">
        {/* Left Column - 3D Globe */}
        <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-hacker-magenta rounded-full blur-3xl opacity-20 animate-glow-pulse"></div>
            <Globe3D />
          </div>
        </div>

        {/* Center Column - Text Content */}
        <div className="order-1 lg:order-2 space-y-8 animate-fade-in text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-raleway font-bold text-white">
              <span className="text-cyber-cyan">AISPAR</span>
              <br />
              <span className="text-neon-yellow">AFRICA</span>
            </h1>
            
            <div className="h-20">
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
              Leading the digital transformation of supply chain management across Africa through 
              cutting-edge research, strategic consulting, and innovative training programs.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3 bg-cyber-cyan text-void-black font-semibold rounded-lg hover-skew hover:bg-neon-yellow transition-all duration-300 cyber-glow">
                Explore Solutions
              </button>
              <button className="px-6 py-3 border-2 border-hacker-magenta text-hacker-magenta font-semibold rounded-lg hover-skew hover:bg-hacker-magenta hover:text-void-black transition-all duration-300 magenta-glow">
                View Research
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="pt-4">
              <p className="text-sm text-gray-400 mb-3">Follow us:</p>
              <div className="flex justify-center lg:justify-start">
                <SocialMediaIcons />
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-cyber-cyan/20">
            <div className="text-center">
              <div className="text-xl font-bold text-cyber-cyan">50+</div>
              <div className="text-xs text-gray-400">African Countries</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-neon-yellow">1000+</div>
              <div className="text-xs text-gray-400">Companies Served</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-hacker-magenta">15+</div>
              <div className="text-xs text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Right Column - 3D Logo */}
        <div className="order-3 lg:order-3 flex justify-center lg:justify-end animate-slide-in-right">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-hacker-magenta rounded-full blur-3xl opacity-20 animate-glow-pulse"></div>
            <Logo3D />
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
