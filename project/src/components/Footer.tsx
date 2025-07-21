import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold">
              AK
            </div>
            <h3 className="text-2xl font-bold mb-2">Arunachalam K</h3>
            <p className="text-slate-300">Software Developer</p>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-slate-400">
              <div className="flex items-center gap-2">
                <span>Made with</span>
                <Heart className="text-red-500" size={16} />
                <span>and</span>
                <Code className="text-blue-400" size={16} />
                <span>by Arunachalam K</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-slate-600 rounded-full"></div>
              <div>
                <span>&copy; {currentYear} All rights reserved</span>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-slate-500">
              <p>Built with React, TypeScript, and Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;