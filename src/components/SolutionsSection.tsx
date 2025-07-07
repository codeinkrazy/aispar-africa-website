
import React from 'react';
import { Truck, BarChart3, Users, Globe } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Truck,
      title: 'Supply Chain Optimization',
      description: 'End-to-end supply chain solutions designed for African markets, reducing costs and improving efficiency.',
      features: ['Logistics Management', 'Inventory Optimization', 'Route Planning']
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & Research',
      description: 'Advanced data analytics and market research to drive informed decision-making across Africa.',
      features: ['Market Analysis', 'Predictive Analytics', 'Custom Reports']
    },
    {
      icon: Users,
      title: 'Training & Consulting',
      description: 'Professional development and strategic consulting services for supply chain excellence.',
      features: ['Executive Training', 'Strategic Consulting', 'Process Improvement']
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'Modernizing African businesses through digital supply chain technologies and automation.',
      features: ['System Integration', 'Process Automation', 'Digital Strategy']
    }
  ];

  const handleExploreCourses = () => {
    // Redirect to offered courses section
    const coursesSection = document.getElementById('research');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="py-20 bg-glacial-pearl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-raleway font-bold text-titan-mist mb-6">
            Our <span className="text-cyber-aqua">Solutions</span>
          </h2>
          <p className="text-xl text-atmos-silver max-w-3xl mx-auto">
            Comprehensive supply chain solutions tailored for the African market, 
            driving efficiency and growth across the continent.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={index}
                className="bg-white/80 rounded-xl p-8 border border-chrome-ice hover:border-cyber-aqua/60 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-ion-blue/30 rounded-lg flex items-center justify-center group-hover:bg-cyber-aqua/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-cyber-aqua" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-raleway font-bold text-titan-mist mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-atmos-silver mb-4">
                      {solution.description}
                    </p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-atmos-silver flex items-center">
                          <div className="w-2 h-2 bg-photon-gold rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={handleExploreCourses}
            className="inline-block px-8 py-4 bg-glass-lilac text-titan-mist font-semibold rounded-lg hover:bg-plasma-orchid hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Our Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
