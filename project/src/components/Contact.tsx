import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="text-blue-600" size={24} />,
      title: "Phone",
      value: "+91 8754843622",
      link: "tel:+918754843622"
    },
    {
      icon: <Mail className="text-teal-600" size={24} />,
      title: "Email",
      value: "arunachalamarunk@gmail.com",
      link: "mailto:arunachalamarunk@gmail.com"
    },
    {
      icon: <MapPin className="text-indigo-600" size={24} />,
      title: "Location",
      value: "India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/arunachalam-k",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/Arun-03-21",
      color: "hover:text-slate-700"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'd love to hear from you and discuss how I can contribute to your team's success.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-4 hover:bg-white hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg p-3 -m-3 group focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-95"
                      tabIndex={0}
                      onClick={() => info.link && window.open(info.link, '_self')}
                      onKeyDown={(e) => {
                        if ((e.key === 'Enter' || e.key === ' ') && info.link) {
                          e.preventDefault();
                          window.open(info.link, '_self');
                        }
                      }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">{info.title}</h4>
                        {info.link ? (
                          <span className="text-slate-600 group-hover:text-blue-600 transition-colors duration-300">
                            {info.value}
                          </span>
                        ) : (
                          <p className="text-slate-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-md text-slate-600 ${social.color} transition-all duration-300 hover:shadow-xl hover:scale-110 hover:rotate-6 focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-95`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-slate-800 mb-2">Open to Opportunities</h4>
                  <p className="text-slate-600 text-sm">
                    Currently exploring new opportunities in .NET development, 
                    full-stack roles, and technical leadership positions.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="text-green-600 mx-auto mb-4" size={48} />
                  <h4 className="text-xl font-semibold text-slate-800 mb-2">Message Sent Successfully!</h4>
                  <p className="text-slate-600">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 hover:shadow-md"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 hover:shadow-md"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 hover:shadow-md"
                    >
                      <option value="">Select a subject</option>
                      <option value="job-opportunity">Job Opportunity</option>
                      <option value="project-collaboration">Project Collaboration</option>
                      <option value="technical-consultation">Technical Consultation</option>
                      <option value="general-inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 hover:shadow-md"
                      placeholder="Tell me about your project, job opportunity, or how I can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-95"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;