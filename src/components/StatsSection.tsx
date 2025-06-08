
import React, { useState, useEffect, useRef } from 'react';

interface StatItemProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  generateRandom?: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ 
  label, 
  value, 
  suffix = '', 
  prefix = '', 
  generateRandom = false 
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [randomValue, setRandomValue] = useState(value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (generateRandom && isHovered) {
      const randomVariation = Math.floor(Math.random() * (value * 0.3)) + value;
      setRandomValue(randomVariation);
    } else {
      setRandomValue(value);
    }
  }, [isHovered, value, generateRandom]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const targetValue = generateRandom && isHovered ? randomValue : value;
      const increment = targetValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          setDisplayValue(targetValue);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value, randomValue, generateRandom, isHovered]);

  return (
    <div 
      ref={ref} 
      className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm glow-border hover:cyber-glow transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-4xl font-bold text-cyber-cyan mb-2">
        {prefix}{displayValue.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-400 font-medium">{label}</div>
      {generateRandom && (
        <div className="text-xs text-neon-yellow mt-1">
          {isHovered ? 'Live Data' : 'Hover for updates'}
        </div>
      )}
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { label: 'African Countries Served', value: 54, suffix: '', generateRandom: false },
    { label: 'Supply Chain Projects', value: 285, suffix: '', generateRandom: true },
    { label: 'Research Publications', value: 85, suffix: '', generateRandom: true },
    { label: 'Training Programs Delivered', value: 450, suffix: '+', generateRandom: true },
    { label: 'Corporate Partners', value: 180, suffix: '+', generateRandom: true },
    { label: 'Economic Impact', value: 2.5, prefix: '$', suffix: 'B', generateRandom: true },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-void-black to-cyber-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-raleway font-bold text-white mb-6">
            Transforming <span className="text-cyber-cyan">Africa's</span> Supply Chain Landscape
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our impact across the African continent speaks for itself. From Cape Town to Cairo, 
            AISPAR Africa is driving supply chain innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              label={stat.label}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              generateRandom={stat.generateRandom}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
