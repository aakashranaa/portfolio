import React, { useState } from 'react';
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const projects = [
    {
      title: 'Government of Punjab RESCO Portal',
      description: 'Developed a comprehensive web portal for the Renewable Energy Service Company (RESCO) initiative of Punjab government. The platform facilitates solar project management and renewable energy initiatives.',
      longDescription: 'A state-of-the-art platform that streamlines the process of solar project implementation across Punjab. Features include project registration, tracking, automated workflow management, and real-time reporting dashboards.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
      type: 'Government Project',
      link: 'https://resco.punjab.gov.in',
      highlights: [
        'Automated workflow management system',
        'Real-time project tracking dashboard',
        'Integrated payment gateway',
        'Document verification system'
      ]
    },
    {
      title: 'E-Commerce Platform',
      description: 'A scalable e-commerce solution built with modern technologies, featuring real-time inventory management and seamless payment processing.',
      longDescription: 'Full-stack e-commerce platform with advanced features including real-time inventory tracking, multi-vendor support, and analytics dashboard. Implements secure payment processing and order management.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      type: 'Full Stack Application',
      link: 'https://github.com/yourusername/project1',
      highlights: [
        'Real-time inventory management',
        'Multi-vendor support',
        'Advanced analytics dashboard',
        'Secure payment processing'
      ]
    },
    {
      title: 'Task Management System',
      description: 'Real-time collaborative task management application with team workflow optimization features.',
      longDescription: 'A sophisticated task management system designed for team collaboration. Includes real-time updates, customizable workflows, and detailed analytics for team productivity tracking.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'WebSocket'],
      type: 'Web Application',
      link: 'https://github.com/yourusername/project2',
      highlights: [
        'Real-time collaboration',
        'Custom workflow builder',
        'Team analytics dashboard',
        'Integration capabilities'
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing professional experience and projects with interactive elements.',
      longDescription: 'A personally crafted portfolio website built with modern web technologies. Features smooth animations, responsive design, and interactive elements to showcase projects and skills effectively.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
      type: 'Personal Project',
      link: 'https://yourportfolio.com',
      highlights: [
        'Custom animations and transitions',
        'Responsive design',
        'Dark mode support',
        'Performance optimized'
      ]
    }
  ];

const ProjectCard = ({ project }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="group"
    >
      <div
        className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/10 hover:border-blue-500/30 transition-all duration-500"
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              {project.title}
            </h3>
            <span className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full">
              {project.type}
            </span>
          </div>

          <p className="text-gray-400 mb-6">
            {isHovered ? project.longDescription : project.description}
          </p>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: any, index: any) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-gray-700/50 text-teal-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-2">
              {project.highlights.map((highlight: any, index: any) => (
                <div key={index} className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 text-teal-400 mr-2" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </motion.a>
            
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-700/30 hover:bg-gray-700/50 text-gray-300 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Featured Projects
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500"></div>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work in web development, ranging from government portals to personal projects.
            Each project represents a unique challenge and innovative solution.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project: any, index: any) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;