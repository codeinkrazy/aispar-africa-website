
import React, { useState } from 'react';

const StackedImages = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    {
      src: "/lovable-uploads/d5347ea9-fc86-4b0e-a239-37630b452308.png",
      alt: "Modern Warehouse Operations",
      title: "Supply Chain Excellence",
      description: "Advanced warehouse management and logistics operations"
    },
    {
      src: "/lovable-uploads/79cc2dfd-0d75-4e69-af8d-467d1ddd69db.png", 
      alt: "Business Strategy Meeting",
      title: "Strategic Consultation",
      description: "Executive training and business strategy development"
    },
    {
      src: "/lovable-uploads/f2502c87-28ba-416b-b27c-856690511893.png",
      alt: "African Market Trader",
      title: "Continental Trade Networks",
      description: "Empowering local markets across Africa"
    }
  ];

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      <div className="relative w-80 h-80">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-500 ease-in-out cursor-pointer rounded-xl overflow-hidden shadow-2xl ${
              hoveredIndex === null 
                ? `w-64 h-48 ${index === 0 ? 'top-0 left-0 z-30' : index === 1 ? 'top-8 left-8 z-20' : 'top-16 left-16 z-10'}`
                : hoveredIndex === index
                ? 'w-80 h-64 top-0 left-0 z-40 cyber-glow'
                : 'w-48 h-36 opacity-60 scale-90'
            }`}
            style={{
              transform: hoveredIndex === index 
                ? 'translate(0, 0) scale(1.05)' 
                : hoveredIndex !== null && hoveredIndex !== index
                ? `translate(${(index - hoveredIndex) * 60}px, ${(index - hoveredIndex) * 40}px)`
                : undefined
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative w-full h-full group">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-void-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold text-cyber-cyan mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-300">{image.description}</p>
                </div>
              </div>

              {/* Glowing border on hover */}
              <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                hoveredIndex === index ? 'ring-2 ring-cyber-cyan ring-opacity-60 shadow-cyan-500/50' : ''
              }`} />
            </div>
          </div>
        ))}
      </div>

      {/* Floating labels when not hovered */}
      {hoveredIndex === null && (
        <div className="absolute top-4 right-4 text-right space-y-2">
          <div className="text-xs text-cosmic-gold font-medium opacity-80">Supply Chain Operations</div>
          <div className="text-xs text-cosmic-purple font-medium opacity-60">Strategic Consultation</div>
          <div className="text-xs text-cyber-cyan font-medium opacity-40">African Trade Networks</div>
        </div>
      )}

      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/10 via-hacker-magenta/10 to-neon-yellow/10 rounded-2xl blur-3xl opacity-50 animate-cosmic-pulse -z-10"></div>
    </div>
  );
};

export default StackedImages;
