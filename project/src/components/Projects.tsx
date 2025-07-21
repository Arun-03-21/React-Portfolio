import React from 'react';
import { ExternalLink, Github, Smartphone, ShoppingCart, Zap, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Coupon Management System",
      description: "Comprehensive coupon lifecycle management system with advanced features",
      longDescription: "A full-featured digital coupon management platform that streamlines the entire coupon lifecycle from creation to redemption. Features QR code generation, gamification elements, and mobile integration for enhanced user engagement.",
      technologies: ["ASP.NET MVC", "Web API", "SQL Server", "jQuery", "QR Code API", "Mobile SDK"],
      features: [
        "QR code generation and scanning functionality",
        "Gamification system with points and rewards",
        "Mobile app integration for iOS and Android",
        "Real-time coupon validation and redemption",
        "Analytics dashboard for campaign tracking",
        "Multi-tenant architecture for enterprise clients"
      ],
      metrics: [
        { label: "User Engagement", value: "+25%" },
        { label: "Redemption Rate", value: "40%" },
        { label: "Processing Time", value: "-60%" }
      ],
      icon: <Smartphone className="text-blue-600" size={24} />,
      color: "blue"
    },
    {
      title: "ERP Purchase Order Module",
      description: "Automated workflow system for enterprise purchase order management",
      longDescription: "A sophisticated ERP module that automates the entire purchase order workflow, from requisition to vendor management. Includes advanced approval workflows, inventory integration, and comprehensive reporting capabilities.",
      technologies: ["ASP.NET Web API", "WCF", "SQL Server", "LINQ", "React", "Chart.js"],
      features: [
        "Multi-level approval workflow automation",
        "Vendor management and evaluation system",
        "Integration with inventory management",
        "Automated email notifications and alerts",
        "Custom reporting and analytics dashboard",
        "Budget tracking and cost center allocation"
      ],
      metrics: [
        { label: "Processing Speed", value: "+40%" },
        { label: "Manual Errors", value: "-80%" },
        { label: "Approval Time", value: "-50%" }
      ],
      icon: <ShoppingCart className="text-teal-600" size={24} />,
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; border: string; text: string; button: string } } = {
      blue: { 
        bg: "bg-blue-50", 
        border: "border-blue-200", 
        text: "text-blue-800",
        button: "bg-blue-600 hover:bg-blue-700"
      },
      teal: { 
        bg: "bg-teal-50", 
        border: "border-teal-200", 
        text: "text-teal-800",
        button: "bg-teal-600 hover:bg-teal-700"
      }
    };
    return colors[color];
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Showcase of enterprise-level applications demonstrating technical expertise and business impact
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <div 
                key={index} 
                className={`${colors.bg} ${colors.border} border rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-[0.98]`}
                tabIndex={0}
                onClick={() => console.log(`Clicked project: ${project.title}`)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    console.log(`Activated project: ${project.title}`);
                  }
                }}
              >
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0 p-4 bg-white rounded-xl shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">{project.title}</h3>
                      <p className="text-lg text-slate-600 mb-4">{project.description}</p>
                      <p className="text-slate-700 leading-relaxed">{project.longDescription}</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-4">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-slate-700">
                            <Zap className="text-orange-500 mt-1 flex-shrink-0" size={16} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <h4 className="text-lg font-semibold text-slate-800 mb-4">Impact Metrics</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {project.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer">
                            <div className={`text-2xl font-bold ${colors.text}`}>{metric.value}</div>
                            <div className="text-sm text-slate-600">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8 pt-6 border-t border-white">
                    <button className={`flex items-center gap-2 px-6 py-3 ${colors.button} text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-200`}>
                      <ExternalLink size={16} />
                      <span>View Details</span>
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-slate-300">
                      <Github size={16} />
                      <span>Source Code</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-[0.98]" tabIndex={0}>
            <Users className="text-blue-600 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">International Deployment Experience</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Successfully deployed and maintained applications in international markets including 
              <strong> Myanmar and Bangkok</strong>, ensuring optimal performance across different 
              environments, languages, and user bases while meeting local compliance requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;