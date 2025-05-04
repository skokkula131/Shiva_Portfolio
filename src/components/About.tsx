import React from 'react';
import { Award, Briefcase, GraduationCap, FileCode } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/4 space-y-6">
            <div className="relative bg-gray-100 dark:bg-gray-700 p-2 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1537384183138-745912986ce1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuJTIwd29ya2luZyUyMG9uJTIwYSUyMGNvbXB1dGVyfGVufDB8fDB8fHww" 
                alt="About Shiva Karthik" 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 rounded-lg border-4 border-blue-600/20"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Front-End Developer</h3>
            
            <p className="text-gray-700 dark:text-gray-300">
              I'm a passionate software developer with a strong foundation in web development. 
              With a background in computer science and years of hands-on experience, I specialize in 
              creating efficient, scalable, and user-friendly applications.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              My approach combines technical expertise with creative problem-solving, allowing me to 
              tackle complex challenges and deliver elegant solutions. I'm dedicated to writing clean, 
              maintainable code and staying current with emerging technologies and best practices.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Experience</h4>
                  <p className="text-gray-700 dark:text-gray-300">3+ years in software development</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Education</h4>
                  <p className="text-gray-700 dark:text-gray-300">Master's in Computer Science</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <FileCode size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Projects</h4>
                  <p className="text-gray-700 dark:text-gray-300">10+ completed projects</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Specialization</h4>
                  <p className="text-gray-700 dark:text-gray-300">Front-end Development</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors shadow-md hover:shadow-lg font-medium">
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;