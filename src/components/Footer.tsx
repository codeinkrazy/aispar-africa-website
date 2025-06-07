
import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Company': [
      'About Us',
      'Our Team',
      'Careers',
      'News & Updates'
    ],
    'Services': [
      'Supply Chain Optimization',
      'Research & Analytics',
      'Training Programs',
      'Consulting'
    ],
    'Resources': [
      'Case Studies',
      'White Papers',
      'Industry Reports',
      'Blog'
    ],
    'Support': [
      'Contact Us',
      'Help Center',
      'Privacy Policy',
      'Terms of Service'
    ]
  };

  return (
    <footer className="bg-void-black border-t border-cyber-cyan/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/60c5a76c-4e92-411d-9446-f05af861d5bf.png" 
                alt="AISPAR Africa" 
                className="h-12 w-auto cyber-glow rounded-full mr-4"
              />
              <h3 className="text-2xl font-raleway font-bold text-white">
                AISPAR <span className="text-cyber-cyan">AFRICA</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming African supply chains through innovative research, strategic consulting, 
              and cutting-edge technology solutions.
            </p>
            <SocialMediaIcons />
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-raleway font-bold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-cyber-cyan transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyber-cyan/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} AISPAR Africa. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
