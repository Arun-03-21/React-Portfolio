import React from 'react';
import { Code, Server, Database, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "4+ Years Experience",
      description: "Extensive expertise in .NET development and enterprise solutions"
    },
    {
      icon: <Server className="text-teal-600" size={24} />,
      title: "Full-Stack Development",
      description: "Proficient in ASP.NET MVC, Web API, and modern frontend technologies"
    },
    {
      icon: <Database className="text-indigo-600" size={24} />,
      title: "Database Expertise",
      description: "Advanced SQL Server, LINQ, and database optimization skills"
    },
    {
      icon: <Zap className="text-orange-600" size={24} />,
      title: "Performance Optimization",
      description: "Proven track record of improving system performance by up to 40%"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Professional Summary</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              As a dedicated <strong className="text-slate-800">.NET Developer</strong> with over 4 years of comprehensive 
              software development experience, I specialize in creating robust, scalable enterprise applications using 
              <strong className="text-blue-600"> ASP.NET MVC, Web API, and SQL Server</strong>.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              My expertise extends beyond backend development to include modern frontend technologies like 
              <strong className="text-teal-600"> React and jQuery</strong>, mobile development, and distributed systems 
              with <strong className="text-indigo-600">Kafka</strong>. I have a proven track record of delivering 
              high-performance solutions that improve system efficiency, enhance user engagement, and reduce operational costs.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              I thrive in Agile development environments and am passionate about writing clean, maintainable code 
              while staying current with emerging technologies and best practices in software development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-95"
                tabIndex={0}
                onClick={() => console.log(`Clicked: ${highlight.title}`)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    console.log(`Activated: ${highlight.title}`);
                  }
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-slate-100 rounded-lg group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">{highlight.title}</h3>
                    <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;