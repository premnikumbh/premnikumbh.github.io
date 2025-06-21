import React from 'react';
import { Briefcase, Calendar, TrendingUp, MapPin } from 'lucide-react';

interface TimelineItem {
  role: string;
  company: string;
  location: string;
  period: string;
  impact: string[];
  skills: string[];
  type: 'devops' | 'management' | 'engineering' | 'freelance';
}

const Timeline: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      role: 'DevOps Engineer',
      company: 'GainMatic',
      location: 'Remote',
      period: 'Sep 2022 – May 2025',
      impact: [
        'Built CI/CD pipelines (Jenkins, GitHub Actions), cut deployment time 65%',
        'Dockerized microservices → improved uptime 40%',
        'Deployed cloud infra via Terraform & Ansible across AWS, Azure, GCP',
        'Integrated Prometheus, Grafana, CloudWatch for proactive monitoring',
        'Automated 70% of Linux configuration using Bash + Ansible',
        'Led root cause analyses & created automation to reduce incidents by 60%'
      ],
      skills: ['Jenkins', 'GitHub Actions', 'Docker', 'Terraform', 'Ansible', 'AWS', 'Azure', 'GCP', 'Prometheus', 'Grafana'],
      type: 'devops'
    },
    {
      role: 'Freelance DevOps Consultant',
      company: 'Independent',
      location: 'Remote',
      period: 'Feb 2022 – Aug 2022',
      impact: [
        'Built CI/CD pipelines, cloud infrastructure (Terraform, Ansible)',
        'Helped startups modernize infra and reduce cloud costs'
      ],
      skills: ['CI/CD', 'Terraform', 'Ansible', 'Cloud Optimization', 'Consulting'],
      type: 'freelance'
    },
    {
      role: 'Project Manager',
      company: 'Sigma Power Control Systems',
      location: 'Pune',
      period: 'Nov 2019 – Aug 2022',
      impact: [
        'Delivered 15+ engineering projects, reduced delays by 25%',
        'Improved timelines by 20% with resource strategies',
        'Led national coordination for marine service contracts'
      ],
      skills: ['Project Management', 'Team Leadership', 'Resource Planning', 'Stakeholder Management'],
      type: 'management'
    },
    {
      role: 'Project Engineer',
      company: 'Sigma Power Control Systems',
      location: 'Pune',
      period: 'Nov 2017 – Oct 2019',
      impact: [
        'Managed RFQs, technical proposals, and vendor collaboration',
        'Reduced design cycle time by 50% via standardized workflows'
      ],
      skills: ['Technical Proposals', 'Vendor Management', 'Process Optimization', 'Engineering Design'],
      type: 'engineering'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'devops': return 'from-blue-500 to-cyan-500';
      case 'freelance': return 'from-purple-500 to-pink-500';
      case 'management': return 'from-green-500 to-emerald-500';
      case 'engineering': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="timeline" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Career Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            From engineering to project management to DevOps mastery
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-8 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

          {timelineData.map((item, index) => (
            <div
              key={`${item.role}-${item.company}`}
              className="relative mb-12"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Desktop Layout */}
              <div className={`hidden md:flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                {/* Timeline Node */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r ${getTypeColor(item.type)} rounded-full border-4 border-white dark:border-gray-900 z-10`}></div>

                {/* Content Card */}
                <div className={`w-5/12 ${
                  index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                }`}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                      <div
                        className={`p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 ${
                          index % 2 === 0 ? 'ml-auto mr-3' : 'mr-3'
                        }`}
                      >
                        <Briefcase size={20} />
                      </div>
                      <div className={index % 2 === 0 ? 'text-right' : 'text-left'}>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {item.role}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center mb-3 text-gray-600 dark:text-gray-400 text-sm">
                      <Calendar size={14} className="mr-2" />
                      <span className="font-medium mr-4">{item.period}</span>
                      <MapPin size={14} className="mr-2" />
                      <span>{item.location}</span>
                    </div>

                    <div className="mb-4 space-y-2">
                      {item.impact.map((achievement, idx) => (
                        <p key={idx} className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          • {achievement}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(item.type)} text-white rounded-full text-xs font-medium`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12"></div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden flex items-start">
                {/* Timeline Node */}
                <div className={`w-4 h-4 bg-gradient-to-r ${getTypeColor(item.type)} rounded-full border-4 border-white dark:border-gray-900 mt-6 mr-6 flex-shrink-0`}></div>

                {/* Content Card */}
                <div className="flex-1 min-w-0">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start mb-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0">
                        <Briefcase size={18} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                          {item.role}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    <div className="mb-3 text-gray-600 dark:text-gray-400 text-sm space-y-1">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-2 flex-shrink-0" />
                        <span className="font-medium">{item.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-2 flex-shrink-0" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <div className="mb-4 space-y-2">
                      {item.impact.map((achievement, idx) => (
                        <p key={idx} className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          • {achievement}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-2 py-1 bg-gradient-to-r ${getTypeColor(item.type)} text-white rounded-full text-xs font-medium`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">8+</div>
            <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
            <div className="flex items-center justify-center mb-3">
              <Briefcase className="text-purple-600 dark:text-purple-400" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-300">Projects Delivered</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">70%</div>
            <div className="text-gray-600 dark:text-gray-300">Automation Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;