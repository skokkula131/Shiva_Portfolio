import React, { useEffect, useRef } from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const titleElement = titleRef.current;
    if (titleElement) {
      titleElement.classList.add('animate-fade-in');
    }
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 pb-12">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-2">
              <p className="text-blue-600 dark:text-blue-400 font-medium tracking-wide animate-fade-in animate-delay-100">Hello, I'm</p>
              <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold !leading-tight text-gray-900 dark:text-white opacity-0 transform translate-y-4 transition duration-700">
                Shiva Karthik
              </h1>
              <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 font-medium animate-fade-in animate-delay-200">
                Software Developer
              </h2>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 max-w-lg animate-fade-in animate-delay-300">
              I build exceptional digital experiences that combine elegant design with powerful functionality. 
              Specializing in full-stack development with expertise in modern technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-400">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors shadow-md hover:shadow-lg font-medium">
                Get in Touch
              </a>
              <a href="#projects" className="bg-transparent border border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-900 dark:text-white px-6 py-3 rounded-md transition-colors">
                View My Work
              </a>
            </div>
            
            <div className="flex gap-4 pt-2 animate-fade-in animate-delay-500">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center animate-fade-in">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Shiva Karthik" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce"
      >
        <span className="text-sm font-medium mb-2">Scroll Down</span>
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;