import React from 'react';
import { 
  Cloud, 
  Container, 
  GitBranch, 
  Server, 
  Shield, 
  Terminal, 
  Database, 
  Zap, 
  Settings,
  Monitor,
  Network,
  Users
} from 'lucide-react';

interface Skill {
  name: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      name: 'Jenkins',
      description: 'CI/CD pipeline automation and build orchestration',
      icon: <GitBranch size={32} />,
      category: 'CI/CD'
    },
    {
      name: 'GitHub Actions',
      description: 'Automated workflows and deployment pipelines',
      icon: <Zap size={32} />,
      category: 'CI/CD'
    },
    {
      name: 'Docker',
      description: 'Containerization and microservices orchestration',
      icon: <Container size={32} />,
      category: 'Containerization'
    },
    {
      name: 'Kubernetes',
      description: 'Container orchestration and cluster management',
      icon: <Settings size={32} />,
      category: 'Orchestration'
    },
    {
      name: 'Terraform',
      description: 'Infrastructure as Code and automation',
      icon: <Server size={32} />,
      category: 'IaC'
    },
    {
      name: 'Ansible',
      description: 'Configuration management and automation',
      icon: <Terminal size={32} />,
      category: 'Automation'
    },
    {
      name: 'AWS',
      description: 'EC2, VPC, S3, IAM, CloudFormation services',
      icon: <Cloud size={32} />,
      category: 'Cloud'
    },
    {
      name: 'Prometheus',
      description: 'Monitoring, alerting, and observability',
      icon: <Monitor size={32} />,
      category: 'Monitoring'
    },
    {
      name: 'Grafana',
      description: 'Data visualization and dashboard creation',
      icon: <Database size={32} />,
      category: 'Monitoring'
    },
    {
      name: 'Bash Scripting',
      description: 'Linux automation and system administration',
      icon: <Terminal size={32} />,
      category: 'Scripting'
    },
    {
      name: 'Networking',
      description: 'TCP/IP, DNS, OSI Model fundamentals',
      icon: <Network size={32} />,
      category: 'Infrastructure'
    },
    {
      name: 'Project Management',
      description: 'Risk management, stakeholder coordination',
      icon: <Users size={32} />,
      category: 'Management'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            DevOps Toolbox
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to automate cloud infrastructure, build CI/CD pipelines, and optimize system reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {skill.category}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;