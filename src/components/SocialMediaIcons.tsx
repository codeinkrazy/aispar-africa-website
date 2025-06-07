
import React from 'react';
import { Facebook, Twitter } from 'lucide-react';

const SocialMediaIcons = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://web.facebook.com/AISPAR2019',
      icon: Facebook,
      color: 'hover:text-blue-500'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/AISPAR2016/status/799357016456036352',
      icon: Twitter,
      color: 'hover:text-cyan-400'
    }
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full border-2 border-cyber-cyan/30 bg-card/30 hover:border-cyber-cyan transition-all duration-300 cyber-glow hover:scale-110 ${social.color}`}
          >
            <IconComponent size={24} className="text-cyber-cyan" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaIcons;
