
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
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 px-4 relative overflow-hidden bg-gradient-to-br from-glacial-pearl to-ion-blue/30">
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
              <h1 className="text-4xl lg:text-6xl font-raleway font-bold text-titan-mist relative z-20 animate-slide-in-left">
                <span className="text-cyber-aqua">AISPAR</span>
                <br />
                <span className="text-photon-gold">AFRICA</span>
              </h1>
              
              <div className="h-16 relative z-20 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-aqua/10 to-transparent rounded-lg"></div>
                <h2 className="text-xl lg:text-2xl font-montserrat text-atmos-silver relative z-10 p-2 animate-pulse italic">
                  {animatedTagline}
                </h2>
              </div>
            </div>

            <div className="space-y-6 relative z-20 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
              <p className="text-base lg:text-lg text-atmos-silver leading-relaxed backdrop-blur-sm bg-glacial-pearl/40 p-4 rounded-lg border border-chrome-ice/50 shadow-lg">
                Africa's premier institute for supply chain excellence, delivering world-class training, 
                cutting-edge research, and strategic consultation services across the continent.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-in-bottom" style={{ animationDelay: '0.9s' }}>
                <button className="px-8 py-4 bg-glass-lilac text-titan-mist font-semibold rounded-lg hover:bg-plasma-orchid hover:scale-105 transition-all duration-300 shadow-lg">
                  Explore Solutions
                </button>
                <button className="px-8 py-4 border-2 border-ion-blue text-cyber-aqua font-semibold rounded-lg hover:bg-ion-blue hover:text-titan-mist transition-all duration-300 backdrop-blur-sm">
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
                    className="relative p-6 bg-glacial-pearl/20 border border-chrome-ice/50 rounded-xl hover:scale-105 transition-all duration-300 group hover:border-cyber-aqua/50 hover:bg-glacial-pearl/40"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center space-y-3 text-center">
                      <div className="p-3 rounded-lg bg-ion-blue/20 group-hover:bg-cyber-aqua/20 transition-colors duration-300">
                        <IconComponent size={24} className="text-cyber-aqua" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-titan-mist group-hover:text-cyber-aqua transition-colors duration-300">
                          {cta.title}
                        </h3>
                        <p className="text-sm text-atmos-silver mt-1">
                          {cta.subtitle}
                        </p>
                      </div>
                      <ArrowRight size={16} className="text-cyber-aqua opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Counters - Enhanced with animations */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-chrome-ice/50 backdrop-blur-sm bg-glacial-pearl/30 rounded-lg p-6 relative z-20 shadow-lg animate-slide-in-bottom" style={{ animationDelay: '1.2s' }}>
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl lg:text-4xl font-bold text-cyber-aqua">54</div>
            <div className="text-sm text-atmos-silver font-medium">African Countries</div>
          </div>
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl lg:text-4xl font-bold text-photon-gold">285</div>
            <div className="text-sm text-atmos-silver font-medium">Companies Served</div>
          </div>
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl lg:text-4xl font-bold text-plasma-orchid">15+</div>
            <div className="text-sm text-atmos-silver font-medium">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-aqua rounded-full flex justify-center hover:border-plasma-orchid cursor-pointer transition-colors duration-300">
          <div className="w-1 h-3 bg-cyber-aqua rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
