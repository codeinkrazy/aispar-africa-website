
import React from 'react';
import TypingAnimation from './TypingAnimation';
import Logo3D from './Logo3D';

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
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-raleway font-bold text-white">
              <span className="text-cyber-cyan">AISPAR</span>
              <br />
              <span className="text-neon-yellow">AFRICA</span>
            </h1>
            
            <div className="h-20">
              <p className="text-xl lg:text-2xl font-montserrat text-gray-300">
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
            <p className="text-lg text-gray-400 leading-relaxed">
              Leading the digital transformation of supply chain management across Africa through 
              cutting-edge research, strategic consulting, and innovative training programs.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-cyber-cyan text-void-black font-semibold rounded-lg hover-skew hover:bg-neon-yellow transition-all duration-300 cyber-glow">
                Explore Solutions
              </button>
              <button className="px-8 py-4 border-2 border-hacker-magenta text-hacker-magenta font-semibold rounded-lg hover-skew hover:bg-hacker-magenta hover:text-void-black transition-all duration-300 magenta-glow">
                View Research
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-cyber-cyan/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyber-cyan">50+</div>
              <div className="text-sm text-gray-400">African Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-yellow">1000+</div>
              <div className="text-sm text-gray-400">Companies Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-hacker-magenta">15+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Right Column - 3D Logo */}
        <div className="flex justify-center lg:justify-end animate-slide-in-right">
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
