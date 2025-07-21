import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold">
              AK
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
              Arunachalam K
            </h1>
            <p className="text-2xl text-blue-200 mb-8">Software Developer</p>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Experienced .NET Developer with 4+ years of expertise in building scalable enterprise applications, 
              REST APIs, and modern web solutions. Passionate about delivering high-performance software solutions 
              that drive business success.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="tel:+918754843622" className="flex items-center gap-2 text-blue-200 hover:text-blue-100 transition-colors">
              <Phone size={20} />
              <span>+91 8754843622</span>
            </a>
            <a href="mailto:arunachalamarunk@gmail.com" className="flex items-center gap-2 text-blue-200 hover:text-blue-100 transition-colors">
              <Mail size={20} />
              <span>arunachalamarunk@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/arunachalam-k" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 text-blue-200 hover:text-blue-100 transition-colors">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Arun-03-21" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 text-blue-200 hover:text-blue-100 transition-colors">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>

          <nav className="flex flex-wrap justify-center gap-8">
            {['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 rounded-full border border-blue-400 text-blue-200 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;