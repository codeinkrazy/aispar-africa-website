
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

  return (
    <section id="solutions" className="py-20 bg-cyber-dark/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-raleway font-bold text-white mb-6">
            Our <span className="text-cyber-cyan">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive supply chain solutions tailored for the African market, 
            driving efficiency and growth across the continent.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={index}
                className="bg-card/30 rounded-xl p-8 border border-cyber-cyan/20 hover:border-cyber-cyan/60 transition-all duration-300 hover:cyber-glow group"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-cyber-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-cyber-cyan/30 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-cyber-cyan" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-raleway font-bold text-white mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {solution.description}
                    </p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                          <div className="w-2 h-2 bg-neon-yellow rounded-full mr-3"></div>
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
      </div>
    </section>
  );
};

export default SolutionsSection;
