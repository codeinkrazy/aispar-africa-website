
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Building, GraduationCap, FlaskConical, Shield } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAudience, setSelectedAudience] = useState('Business');
  const [audienceDropdownOpen, setAudienceDropdownOpen] = useState(false);

  const audiences = [
    { name: 'Business', icon: Building, color: 'text-cyber-cyan' },
    { name: 'Student', icon: GraduationCap, color: 'text-hacker-magenta' },
    { name: 'Researcher', icon: FlaskConical, color: 'text-neon-yellow' },
    { name: 'Government', icon: Shield, color: 'text-cosmic-purple' },
  ];

  const getNavItemsForAudience = (audience: string) => {
    const baseItems = [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
    ];

    switch (audience) {
      case 'Business':
        return [
          ...baseItems,
          { name: 'Solutions', href: '#solutions' },
          { name: 'Case Studies', href: '#case-studies' },
          { name: 'ROI Calculator', href: '#roi-calculator' },
          { name: 'Contact', href: '#contact' },
        ];
      case 'Student':
        return [
          ...baseItems,
          { name: 'Courses', href: '#courses' },
          { name: 'Certifications', href: '#certifications' },
          { name: 'Learning Paths', href: '#learning-paths' },
          { name: 'Contact', href: '#contact' },
        ];
      case 'Researcher':
        return [
          ...baseItems,
          { name: 'Research', href: '#research' },
          { name: 'Data Services', href: '#data-services' },
          { name: 'Partnerships', href: '#partnerships' },
          { name: 'Contact', href: '#contact' },
        ];
      case 'Government':
        return [
          ...baseItems,
          { name: 'Public Solutions', href: '#public-solutions' },
          { name: 'Compliance', href: '#compliance' },
          { name: 'Tenders', href: '#tenders' },
          { name: 'Contact', href: '#contact' },
        ];
      default:
        return baseItems;
    }
  };

  const navItems = getNavItemsForAudience(selectedAudience);
  const currentAudience = audiences.find(a => a.name === selectedAudience);
  const IconComponent = currentAudience?.icon || Building;

  return (
    <nav className="fixed top-0 w-full z-50 bg-card/95 backdrop-blur-md border-b border-cyber-cyan/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/60c5a76c-4e92-411d-9446-f05af861d5bf.png" 
              alt="AISPAR Africa" 
              className="h-10 w-auto cyber-glow rounded-full"
            />
          </div>

          {/* Audience Selector & Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Audience Selector */}
            <div className="relative">
              <button
                onClick={() => setAudienceDropdownOpen(!audienceDropdownOpen)}
                className="flex items-center space-x-2 bg-card/20 border border-cyber-cyan/30 rounded-lg px-4 py-2 text-white hover:bg-card/40 transition-all duration-300"
              >
                <IconComponent size={16} className={currentAudience?.color} />
                <span className="text-sm font-medium">I am a: {selectedAudience}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${audienceDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {audienceDropdownOpen && (
                <div className="absolute top-full mt-2 left-0 bg-card border border-cyber-cyan/30 rounded-lg shadow-lg z-50 min-w-[200px]">
                  {audiences.map((audience) => {
                    const AudienceIcon = audience.icon;
                    return (
                      <button
                        key={audience.name}
                        onClick={() => {
                          setSelectedAudience(audience.name);
                          setAudienceDropdownOpen(false);
                        }}
                        className="flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-cyber-cyan/20 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                      >
                        <AudienceIcon size={16} className={audience.color} />
                        <span className="text-sm font-medium text-white">{audience.name}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Navigation Items */}
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-cyber-cyan hover:text-neon-yellow px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cyber-cyan hover:text-neon-yellow p-2 hover-skew"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg border-t border-cyber-cyan/30">
          <div className="px-4 pt-4 pb-3 space-y-4">
            {/* Mobile Audience Selector */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-gray-300 uppercase tracking-wide">I am a:</span>
              <div className="grid grid-cols-2 gap-2">
                {audiences.map((audience) => {
                  const AudienceIcon = audience.icon;
                  return (
                    <button
                      key={audience.name}
                      onClick={() => {
                        setSelectedAudience(audience.name);
                      }}
                      className={`flex items-center space-x-2 p-3 rounded-lg border transition-all duration-200 ${
                        selectedAudience === audience.name
                          ? 'bg-cyber-cyan/30 border-cyber-cyan'
                          : 'bg-card/50 border-cyber-cyan/20 hover:bg-cyber-cyan/20'
                      }`}
                    >
                      <AudienceIcon size={16} className={audience.color} />
                      <span className="text-sm font-medium text-white">{audience.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Navigation Items */}
            <div className="border-t border-cyber-cyan/30 pt-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-cyber-cyan block px-3 py-2 text-base font-medium transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
