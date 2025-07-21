import React from 'react';
import { GraduationCap, Award, Calendar, Star } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "PSNA College of Engineering and Technology",
      year: "2021",
      grade: "75%",
      description: "Advanced coursework in software engineering, database systems, and web technologies"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "SRM Institute of Science and Technology",
      year: "2019",
      grade: "60%",
      description: "Foundation in computer science principles, programming, and system design"
    }
  ];

  const certifications = [
    {
      title: "Microsoft Office Specialist",
      issuer: "Microsoft",
      description: "Advanced proficiency in Office suite applications"
    },
    {
      title: "Cloud & Mobile Engineering",
      issuer: "Professional Certification",
      description: "Specialized training in cloud platforms and mobile development"
    },
    {
      title: "Hindi Language Certification",
      issuer: "Language Institute",
      description: "Professional proficiency in Hindi communication"
    }
  ];

  const achievements = [
    {
      title: "International Deployment Leadership",
      description: "Led successful application deployments in Myanmar and Bangkok markets"
    },
    {
      title: "Performance Excellence",
      description: "Achieved 40% system performance improvement through optimization"
    },
    {
      title: "Team Collaboration",
      description: "Mentored junior developers and contributed to Agile team success"
    },
    {
      title: "Technical Innovation",
      description: "Implemented modern technologies like Kafka for improved system architecture"
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Education & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Education */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-blue-600" size={32} />
                <h3 className="text-2xl font-bold text-slate-800">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div 
                    key={index} 
                    className="border-l-4 border-blue-600 pl-6 hover:border-l-8 hover:bg-blue-50 hover:scale-[1.02] transition-all duration-300 cursor-pointer rounded-r-lg p-4 -ml-4 focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-95"
                    tabIndex={0}
                    onClick={() => console.log(`Clicked education: ${edu.degree}`)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        console.log(`Activated education: ${edu.degree}`);
                      }
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="text-slate-500" size={16} />
                      <span className="text-blue-600 font-semibold">{edu.year}</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 mb-1">{edu.degree}</h4>
                    <p className="text-slate-600 font-medium mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="text-yellow-500" size={16} />
                      <span className="text-slate-700 font-semibold">Grade: {edu.grade}</span>
                    </div>
                    <p className="text-slate-600 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-8">
                <Award className="text-teal-600" size={32} />
                <h3 className="text-2xl font-bold text-slate-800">Certifications</h3>
              </div>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="border border-slate-200 rounded-lg p-4 hover:shadow-lg hover:scale-105 hover:border-teal-300 transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-4 focus:ring-teal-200 active:scale-95"
                    tabIndex={0}
                    onClick={() => console.log(`Clicked certification: ${cert.title}`)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        console.log(`Activated certification: ${cert.title}`);
                      }
                    }}
                  >
                    <h4 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors duration-300">{cert.title}</h4>
                    <p className="text-teal-600 font-medium mb-2 group-hover:text-teal-700 transition-colors duration-300">{cert.issuer}</p>
                    <p className="text-slate-600 text-sm">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Notable Achievements */}
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Notable Achievements</h3>
              <p className="text-slate-600">Key accomplishments that demonstrate professional excellence</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-95"
                  tabIndex={0}
                  onClick={() => console.log(`Clicked achievement: ${achievement.title}`)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      console.log(`Activated achievement: ${achievement.title}`);
                    }
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Star className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">{achievement.title}</h4>
                      <p className="text-slate-600">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;