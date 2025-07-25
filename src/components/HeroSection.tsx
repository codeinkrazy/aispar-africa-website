
import React from 'react';
import TypingAnimation from './TypingAnimation';
import ErrorBoundary from './ErrorBoundary';
import ParticleBackground from './ParticleBackground';
import { Building, GraduationCap, FlaskConical, Shield, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const animatedTagline = "Reimagining Africa's Supply Chain Future";
  
  const quadrantCTAs = [
    {
      title: "Business Solutions",
      subtitle: "Supply Chain Optimization",
      icon: Building,
      color: "cyber-aqua",
      href: "#solutions",
      gradient: "from-cyber-aqua/20 to-cyber-aqua/5"
    },
    {
      title: "Courses",
      subtitle: "Training & Certifications", 
      icon: GraduationCap,
      color: "plasma-orchid",
      href: "#courses",
      gradient: "from-plasma-orchid/20 to-plasma-orchid/5"
    },
    {
      title: "Research",
      subtitle: "Data & Whitepapers",
      icon: FlaskConical,
      color: "photon-gold",
      href: "#research",
      gradient: "from-photon-gold/20 to-photon-gold/5"
    },
    {
      title: "Government",
      subtitle: "Public Sector Solutions",
      icon: Shield,
      color: "glass-lilac",
      href: "#government",
      gradient: "from-glass-lilac/20 to-glass-lilac/5"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 px-4 relative overflow-hidden bg-gradient-to-br from-cyber-dark to-space-navy">
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
                <span className="text-cyber-cyan">AISPAR</span>
                <br />
                <span className="text-hacker-magenta">AFRICA</span>
              </h1>
              
              <div className="h-16 relative z-20 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-aqua/10 to-transparent rounded-lg"></div>
                <h2 className="text-xl lg:text-2xl font-montserrat text-gray-300 relative z-10 p-2 animate-pulse italic">
                  {animatedTagline}
                </h2>
              </div>
            </div>

            <div className="space-y-6 relative z-20 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed backdrop-blur-sm bg-card/40 p-4 rounded-lg border border-cyber-cyan/20 shadow-lg">
                Africa's premier institute for supply chain excellence, delivering world-class training, 
                cutting-edge research, and strategic consultation services across the continent.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-in-bottom" style={{ animationDelay: '0.9s' }}>
                <button className="px-8 py-4 bg-cyber-cyan text-cyber-dark font-semibold rounded-lg hover:bg-cyber-cyan/90 hover:scale-105 transition-all duration-300 shadow-lg cyber-glow">
                  Explore Solutions
                </button>
                <button className="px-8 py-4 border-2 border-cyber-cyan text-cyber-cyan font-semibold rounded-lg hover:bg-cyber-cyan hover:text-cyber-dark transition-all duration-300 backdrop-blur-sm">
                  Download Report
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Quadrant CTAs */}
          <div className="relative z-20 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-2 gap-4">
              {quadrantCTAs.map((cta, index) => {
                const IconComponent = cta.icon;
                return (
                  <a
                    key={cta.title}
                    href={cta.href}
                    className="relative p-6 bg-card/20 border border-cyber-cyan/30 rounded-xl hover:scale-105 transition-all duration-300 group hover:border-cyber-cyan hover:bg-card/40"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center space-y-3 text-center">
                      <div className="p-3 rounded-lg bg-cyber-cyan/20 group-hover:bg-cyber-cyan/30 transition-colors duration-300">
                        <IconComponent size={24} className="text-cyber-cyan" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-cyber-cyan transition-colors duration-300">
                          {cta.title}
                        </h3>
                        <p className="text-sm text-gray-300 mt-1">
                          {cta.subtitle}
                        </p>
                      </div>
                      <ArrowRight size={16} className="text-cyber-cyan opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Counters - Enhanced with animations */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-cyber-cyan/30 backdrop-blur-sm bg-card/30 rounded-lg p-6 relative z-20 shadow-lg animate-slide-in-bottom" style={{ animationDelay: '1.2s' }}>
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl lg:text-4xl font-bold text-cyber-cyan">54</div>
            <div className="text-sm text-gray-300 font-medium">African Countries</div>
          </div>
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl lg:text-4xl font-bold text-hacker-magenta">285</div>
            <div className="text-sm text-gray-300 font-medium">Companies Served</div>
          </div>
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl lg:text-4xl font-bold text-neon-yellow">15+</div>
            <div className="text-sm text-gray-300 font-medium">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-cyan rounded-full flex justify-center hover:border-hacker-magenta cursor-pointer transition-colors duration-300">
          <div className="w-1 h-3 bg-cyber-cyan rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
