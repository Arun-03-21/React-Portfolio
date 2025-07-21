import React from 'react';
import { Calendar, TrendingUp, Users, Award } from 'lucide-react';

const Experience = () => {
  const achievements = [
    {
      icon: <TrendingUp className="text-green-600" size={20} />,
      metric: "40%",
      description: "System Performance Improvement",
      detail: "Optimized application architecture and database queries"
    },
    {
      icon: <Users className="text-blue-600" size={20} />,
      metric: "25%",
      description: "User Engagement Increase",
      detail: "Enhanced UI/UX and implemented new features"
    },
    {
      icon: <Award className="text-orange-600" size={20} />,
      metric: "30%",
      description: "Downtime Reduction",
      detail: "Implemented robust error handling and monitoring"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-[0.98]" tabIndex={0}>
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Calendar className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">.NET Developer</h3>
                <p className="text-xl text-blue-600 mb-2">Crytonix Remote Tech Works Pvt Ltd</p>
                <p className="text-slate-600 flex items-center gap-2 mb-4">
                  <Calendar size={16} />
                  May 2021 – Present (3.5+ years)
                </p>
                <div className="text-slate-700 leading-relaxed space-y-3">
                  <p>
                    Leading development of enterprise-level applications using <strong>ASP.NET MVC</strong> and 
                    <strong> Web API</strong>, collaborating with cross-functional teams in Agile environments 
                    to deliver scalable software solutions.
                  </p>
                  <p>
                    Specialized in <strong>REST API development</strong>, database design with <strong>SQL Server</strong>, 
                    and frontend integration using <strong>React and jQuery</strong>. Responsible for code reviews, 
                    technical documentation, and mentoring junior developers.
                  </p>
                  <p>
                    Successfully deployed applications internationally in <strong>Myanmar and Bangkok</strong>, 
                    ensuring seamless performance across different environments and user bases.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h4 className="text-lg font-semibold text-slate-800 mb-6">Key Achievements</h4>
              <div className="grid md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-95"
                    tabIndex={0}
                    onClick={() => console.log(`Clicked achievement: ${achievement.description}`)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        console.log(`Activated achievement: ${achievement.description}`);
                      }
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {achievement.icon}
                      </div>
                      <span className="text-3xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">{achievement.metric}</span>
                    </div>
                    <h5 className="font-semibold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">{achievement.description}</h5>
                    <p className="text-sm text-slate-600">{achievement.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8 mt-8">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Core Responsibilities</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Architected and developed full-stack web applications using ASP.NET MVC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Designed and implemented RESTful APIs for mobile and web applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Optimized database performance and implemented complex SQL queries</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Collaborated in Agile teams using GitLab for version control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Integrated cloud services including AWS S3 for file management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Created comprehensive technical documentation and user guides</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;