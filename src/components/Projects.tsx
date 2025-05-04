import React, { useState } from 'react';
import { ExternalLink, Github as GitHub, Code } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  category: 'web' | 'mobile' |  'other';
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'other'>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A E-commerce platform with product catalog, shopping cart. Built with React, Node.js, and MongoDB.",
      image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg",
      tags: ["React","tailwind CSS" ],
      demoLink: "https://example.com",
      codeLink: "https://github.com",
      category: "web"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and team collaboration. Features include drag-and-drop interface, notifications, and real-time updates.",
      image: "https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg",
      tags: ["React", "Firebase", "Material UI", "Redux"],
      demoLink: "https://example.com",
      codeLink: "https://github.com",
      category: "web"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 p-1 bg-gray-200 dark:bg-gray-700 rounded-lg">
            <button 
              className={`px-4 py-2 rounded-md transition-colors text-sm font-medium ${
                filter === 'all' 
                  ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 rounded-md transition-colors text-sm font-medium ${
                filter === 'web' 
                  ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
              onClick={() => setFilter('web')}
            >
              Web
            </button>
            <button 
              className={`px-4 py-2 rounded-md transition-colors text-sm font-medium ${
                filter === 'other' 
                  ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
              onClick={() => setFilter('other')}
            >
              Other
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative group overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      <div className="flex gap-2">
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-200/20 hover:bg-blue-600/70 rounded-full text-white transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                        <a 
                          href={project.codeLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-200/20 hover:bg-blue-600/70 rounded-full text-white transition-colors"
                          aria-label="View Code"
                        >
                          <GitHub size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <p className="text-gray-700 dark:text-gray-300 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4"> 
                  <a 
                    href={`#project-${project.id}`} 
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                  >
                    <span>View Details</span>
                    <Code size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a 
            href="#projects" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 px-6 py-3 rounded-md transition-colors"
          >
            <GitHub size={20} />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;