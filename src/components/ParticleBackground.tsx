
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
              "value": window.innerWidth < 768 ? 40 : 80, 
              "density": { "enable": true, "value_area": 800 } 
            },
            "color": { "value": ["#F2C94C", "#8A2387", "#00F0FF"] },
            "shape": { 
              "type": ["circle", "triangle"],
              "triangle": { "nb_sides": 3 }
            },
            "opacity": { 
              "value": 0.6,
              "random": true, 
              "anim": { "enable": true, "speed": 1, "opacity_min": 0.3 } 
            },
            "size": { 
              "value": 3, 
              "random": true,
              "anim": { "enable": true, "speed": 2, "size_min": 1 }
            },
            "line_linked": { 
              "enable": true, 
              "distance": 150,
              "color": "#8A2387",
              "opacity": 0.4,
              "width": 1
            },
            "move": { 
              "enable": true, 
              "speed": 1.5, 
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
              "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
              "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
              "repulse": { "distance": 100, "duration": 0.4 },
              "push": { "particles_nb": 4 },
              "remove": { "particles_nb": 2 }
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
        const newCount = window.innerWidth < 768 ? 40 : 80;
        // Reinitialize with new particle count
        window.particlesJS("particles-js", {
          "particles": {
            "number": { "value": newCount, "density": { "enable": true, "value_area": 800 } }
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
      className="absolute inset-0 w-full h-full z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;
