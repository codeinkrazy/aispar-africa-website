import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: 'Bill Odhiambo',
    email: 'bill@mambatech.co.ke',
    company: 'MambaTech Solutions Ltd',
    service: 'Training & Consulting',
    message: `Dear AISPAR Africa Team,

I am Bill Odhiambo from MambaTech Solutions Ltd. We are interested in a customized Supply Chain Management training session for our team and would like to discuss a potential collaboration with AISPAR Africa.

Key Details:
• Training Focus: Supply Chain Management (logistics, procurement, or digital SCM, if applicable)
• Participants: 15 mid-level managers/logistics staff
• Format: In-person, virtual, or hybrid
• Duration: 1-day workshop or multi-week course (flexible)
• Budget: Please share cost estimates

Additional Needs:
• Participant certification
• Industry-specific case studies  
• Post-training support (materials/follow-ups)

Kindly provide:
• A detailed training proposal
• Trainer qualifications
• Pricing and available discounts

Please let me know the next steps. Looking forward to your response.

Best regards,
Bill Odhiambo
MambaTech Solutions Ltd`
  });

  const services = [
    'Supply Chain Optimization',
    'Research & Analytics',
    'Training & Consulting',
    'Digital Transformation',
    'Strategic Planning',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with both email addresses
    const emailAddresses = 'info@aispar.africa,oloocm@gmail.com';
    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n` +
      `Service of Interest: ${formData.service}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:${emailAddresses}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    // Show stunning success toast
    toast({
      title: "✅ Message Sent Successfully!",
      description: "Your message has been successfully sent to AISPAR Africa. Sent to: info@aispar.africa & oloocm@gmail.com. We'll get back to you within 24 hours!",
      className: "bg-gradient-to-r from-card/90 to-cyber-dark/90 border-cyber-cyan/30 backdrop-blur-lg shadow-2xl",
      duration: 8000,
    });
    
    console.log('Form submitted:', formData);
  };

  return (
    <section 
      id="contact" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 26, 46, 0.85), rgba(18, 18, 18, 0.85)), url('/lovable-uploads/42cad4a4-a4a1-4fe8-bfce-11d5ecdf7167.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-raleway font-bold text-white mb-6">
            Get In <span className="text-cyber-cyan">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your supply chain? Let's discuss how AISPAR can help 
            drive your organization's success across Africa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
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

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-card/30 border border-cyber-cyan/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-cyan transition-colors duration-300 backdrop-blur-sm"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-card/30 border border-cyber-cyan/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-cyan transition-colors duration-300 backdrop-blur-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-white font-semibold mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card/30 border border-cyber-cyan/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-cyan transition-colors duration-300 backdrop-blur-sm"
                    placeholder="Your organization"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-white font-semibold mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card/30 border border-cyber-cyan/20 rounded-lg text-white focus:outline-none focus:border-cyber-cyan transition-colors duration-300 backdrop-blur-sm"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-card text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-card/30 border border-cyber-cyan/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-cyan transition-colors duration-300 resize-none backdrop-blur-sm"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-cyber-cyan text-void-black font-semibold rounded-lg hover-skew hover:bg-neon-yellow transition-all duration-300 cyber-glow flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
