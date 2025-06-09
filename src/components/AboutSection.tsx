
import React from 'react';
import { Trophy, Users, Globe, Lightbulb, Target, Award, Zap, BookOpen } from 'lucide-react';
import ErrorBoundary from './ErrorBoundary';

const AboutSection = () => {
  const achievements = [
    {
      icon: <Globe className="w-8 h-8 text-cyber-cyan" />,
      title: "Pan-African Presence",
      description: "Operating across all 54 African countries with regional offices in key economic hubs.",
      metric: "54 Countries"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-neon-yellow" />,
      title: "Research Excellence",
      description: "Over 85 published research papers influencing supply chain policies across the continent.",
      metric: "85+ Papers"
    },
    {
      icon: <Trophy className="w-8 h-8 text-hacker-magenta" />,
      title: "Industry Leadership",
      description: "Leading the development of African supply chain standards and best practices.",
      metric: "#1 Institute"
    },
    {
      icon: <Users className="w-8 h-8 text-cosmic-purple" />,
      title: "Global Partnerships",
      description: "Strategic alliances with international organizations and development agencies.",
      metric: "50+ Partners"
    }
  ];

  const services = [
    {
      icon: "🎓",
      title: "Training Programs",
      description: "Comprehensive supply chain education from certificate to PhD level programs.",
      highlight: "World-Class Education"
    },
    {
      icon: "🔬",
      title: "Research & Development",
      description: "Cutting-edge research in African supply chain dynamics and innovations.",
      highlight: "Innovation Hub"
    },
    {
      icon: "💼",
      title: "Strategic Consulting",
      description: "Expert consultation for businesses entering or expanding in African markets.",
      highlight: "Market Expertise"
    },
    {
      icon: "🌍",
      title: "Policy Advisory",
      description: "Advisory services to governments on trade and supply chain policies.",
      highlight: "Policy Leadership"
    }
  ];

  const impactStats = [
    { number: "285+", label: "Companies Transformed", icon: <Target className="w-6 h-6" /> },
    { number: "$2.3B", label: "Supply Chain Value Created", icon: <Zap className="w-6 h-6" /> },
    { number: "15K+", label: "Professionals Trained", icon: <Users className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction Rate", icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyber-cyan rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-hacker-magenta rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon-yellow rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header with slide-in animation */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-raleway font-bold text-white mb-6 animate-slide-in-right">
            About <span className="text-cyber-cyan glow-text">AISPAR Africa</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            The African Institute for Supply Chain Advancement and Research (AISPAR) is the continent's 
            premier institution dedicated to transforming supply chain management through education, 
            research, and strategic consultation.
          </p>
        </div>

        {/* Mission & Vision with enhanced animations */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-card/40 to-cyber-cyan/10 rounded-xl p-8 border border-cyber-cyan/30 hover:border-cyber-cyan/60 transition-all duration-500 cyber-glow hover:cyber-glow animate-fade-in backdrop-blur-sm" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-cyber-cyan mr-3" />
              <h3 className="text-2xl font-raleway font-bold text-cyber-cyan">Our Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To advance supply chain excellence across Africa through world-class education, 
              innovative research, and strategic partnerships that drive economic growth and 
              sustainable development throughout the continent.
            </p>
          </div>
          <div className="bg-gradient-to-br from-card/40 to-hacker-magenta/10 rounded-xl p-8 border border-hacker-magenta/30 hover:border-hacker-magenta/60 transition-all duration-500 magenta-glow hover:magenta-glow animate-fade-in backdrop-blur-sm" style={{ animationDelay: '0.7s' }}>
            <div className="flex items-center mb-4">
              <Lightbulb className="w-8 h-8 text-hacker-magenta mr-3" />
              <h3 className="text-2xl font-raleway font-bold text-hacker-magenta">Our Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To be the leading catalyst for supply chain transformation in Africa, creating 
              a connected, efficient, and resilient trade ecosystem that positions the continent 
              as a global economic powerhouse.
            </p>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <h3 className="text-3xl font-raleway font-bold text-white text-center mb-12">
            Our <span className="text-neon-yellow glow-text">Impact</span>
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-t from-card/30 to-transparent rounded-xl border border-cyber-cyan/20 hover:border-cyber-cyan/50 transition-all duration-300 hover:scale-105 group">
                <div className="text-cyber-cyan mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white glow-text mb-2 group-hover:text-cyber-cyan transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Services with enhanced animations */}
        <div className="mb-20 animate-fade-in" style={{ animationDelay: '1.1s' }}>
          <h3 className="text-3xl font-raleway font-bold text-white text-center mb-12">
            Our <span className="text-neon-yellow glow-text">Services</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-hacker-magenta rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative text-center p-6 bg-gradient-to-b from-card/30 to-card/10 rounded-xl border border-cyber-cyan/20 hover:border-cyber-cyan/60 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <div className="text-xs text-cyber-cyan font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.highlight}
                  </div>
                  <h4 className="text-xl font-raleway font-bold text-white mb-3 group-hover:text-cyber-cyan transition-colors duration-300">{service.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Key Achievements with Dynamic Cards */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '1.3s' }}>
          <h3 className="text-3xl font-raleway font-bold text-white text-center mb-12">
            Key <span className="text-cyber-cyan glow-text">Achievements</span>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/20 to-hacker-magenta/20 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-card/40 to-transparent rounded-xl p-8 border border-cyber-cyan/30 hover:border-cyber-cyan/80 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyber-cyan/20 to-hacker-magenta/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-raleway font-bold text-white group-hover:text-cyber-cyan transition-colors duration-300">
                          {achievement.title}
                        </h4>
                        <span className="text-sm font-bold text-neon-yellow bg-neon-yellow/10 px-3 py-1 rounded-full border border-neon-yellow/30">
                          {achievement.metric}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center bg-gradient-to-r from-cyber-cyan/20 via-hacker-magenta/20 to-neon-yellow/20 rounded-2xl p-12 border border-cyber-cyan/30 cosmic-glow animate-fade-in backdrop-blur-sm" style={{ animationDelay: '1.5s' }}>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyber-cyan to-hacker-magenta rounded-full flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-3xl font-raleway font-bold text-white mb-6 glow-text">
            Ready to Transform Your Supply Chain?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of organizations across Africa who trust AISPAR for their 
            supply chain excellence journey. Experience the future of African trade.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyber-cyan to-neon-yellow text-void-black font-semibold rounded-lg hover-skew hover:scale-110 transition-all duration-300 cyber-glow shadow-lg">
              Start Your Journey
            </button>
            <button className="px-8 py-4 border-2 border-hacker-magenta text-hacker-magenta font-semibold rounded-lg hover-skew hover:bg-hacker-magenta hover:text-void-black transition-all duration-300 magenta-glow backdrop-blur-sm">
              Explore Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
