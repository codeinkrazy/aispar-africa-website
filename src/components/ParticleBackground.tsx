
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
              "value": window.innerWidth < 768 ? 30 : 60, 
              "density": { "enable": true, "value_area": 1200 } 
            },
            "color": { "value": "#FFFF66" }, // Yellow
            "shape": { 
              "type": ["circle", "triangle"],
              "triangle": { "nb_sides": 3 }
            },
            "opacity": { 
              "value": 0.3,
              "random": true, 
              "anim": { "enable": true, "speed": 1, "opacity_min": 0.1 } 
            },
            "size": { 
              "value": 1.875, // Increased by 50% (was 1.25, now 1.875)
              "random": true,
              "anim": { "enable": true, "speed": 1, "size_min": 0.5625 } // Also increased min size by 50%
            },
            "line_linked": { 
              "enable": true, 
              "distance": 120,
              "color": "#8A2387",
              "opacity": 0.2,
              "width": 0.5
            },
            "move": { 
              "enable": true, 
              "speed": 0.8, 
              "direction": "none", 
              "random": false,
              "straight": false,
              "out_mode": "bounce",
              "bounce": false,
              "attract": { "enable": true, "rotateX": 600, "rotateY": 1200 }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": { "enable": true, "mode": "repulse" },
              "onclick": { "enable": true, "mode": "push" },
              "resize": true
            },
            "modes": {
              "grab": { "distance": 200, "line_linked": { "opacity": 0.5 } },
              "bubble": { "distance": 200, "size": 20, "duration": 1, "opacity": 4, "speed": 2 },
              "repulse": { "distance": 80, "duration": 0.3 },
              "push": { "particles_nb": 2 },
              "remove": { "particles_nb": 1 }
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
        const newCount = window.innerWidth < 768 ? 30 : 60;
        // Reinitialize with new particle count
        window.particlesJS("particles-js", {
          "particles": {
            "number": { "value": newCount, "density": { "enable": true, "value_area": 1200 } }
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
