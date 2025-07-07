
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
    <section id="research" className="py-20 bg-titan-mist">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-raleway font-bold text-glacial-pearl mb-6">
            Research & <span className="text-plasma-orchid">Innovation</span>
          </h2>
          <p className="text-xl text-chrome-ice max-w-3xl mx-auto">
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
                <div className="w-20 h-20 bg-plasma-orchid/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-plasma-orchid/30 transition-colors duration-300">
                  <IconComponent className="w-10 h-10 text-plasma-orchid" />
                </div>
                <div className="text-3xl font-bold text-plasma-orchid mb-2">
                  {area.count}
                </div>
                <h3 className="text-lg font-raleway font-bold text-glacial-pearl mb-2">
                  {area.title}
                </h3>
                <p className="text-chrome-ice text-sm">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-glacial-pearl/10 rounded-xl p-8 border border-chrome-ice/30">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-raleway font-bold text-glacial-pearl mb-4">
                Latest Research Initiative
              </h3>
              <h4 className="text-xl text-plasma-orchid mb-4">
                "Digital Supply Chain Transformation in Sub-Saharan Africa"
              </h4>
              <p className="text-chrome-ice mb-6">
                A comprehensive 3-year study examining the impact of digital technologies 
                on supply chain efficiency across 15 African countries. This groundbreaking 
                research provides actionable insights for businesses and policymakers.
              </p>
              <a 
                href="https://drive.google.com/uc?export=download&id=1ZL10n6XZr0Z1HQGeX6M6u5fEyDMhWWnD"
                className="inline-block px-6 py-3 bg-glass-lilac text-titan-mist font-semibold rounded-lg hover:bg-plasma-orchid hover:text-glacial-pearl transition-all duration-300 shadow-lg"
                download="AISPAR_Digital_Supply_Chain_Report.pdf"
              >
                Download Report
              </a>
            </div>
            <div className="bg-gradient-to-br from-plasma-orchid/20 to-cyber-aqua/20 rounded-lg p-6 border border-chrome-ice/30">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-chrome-ice">Project Timeline</span>
                  <span className="text-plasma-orchid font-semibold">2021-2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-chrome-ice">Countries Covered</span>
                  <span className="text-cyber-aqua font-semibold">15 Nations</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-chrome-ice">Companies Surveyed</span>
                  <span className="text-photon-gold font-semibold">500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-chrome-ice">Data Points</span>
                  <span className="text-plasma-orchid font-semibold">10,000+</span>
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
