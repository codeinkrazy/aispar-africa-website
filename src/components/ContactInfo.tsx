
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-2xl font-raleway font-bold text-white mb-8">
        Contact Information
      </h3>
      
      <div className="space-y-6 mb-8">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-cyber-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-cyber-cyan" />
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Email</h4>
            <p className="text-gray-300">info@aispar.africa</p>
            <p className="text-gray-300">oloocm@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-hacker-magenta/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-hacker-magenta" />
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Phone</h4>
            <p className="text-gray-300">+254 716 520 202</p>
            <p className="text-gray-300">+254 733 763 427</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-neon-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-neon-yellow" />
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Address</h4>
            <p className="text-gray-300">Nairobi, Kenya</p>
            <p className="text-gray-300">East Africa Regional Office</p>
          </div>
        </div>
      </div>

      <div className="bg-card/30 rounded-xl p-6 border border-cyber-cyan/20 backdrop-blur-sm">
        <h4 className="text-white font-semibold mb-4">Office Hours</h4>
        <div className="space-y-2 text-gray-300">
          <div className="flex justify-between">
            <span>Monday - Friday</span>
            <span>8:00 AM - 6:00 PM EAT</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday</span>
            <span>9:00 AM - 2:00 PM EAT</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday</span>
            <span>Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
