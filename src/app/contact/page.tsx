// app/contact/page.tsx
'use client';

import { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Github, 
  Linkedin, 
  MessageCircle,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import StaggerAnimation from '../components/StaggerAnimation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'khushipal1470@gmail.com',
      link: 'mailto:khushipal1470@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Gujarat, India',
      link: null
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 •••• ••••••',
      link: null
    },
    {
      icon: Github,
      title: 'GitHub',
      value: '@kkhushie',
      link: 'https://github.com/kkhushie'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header Section */}
        <StaggerAnimation delay={200}>
          <section className="mb-16">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-white mb-4">Get In Touch</h1>
              <p className="text-xl text-[#4a9eff] font-medium">
                Let&apos;s build something amazing together
              </p>
            </div>

            {/* Description */}
            <div className="bg-[#0f1824] border border-[#1a2332] rounded-2xl p-8 text-center max-w-4xl mx-auto">
              <p className="text-gray-300 text-lg leading-relaxed">
                Have a project in mind? Want to collaborate on open-source? 
                Or just want to say hello? I&apos;m always open to discussing 
                new opportunities and interesting ideas.
              </p>
            </div>
          </section>
        </StaggerAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Contact Information */}
        
          {/* Contact Form */}
          <StaggerAnimation delay={600}>
            <div className="lg:col-span-2">
              <div className="bg-[#0f1824] border border-[#1a2332] rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Send className="w-6 h-6 text-[#4a9eff]" />
                  Send Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#0a0f1a] border border-[#1a2332] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-[#4a9eff] focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#0a0f1a] border border-[#1a2332] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-[#4a9eff] focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a0f1a] border border-[#1a2332] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-[#4a9eff] focus:border-transparent transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-[#0a0f1a] border border-[#1a2332] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-[#4a9eff] focus:border-transparent transition-all duration-200 resize-vertical"
                      placeholder="Tell me about your project, questions, or just say hello!"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-[#1a2f4d] text-white py-4 px-6 rounded-lg font-medium border border-[#2a4a6d] hover:bg-[#2a3f5f] hover:border-[#4a9eff] focus:ring-2 focus:ring-[#4a9eff] focus:ring-offset-2 focus:ring-offset-[#0a0f1a] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Send Message
                      </span>
                    )}
                  </button>
                  {/* // Update the status handling in your contact form */}
{status === 'success' && (
  <div className="p-4 bg-green-900/20 border border-green-800 rounded-lg flex items-center gap-3">
    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
    <div>
      <p className="text-green-400 font-medium">Message sent successfully!</p>
      <p className="text-green-300 text-sm mt-1">
        Thank you for reaching out. I'll get back to you soon.
      </p>
    </div>
  </div>
)}

{status === 'error' && (
  <div className="p-4 bg-red-900/20 border border-red-800 rounded-lg flex items-center gap-3">
    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
    <div>
      <p className="text-red-400 font-medium">Failed to send message</p>
      <p className="text-red-300 text-sm mt-1">
        Please try again or contact me directly at khushipal1470@gmail.com
      </p>
    </div>
  </div>
)}
                </form>
              </div>
            </div>
          </StaggerAnimation>
        </div>

        {/* Current Availability */}
        <StaggerAnimation delay={800}>
          <section className="mt-16 text-center">
            <div className="bg-[#0f1824] border border-[#1a2332] rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <h3 className="text-xl font-semibold text-white">Currently Available</h3>
              </div>
              <p className="text-gray-300 mb-4">
                I&apos;m currently open to new opportunities, collaborations, and interesting projects. 
                Let&apos;s discuss how we can work together!
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Full Stack Projects', 'Open Source', 'Web3 Development', 'GSOC Preparation', 'Freelance Work'].map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1 bg-[#1a2f4d] text-[#4a9eff] text-sm rounded-full border border-[#2a4a6d]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </StaggerAnimation>

        {/* Last Updated */}
        <div className="text-center mt-12 pt-8 border-t border-[#1a2332]">
          <p className="text-gray-500 text-sm">
            Last Updated: {new Date().toLocaleDateString('en-US', {
              weekday: 'short',
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </p>
        </div>
      </div>
    </div>
  );
}