
import React from 'react';

const PartnersSection = () => {
  const partners = [
    "AfDB", "UNECA", "COMESA", "ECOWAS", "SADC", 
    "AU", "NEPAD", "IFC", "USAID", "GIZ",
    "DFID", "JICA", "World Bank", "IMF", "AfCFTA"
  ];

  return (
    <section className="py-16 bg-cyber-gray/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-raleway font-bold text-white mb-4">
            Trusted by Leading <span className="text-cyber-cyan">African Institutions</span>
          </h3>
          <p className="text-gray-400">
            Collaborating with governments, NGOs, and international organizations across Africa
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 px-6 py-4 bg-card/30 rounded-lg border border-cyber-cyan/20 hover:border-cyber-cyan/60 transition-all duration-300 hover:cyber-glow"
              >
                <span className="text-cyber-cyan font-semibold whitespace-nowrap">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
