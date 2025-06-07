
import React from 'react';
import { FileText, TrendingUp, Award, BookOpen } from 'lucide-react';

const ResearchSection = () => {
  const researchAreas = [
    {
      icon: TrendingUp,
      title: 'Market Intelligence',
      description: 'In-depth analysis of African supply chain markets and emerging trends.',
      count: '150+'
    },
    {
      icon: FileText,
      title: 'Research Publications',
      description: 'Peer-reviewed publications on supply chain innovation in Africa.',
      count: '75+'
    },
    {
      icon: Award,
      title: 'Industry Awards',
      description: 'Recognition for excellence in supply chain research and consulting.',
      count: '25+'
    },
    {
      icon: BookOpen,
      title: 'Case Studies',
      description: 'Documented success stories across various African industries.',
      count: '200+'
    }
  ];

  return (
    <section id="research" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-raleway font-bold text-white mb-6">
            Research & <span className="text-hacker-magenta">Innovation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading research initiatives that shape the future of supply chain management in Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {researchAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={index}
                className="text-center group hover-skew"
              >
                <div className="w-20 h-20 bg-hacker-magenta/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-hacker-magenta/30 transition-colors duration-300 magenta-glow">
                  <IconComponent className="w-10 h-10 text-hacker-magenta" />
                </div>
                <div className="text-3xl font-bold text-hacker-magenta mb-2">
                  {area.count}
                </div>
                <h3 className="text-lg font-raleway font-bold text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-card/30 rounded-xl p-8 border border-hacker-magenta/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-raleway font-bold text-white mb-4">
                Latest Research Initiative
              </h3>
              <h4 className="text-xl text-hacker-magenta mb-4">
                "Digital Supply Chain Transformation in Sub-Saharan Africa"
              </h4>
              <p className="text-gray-300 mb-6">
                A comprehensive 3-year study examining the impact of digital technologies 
                on supply chain efficiency across 15 African countries. This groundbreaking 
                research provides actionable insights for businesses and policymakers.
              </p>
              <button className="px-6 py-3 bg-hacker-magenta text-void-black font-semibold rounded-lg hover-skew hover:bg-neon-yellow transition-all duration-300 magenta-glow">
                Download Report
              </button>
            </div>
            <div className="bg-gradient-to-br from-hacker-magenta/20 to-cyber-cyan/20 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Project Timeline</span>
                  <span className="text-hacker-magenta font-semibold">2021-2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Countries Covered</span>
                  <span className="text-cyber-cyan font-semibold">15 Nations</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Companies Surveyed</span>
                  <span className="text-neon-yellow font-semibold">500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Data Points</span>
                  <span className="text-hacker-magenta font-semibold">10,000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
