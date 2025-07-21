import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      color: "blue",
      skills: [
        { name: "C#", level: 95 },
        { name: "ASP.NET MVC", level: 90 },
        { name: "Web API", level: 88 },
        { name: "WCF", level: 75 }
      ]
    },
    {
      title: "Database & ORM",
      color: "indigo",
      skills: [
        { name: "SQL Server", level: 90 },
        { name: "LINQ", level: 85 },
        { name: "Entity Framework", level: 80 },
        { name: "Database Design", level: 85 }
      ]
    },
    {
      title: "Frontend Development",
      color: "teal",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "jQuery", level: 88 },
        { name: "HTML5/CSS3", level: 90 }
      ]
    },
    {
      title: "Tools & Technologies",
      color: "orange",
      skills: [
        { name: "Visual Studio", level: 95 },
        { name: "GitLab/SVN", level: 85 },
        { name: "Postman", level: 90 },
        { name: "AWS S3", level: 75 }
      ]
    },
    {
      title: "Integration & APIs",
      color: "green",
      skills: [
        { name: "REST APIs", level: 92 },
        { name: "JSON/XML", level: 90 },
        { name: "AJAX", level: 85 },
        { name: "Kafka", level: 70 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; progress: string; text: string } } = {
      blue: { bg: "bg-blue-50", progress: "bg-blue-600", text: "text-blue-800" },
      indigo: { bg: "bg-indigo-50", progress: "bg-indigo-600", text: "text-indigo-800" },
      teal: { bg: "bg-teal-50", progress: "bg-teal-600", text: "text-teal-800" },
      orange: { bg: "bg-orange-50", progress: "bg-orange-600", text: "text-orange-800" },
      green: { bg: "bg-green-50", progress: "bg-green-600", text: "text-green-800" }
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive technical expertise across the full software development lifecycle
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const colors = getColorClasses(category.color);
              return (
                <div 
                  key={categoryIndex} 
                  className={`${colors.bg} rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-4 focus:ring-opacity-50 active:scale-95`}
                  style={{ focusRingColor: `${category.color === 'blue' ? '#3b82f6' : category.color === 'indigo' ? '#6366f1' : category.color === 'teal' ? '#14b8a6' : category.color === 'orange' ? '#f97316' : '#22c55e'}40` }}
                  tabIndex={0}
                  onClick={() => console.log(`Clicked skill category: ${category.title}`)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      console.log(`Activated skill category: ${category.title}`);
                    }
                  }}
                >
                  <h3 className={`text-xl font-bold ${colors.text} mb-6 group-hover:scale-105 transition-transform duration-300`}>{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group-hover:translate-x-1 transition-transform duration-300">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-slate-700">{skill.name}</span>
                          <span className={`text-sm font-semibold ${colors.text}`}>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-white rounded-full h-2 shadow-inner overflow-hidden">
                          <div
                            className={`${colors.progress} h-2 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Additional Competencies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-blue-200 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Agile Development</h4>
                <p className="text-sm text-slate-600">Scrum, Kanban, Sprint Planning</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-teal-200 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Performance Tuning</h4>
                <p className="text-sm text-slate-600">Query Optimization, Caching</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-indigo-200 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <span className="text-2xl">🔧</span>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">DevOps</h4>
                <p className="text-sm text-slate-600">CI/CD, Deployment, Monitoring</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-orange-200 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <span className="text-2xl">📱</span>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Mobile Integration</h4>
                <p className="text-sm text-slate-600">API Design, Cross-platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;