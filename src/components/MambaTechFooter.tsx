
import React from 'react';
import { ArrowDown } from 'lucide-react';

const MambaTechFooter = () => {
  const phoneNumber = "+254728799004";
  const message = "Hello MambaTech Solutions! I'm interested in getting a website similar to AISPAR Africa. Could you please provide me with information about your web development and software services?";
  
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-void-black border-t border-cyber-cyan/20 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-gray-400 text-lg">
            Need a similar website?{' '}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-cyan hover:text-neon-yellow transition-colors duration-300 underline"
            >
              Contact us
            </a>
          </p>
          
          <div className="flex items-center justify-center space-x-2">
            <ArrowDown className="w-4 h-4 text-cyber-cyan animate-bounce" />
            <p className="text-sm text-gray-500">Powered by</p>
          </div>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-serif text-xl text-hacker-magenta hover:text-neon-yellow transition-colors duration-300 hover:scale-105 transform"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            MambaTech Solutions Ltd
          </a>
        </div>
      </div>
    </div>
  );
};

export default MambaTechFooter;
