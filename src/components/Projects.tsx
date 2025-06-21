import React from 'react';
import { Github, ExternalLink, Code, Server, Cloud } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl: string;
  icon: React.ReactNode;
  featured?: boolean;
  impact: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Scalable Web App Deployment on AWS',
      description: 'Dockerized frontend/backend application with automated CI/CD pipeline, health checks, and comprehensive monitoring setup.',
      stack: ['AWS', 'Docker', 'GitHub Actions', 'CloudWatch', 'EC2', 'S3'],
      githubUrl: 'https://github.com/premnikumbh/aws-web-deployment',
      liveUrl: 'https://webapp.premnikumbh.tech',
      icon: <Cloud size={24} />,
      featured: true,
      impact: 'Cut release time by 70%'
    },
    {
      title: 'Microservices on GKE with CI/CD & Monitoring',
      description: 'Complete microservices architecture on Google Kubernetes Engine with automated ETL pipeline, real-time monitoring, and alerting.',
      stack: ['GCP', 'GKE', 'BigQuery', 'Stackdriver', 'Grafana', 'Kubernetes'],
      githubUrl: 'https://github.com/premnikumbh/gke-microservices',
      liveUrl: 'https://microservices.premnikumbh.tech',
      icon: <Server size={24} />,
      featured: true,
      impact: 'Delivered real-time datasets daily'
    },
    {
      title: 'Marine DG Set Support Platform',
      description: 'Logistics and maintenance automation platform for marine diesel generator sets with proactive scheduling and monitoring.',
      stack: ['Automation', 'Scheduling', 'Monitoring', 'Logistics', 'Maintenance'],
      githubUrl: 'https://github.com/premnikumbh/marine-support',
      liveUrl: 'https://marine.premnikumbh.tech',
      icon: <Code size={24} />,
      impact: 'Reduced downtime by 50%'
    },
    {
      title: 'Multi-Cloud Infrastructure Automation',
      description: 'Terraform and Ansible-based infrastructure deployment across AWS, Azure, and GCP with standardized configurations.',
      stack: ['Terraform', 'Ansible', 'AWS', 'Azure', 'GCP', 'Multi-Cloud'],
      githubUrl: 'https://github.com/premnikumbh/multi-cloud-iac',
      liveUrl: 'https://infrastructure.premnikumbh.tech',
      icon: <Cloud size={24} />,
      impact: 'Improved uptime by 40%'
    },
    {
      title: 'CI/CD Pipeline Optimization',
      description: 'Jenkins and GitHub Actions pipeline optimization with automated testing, security scanning, and deployment strategies.',
      stack: ['Jenkins', 'GitHub Actions', 'Docker', 'Security Scanning', 'Testing'],
      githubUrl: 'https://github.com/premnikumbh/cicd-optimization',
      liveUrl: 'https://pipeline.premnikumbh.tech',
      icon: <Code size={24} />,
      impact: 'Cut deployment time by 65%'
    },
    {
      title: 'Monitoring & Alerting Stack',
      description: 'Comprehensive monitoring solution with Prometheus, Grafana, and CloudWatch integration for proactive incident management.',
      stack: ['Prometheus', 'Grafana', 'CloudWatch', 'Alerting', 'Monitoring'],
      githubUrl: 'https://github.com/premnikumbh/monitoring-stack',
      liveUrl: 'https://monitoring.premnikumbh.tech',
      icon: <Server size={24} />,
      impact: 'Reduced incidents by 60%'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Key Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-world DevOps solutions I've built to automate infrastructure, optimize deployments, and improve system reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden ${
                project.featured ? 'lg:col-span-1 ring-2 ring-blue-500/20' : ''
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  Featured
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                    📈 {project.impact}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 font-medium"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;