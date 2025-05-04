import React from 'react';
import { Code, PaintBucket, Wrench, Lightbulb } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Front-end Development",
      icon: <Code size={18} />,
      skills: [
        { name: "React", level: 60 },
        { name: "JavaScript", level: 75 },
        { name: "TypeScript", level: 50 },
        { name: "Bootstrap", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "jQuery", level: 70 }
      ]
    },
    
    {
      title: "UI/UX Design",
      icon: <PaintBucket size={18} />,
      skills: [
        { name: "Figma", level: 75 },
        { name: "UI Design", level: 80 },
        { name: "Responsive Design", level: 85 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Tools",
      icon: <Wrench size={18} />,
      skills: [
        { name: "Git", level: 90 },
        { name: "VS code", level: 85 }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Lightbulb size={18} />,
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Communication", level: 90 },
        { name: "Teamwork", level: 85 },
        { name: "Project Management", level: 80 },
        { name: "Adaptability", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;