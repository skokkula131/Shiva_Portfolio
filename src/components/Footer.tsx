import React from 'react';
import { ChevronUp, Github as GitHub, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Shiva Karthik</h3>
              <p className="text-gray-400 max-w-md">
                Building innovative web applications and digital experiences that make a difference.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex gap-4">
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <GitHub size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
              
              <a 
                href="#home" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <span>Back to Top</span>
                <ChevronUp size={16} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-1">
            &copy; {year} Shiva Karthik. All rights reserved. Made with <Heart size={16} className="text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;