
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const phoneNumber = "+25417520202";
  const message = "Hello AISPAR Africa! I'm interested in learning more about your supply chain solutions and consulting services. Could you please provide me with information about your offerings?";
  
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* WhatsApp Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 bg-card border border-cyber-cyan/20 rounded-lg p-4 shadow-xl max-w-sm animate-fade-in">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <h3 className="text-white font-semibold">AISPAR Africa</h3>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Hi there! 👋 How can we help you with your supply chain needs today?
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Start Chat
          </a>
        </div>
      )}
    </>
  );
};

export default WhatsAppFloat;
