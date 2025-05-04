import React, { useState } from 'react';
import { Calendar, Building, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');
  
  const workExperience = [
  
    {
      title: "Software Developer",
      company: "SQERsoft pvt. ltd.",
      location: "Hyderabad, India",
      period: "June 2022 - November 2023",
      description: [
        "Developed responsive web applications using React and Redux",
        "Implemented RESTful APIs and GraphQL endpoints",
        "Collaborated with design team to create intuitive user interfaces",
        "Participated in Agile development process with two-week sprints"
      ]
    },
    {
      title: "Junior Developer",
      company: "Raviram Tech Solutions",
      location: "Hyderabad,India",
      period: "August 2021 - May 2022",
      description: [
        "Built and maintained client websites using JavaScript and PHP",
        "Assisted in database design and implementation",
        "Contributed to front-end development with HTML, CSS, and jQuery",
        "Participated in weekly code reviews and technical discussions"
      ]
    }
  ];
  
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Auburn University at Montgomery",
      location: "Montgomery, AL",
      period: "2024 - 2025",
      description: [
        "Specialized in Front-end technologies and Machine Learning",
        "GPA: 3.8/4.0",
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "TKR College of Engineering and Technology",
      location: "Hyderabad, India",
      period: "2017 - 2021",
      description: [
        "Graduated with Honors",
        "Relevant coursework: Data Structures, Algorithms, Web Development"
      ]
    }
  ];
  
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">My Journey</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="flex p-1 bg-gray-200 dark:bg-gray-700 rounded-lg">
            <button 
              className={`px-6 py-2 rounded-md transition-colors font-medium ${
                activeTab === 'work' 
                  ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
              onClick={() => setActiveTab('work')}
            >
              Work Experience
            </button>
            <button 
              className={`px-6 py-2 rounded-md transition-colors font-medium ${
                activeTab === 'education' 
                  ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {activeTab === 'work' ? (
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex justify-between flex-wrap gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {job.period}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <Building size={16} className="mr-1 text-blue-600 dark:text-blue-400" />
                        {job.company}
                      </div>
                      <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <MapPin size={16} className="mr-1 text-blue-600 dark:text-blue-400" />
                        {job.location}
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {job.description.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex justify-between flex-wrap gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <Building size={16} className="mr-1 text-blue-600 dark:text-blue-400" />
                        {edu.institution}
                      </div>
                      <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <MapPin size={16} className="mr-1 text-blue-600 dark:text-blue-400" />
                        {edu.location}
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {edu.description.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;