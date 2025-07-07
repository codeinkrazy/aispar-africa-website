
import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();

  React.useEffect(() => {
    // Custom message for enquiries
    const showEnquiryMessage = () => {
      toast({
        title: "Welcome to AISPAR!",
        description: "We're here to help transform your supply chain. Our team of experts is ready to discuss your specific needs and provide tailored solutions for your business across Africa.",
        duration: 5000,
      });
    };

    // Show message when component mounts (user reaches contact section)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            showEnquiryMessage();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, [toast]);

  return (
    <section 
      id="contact" 
      className="py-20 relative overflow-hidden bg-ion-blue"
      style={{
        backgroundImage: `linear-gradient(rgba(179, 229, 252, 0.95), rgba(179, 229, 252, 0.95)), url('/lovable-uploads/42cad4a4-a4a1-4fe8-bfce-11d5ecdf7167.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-raleway font-bold text-titan-mist mb-6">
            Get In <span className="text-cyber-aqua">Touch</span>
          </h2>
          <p className="text-xl text-atmos-silver max-w-3xl mx-auto">
            Ready to transform your supply chain? Let's discuss how AISPAR can help 
            drive your organization's success across Africa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
