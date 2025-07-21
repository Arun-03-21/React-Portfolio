import React from 'react';
import { ExternalLink, Github, Smartphone, ShoppingCart, Zap, Users } from 'lucide-react';

interface ProjectsProps {
  onProjectAction: (contentType: 'details' | 'source', projectTitle: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectAction }) => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      icon: ShoppingCart,
      gradient: "from-purple-600 to-pink-600",
      colors: {
        button: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
      },
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT"]
    },
    {
      title: "Mobile Task Manager",
      description: "A React Native mobile application for task management with offline capabilities, push notifications, and cloud synchronization.",
      icon: Smartphone,
      gradient: "from-blue-600 to-cyan-600",
      colors: {
        button: "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
      },
      technologies: ["React Native", "Firebase", "AsyncStorage", "Push Notifications"]
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "A comprehensive analytics dashboard with real-time data visualization, interactive charts, and customizable widgets for business intelligence.",
      icon: Zap,
      gradient: "from-green-600 to-teal-600",
      colors: {
        button: "bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
      },
      technologies: ["React", "D3.js", "WebSocket", "Chart.js", "Redis"]
    },
    {
      title: "Social Media Platform",
      description: "A modern social media platform with real-time messaging, content sharing, user profiles, and advanced privacy controls.",
      icon: Users,
      gradient: "from-orange-600 to-red-600",
      colors: {
        button: "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
      },
      technologies: ["React", "Socket.io", "PostgreSQL", "AWS S3", "OAuth"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of innovative web applications and mobile solutions, 
            each crafted with modern technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const { colors } = project;
            
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${project.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-8 pt-6 border-t border-slate-200">
                    <button 
                      onClick={() => onProjectAction('details', project.title)}
                      className={`flex items-center gap-2 px-6 py-3 ${colors.button} text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-200`}
                    >
                      <ExternalLink size={16} />
                      <span>View Details</span>
                    </button>
                    <button 
                      onClick={() => onProjectAction('source', project.title)}
                      className="flex items-center gap-2 px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-slate-300"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;