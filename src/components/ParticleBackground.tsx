
import React, { useEffect } from 'react';

declare global {
  interface Window {
    particlesJS: (elementId: string, config: any) => void;
  }
}

const ParticleBackground = () => {
  useEffect(() => {
    // Load particles.js dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          "particles": {
            "number": { 
              "value": window.innerWidth < 768 ? 20 : 40, 
              "density": { "enable": true, "value_area": 1500 } 
            },
            "color": { "value": "#00F0FF" }, // Cyber-cyan color
            "shape": { 
              "type": "circle"
            },
            "opacity": { 
              "value": 0.15,
              "random": true, 
              "anim": { "enable": true, "speed": 0.5, "opacity_min": 0.05 } 
            },
            "size": { 
              "value": 0.8,
              "random": true,
              "anim": { "enable": true, "speed": 0.5, "size_min": 0.2 }
            },
            "line_linked": { 
              "enable": true, 
              "distance": 100,
              "color": "#00F0FF",
              "opacity": 0.08,
              "width": 0.2
            },
            "move": { 
              "enable": true, 
              "speed": 0.5, 
              "direction": "none", 
              "random": true,
              "straight": false,
              "out_mode": "bounce",
              "bounce": true,
              "attract": { "enable": false }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": { "enable": true, "mode": "repulse" },
              "onclick": { "enable": false },
              "resize": true
            },
            "modes": {
              "repulse": { "distance": 60, "duration": 0.2 }
            }
          },
          "retina_detect": true
        });
      }
    };
    document.head.appendChild(script);

    // Handle resize
    const handleResize = () => {
      if (window.particlesJS) {
        const newCount = window.innerWidth < 768 ? 20 : 40;
        // Reinitialize with new particle count
        window.particlesJS("particles-js", {
          "particles": {
            "number": { "value": newCount, "density": { "enable": true, "value_area": 1500 } }
          }
        });
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      id="particles-js" 
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;
