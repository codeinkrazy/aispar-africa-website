
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
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
    
    // Create mailto link with the single email address
    const emailAddress = 'oloocm@gmail.com';
    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n` +
      `Service of Interest: ${formData.service}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    // Show success toast
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
      duration: 5000,
    });
    
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-white font-semibold mb-2">
              Name *
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
  );
};

export default ContactForm;
