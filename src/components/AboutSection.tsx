
import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To transform African supply chains through innovative research, strategic consulting, and cutting-edge technology solutions.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the leading catalyst for supply chain excellence across Africa, driving economic growth and sustainability.'
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Innovation, integrity, collaboration, and commitment to African development and prosperity.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-cyber-gray/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-raleway font-bold text-white mb-6">
              About <span className="text-neon-yellow">AISPAR</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              AISPAR Africa is a pioneering organization dedicated to revolutionizing supply chain 
              management across the African continent. With over 15 years of experience, we combine 
              deep local knowledge with global best practices to deliver transformative solutions.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Our multidisciplinary team of experts works closely with governments, NGOs, and 
              private sector organizations to build resilient, efficient, and sustainable supply 
              chains that drive economic growth and improve livelihoods across Africa.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-neon-yellow text-void-black font-semibold rounded-lg hover-skew hover:bg-cyber-cyan transition-all duration-300 yellow-glow">
                Our Story
              </button>
              <button className="px-6 py-3 border-2 border-neon-yellow text-neon-yellow font-semibold rounded-lg hover-skew hover:bg-neon-yellow hover:text-void-black transition-all duration-300">
                Meet the Team
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-yellow/20 to-cyber-cyan/20 rounded-full blur-3xl"></div>
            <div className="relative bg-card/30 rounded-xl p-8 border border-neon-yellow/20">
              <h3 className="text-2xl font-raleway font-bold text-white mb-6">Key Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-yellow/20 rounded-lg flex items-center justify-center">
                    <span className="text-neon-yellow font-bold">15+</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Years of Excellence</h4>
                    <p className="text-gray-400 text-sm">Serving African markets</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyber-cyan/20 rounded-lg flex items-center justify-center">
                    <span className="text-cyber-cyan font-bold">50+</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Countries Reached</h4>
                    <p className="text-gray-400 text-sm">Across the continent</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-hacker-magenta/20 rounded-lg flex items-center justify-center">
                    <span className="text-hacker-magenta font-bold">$2B+</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Value Created</h4>
                    <p className="text-gray-400 text-sm">Through optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-neon-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-neon-yellow/30 transition-colors duration-300 yellow-glow">
                  <IconComponent className="w-10 h-10 text-neon-yellow" />
                </div>
                <h3 className="text-xl font-raleway font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
