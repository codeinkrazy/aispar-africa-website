
import React from 'react';
import Handshake3D from './Handshake3D';
import ErrorBoundary from './ErrorBoundary';

const AboutSection = () => {
  const achievements = [
    {
      title: "Pan-African Presence",
      description: "Operating across all 54 African countries with regional offices in key economic hubs."
    },
    {
      title: "Research Excellence",
      description: "Over 85 published research papers influencing supply chain policies across the continent."
    },
    {
      title: "Industry Leadership",
      description: "Leading the development of African supply chain standards and best practices."
    },
    {
      title: "Global Partnerships",
      description: "Strategic alliances with international organizations and development agencies."
    }
  ];

  const services = [
    {
      icon: "🎓",
      title: "Training Programs",
      description: "Comprehensive supply chain education from certificate to PhD level programs."
    },
    {
      icon: "🔬",
      title: "Research & Development",
      description: "Cutting-edge research in African supply chain dynamics and innovations."
    },
    {
      icon: "💼",
      title: "Strategic Consulting",
      description: "Expert consultation for businesses entering or expanding in African markets."
    },
    {
      icon: "🌍",
      title: "Policy Advisory",
      description: "Advisory services to governments on trade and supply chain policies."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-raleway font-bold text-white mb-6">
            About <span className="text-cyber-cyan">AISPAR Africa</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            The African Institute for Supply Chain Advancement and Research (AISPAR) is the continent's 
            premier institution dedicated to transforming supply chain management through education, 
            research, and strategic consultation.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-card/30 rounded-xl p-8 border border-cyber-cyan/20 hover:border-cyber-cyan/60 transition-all duration-300">
            <h3 className="text-2xl font-raleway font-bold text-cyber-cyan mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To advance supply chain excellence across Africa through world-class education, 
              innovative research, and strategic partnerships that drive economic growth and 
              sustainable development throughout the continent.
            </p>
          </div>
          <div className="bg-card/30 rounded-xl p-8 border border-hacker-magenta/20 hover:border-hacker-magenta/60 transition-all duration-300">
            <h3 className="text-2xl font-raleway font-bold text-hacker-magenta mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be the leading catalyst for supply chain transformation in Africa, creating 
              a connected, efficient, and resilient trade ecosystem that positions the continent 
              as a global economic powerhouse.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-raleway font-bold text-white text-center mb-12">
            Our <span className="text-neon-yellow">Services</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-card/20 rounded-xl border border-cyber-cyan/10 hover:border-cyber-cyan/40 transition-all duration-300 hover:cyber-glow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-raleway font-bold text-white mb-3">{service.title}</h4>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements with 3D Handshake */}
        <div className="mb-16">
          <h3 className="text-3xl font-raleway font-bold text-white text-center mb-12">
            Key <span className="text-cyber-cyan">Achievements</span>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Achievements List */}
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-card/30 rounded-lg p-6 border border-cyber-cyan/20 hover:border-cyber-cyan/60 transition-all duration-300">
                  <h4 className="text-xl font-raleway font-bold text-cyber-cyan mb-3">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              ))}
            </div>

            {/* 3D Handshake */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-hacker-magenta rounded-xl blur-2xl opacity-20"></div>
                <ErrorBoundary>
                  <Handshake3D />
                </ErrorBoundary>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-cyber-cyan/10 to-hacker-magenta/10 rounded-2xl p-12 border border-cyber-cyan/20">
          <h3 className="text-3xl font-raleway font-bold text-white mb-6">
            Ready to Transform Your Supply Chain?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations across Africa who trust AISPAR for their 
            supply chain excellence journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-cyber-cyan text-void-black font-semibold rounded-lg hover-skew hover:bg-neon-yellow transition-all duration-300 cyber-glow">
              Start Your Journey
            </button>
            <button className="px-8 py-4 border-2 border-hacker-magenta text-hacker-magenta font-semibold rounded-lg hover-skew hover:bg-hacker-magenta hover:text-void-black transition-all duration-300 magenta-glow">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
