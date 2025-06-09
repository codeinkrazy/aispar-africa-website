
import React from 'react';
import TypingAnimation from './TypingAnimation';
import StackedImages from './StackedImages';
import ErrorBoundary from './ErrorBoundary';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  const typingTexts = [
    "Africa's Premier Supply Chain Innovation Hub",
    "Transforming Continental Trade Networks Through Research",
    "Leading Strategic Consultation Across 54 Nations", 
    "Building Resilient Supply Chains for African Growth",
    "Pioneering Logistics Excellence from Cape to Cairo",
    "Empowering African Businesses Through Data-Driven Solutions"
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 px-4 relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content with sliding animations */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Company Logo */}
            <div className="flex justify-center lg:justify-start mb-8 animate-slide-in-top">
              <img 
                src="/lovable-uploads/60c5a76c-4e92-411d-9446-f05af861d5bf.png" 
                alt="AISPAR Africa" 
                className="h-24 w-auto cyber-glow rounded-full shadow-2xl ring-4 ring-cyber-cyan/30 animate-float-gentle"
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-raleway font-bold text-white relative z-20 animate-slide-in-left">
                <span className="text-cyber-cyan glow-text">AISPAR</span>
                <br />
                <span className="text-neon-yellow glow-text">AFRICA</span>
              </h1>
              
              <div className="h-24 relative z-20 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/10 to-transparent rounded-lg shimmer-effect"></div>
                <p className="text-lg lg:text-xl font-montserrat text-gray-300 relative z-10 p-2">
                  <TypingAnimation 
                    texts={typingTexts}
                    speed={80}
                    deleteSpeed={40}
                    pauseDuration={2500}
                  />
                </p>
              </div>
            </div>

            <div className="space-y-6 relative z-20 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed backdrop-blur-sm bg-void-black/20 p-4 rounded-lg border border-cyber-cyan/10 award-card">
                Africa's premier institute for supply chain excellence, delivering world-class training, 
                cutting-edge research, and strategic consultation services across the continent.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-in-bottom" style={{ animationDelay: '0.9s' }}>
                <button className="px-8 py-4 bg-gradient-to-r from-cyber-cyan to-neon-yellow text-void-black font-semibold rounded-lg hover-skew premium-hover transition-all duration-300 cyber-glow shadow-lg gpu-accelerated">
                  Explore Solutions
                </button>
                <button className="px-8 py-4 border-2 border-hacker-magenta text-hacker-magenta font-semibold rounded-lg hover-skew premium-hover hover:bg-hacker-magenta hover:text-void-black transition-all duration-300 magenta-glow backdrop-blur-sm gpu-accelerated">
                  Download Report
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Stacked Images with enhanced animation */}
          <div className="flex justify-center lg:justify-end relative z-20 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="relative award-card">
              <ErrorBoundary>
                <StackedImages />
              </ErrorBoundary>
            </div>
          </div>
        </div>

        {/* Bottom Counters - Enhanced with animations */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-cyber-cyan/20 backdrop-blur-sm bg-void-black/20 rounded-lg p-6 relative z-20 award-card animate-slide-in-bottom" style={{ animationDelay: '1.2s' }}>
          <div className="text-center group premium-hover transition-transform duration-300">
            <div className="text-3xl lg:text-4xl font-bold text-cyber-cyan glow-text group-hover:animate-pulse-glow">54</div>
            <div className="text-sm text-gray-400 font-medium">African Countries</div>
          </div>
          <div className="text-center group premium-hover transition-transform duration-300">
            <div className="text-3xl lg:text-4xl font-bold text-neon-yellow glow-text group-hover:animate-pulse-glow">285</div>
            <div className="text-sm text-gray-400 font-medium">Companies Served</div>
          </div>
          <div className="text-center group premium-hover transition-transform duration-300">
            <div className="text-3xl lg:text-4xl font-bold text-hacker-magenta glow-text group-hover:animate-pulse-glow">15+</div>
            <div className="text-sm text-gray-400 font-medium">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-cyan rounded-full flex justify-center animate-glow-pulse premium-hover cursor-pointer">
          <div className="w-1 h-3 bg-cyber-cyan rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
