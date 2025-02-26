import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, Star, Eye, Code, Layers, Award, Zap } from 'lucide-react';

const projects = [
    {
      title: 'Government of Punjab RESCO Portal',
      description: 'Developed a comprehensive web portal for the Renewable Energy Service Company (RESCO) initiative of Punjab government. The platform facilitates solar project management and renewable energy initiatives.',
      longDescription: 'A state-of-the-art platform that streamlines the process of solar project implementation across Punjab. Features include project registration, tracking, automated workflow management, and real-time reporting dashboards.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
      type: 'Government Project',
      link: 'https://resco.punjab.gov.in',
      github: 'https://github.com/yourusername/resco-portal',
      featured: true,
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
      link: 'https://ecommerce-demo.com',
      github: 'https://github.com/yourusername/ecommerce',
      featured: true,
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
      link: 'https://task-manager-demo.com',
      github: 'https://github.com/yourusername/task-manager',
      featured: false,
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
      github: 'https://github.com/yourusername/portfolio',
      featured: false,
      highlights: [
        'Custom animations and transitions',
        'Responsive design',
        'Dark mode support',
        'Performance optimized'
      ]
    }
];

// Icons for project types
const projectTypeIcons: any = {
  'Government Project': <Award className="w-5 h-5" />,
  'Full Stack Application': <Layers className="w-5 h-5" />,
  'Web Application': <Code className="w-5 h-5" />,
  'Personal Project': <Star className="w-5 h-5" />
};

const ProjectCard = ({ project }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const TypeIcon = projectTypeIcons[project.type] || <Code className="w-5 h-5" />;

  return (
    <div 
      className={`
        group relative bg-gradient-to-br from-gray-800/80 via-gray-800/70 to-gray-900/90
        backdrop-blur-lg rounded-xl overflow-hidden
        border border-blue-500/20
        transition-all duration-500 ease-out
        ${isHovered ? 'border-blue-500/60 shadow-xl shadow-blue-500/10 scale-102 -translate-y-1' : ''}
        ${project.featured ? 'lg:col-span-2' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full z-10 flex items-center gap-1">
          <Star className="w-3 h-3 fill-white" />
          FEATURED
        </div>
      )}
      
      {/* Glow effect on hover */}
      <div className={`
        absolute inset-0 opacity-0 transition-opacity duration-700
        bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-teal-500/5
        ${isHovered ? 'opacity-100' : ''}
      `}></div>
      
      <div className="p-6 md:p-8">
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                {TypeIcon}
              </div>
              <span className="text-sm font-medium text-blue-400">
                {project.type}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
              {project.title}
            </h3>
          </div>
          
          {/* Project image */}
          <div className="w-full md:w-1/3 h-32 rounded-lg overflow-hidden border border-gray-700/50">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </div>
        </div>
        
        {/* Description - toggles between short and long */}
        <div className="relative overflow-hidden transition-all duration-500 ease-in-out">
          <p className={`text-gray-300 mb-6 transition-opacity duration-500 ${isExpanded ? 'hidden' : 'block'}`}>
            {project.description}
          </p>
          <p className={`text-gray-300 mb-6 transition-opacity duration-500 ${isExpanded ? 'block' : 'hidden'}`}>
            {project.longDescription}
          </p>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-blue-400 hover:text-blue-300 focus:outline-none mb-6"
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        </div>
        
        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-gray-400 text-sm font-medium mb-3">TECHNOLOGIES</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: any, index: any) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 rounded-full border border-cyan-500/20 transition-all duration-300 hover:border-cyan-500/40"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Highlights */}
        <div className="mb-6">
          <h4 className="text-gray-400 text-sm font-medium mb-3">KEY FEATURES</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {project.highlights.map((highlight: any, index: any) => (
              <div 
                key={index} 
                className="flex items-center text-gray-300 group/highlight p-2 rounded-lg hover:bg-gray-700/20 transition-colors duration-300"
              >
                <Zap className="w-4 h-4 text-teal-400 mr-2 transition-transform duration-300 group-hover/highlight:scale-125" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
          >
            <Eye className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
          
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-gray-700/50 hover:bg-gray-700/80 text-gray-300 hover:text-white rounded-lg border border-gray-600/50 transition-all duration-300 hover:border-gray-500 hover:-translate-y-1"
          >
            <Github className="w-4 h-4" />
            <span>Source Code</span>
          </a>
        </div>
      </div>
      
      {/* Progress bar at bottom for visual flair */}
      <div className={`
        absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 transition-all duration-700 ease-out
        ${isHovered ? 'w-full' : 'w-0'}
      `}></div>
    </div>
  );
};

const Projects = () => {
  // Filter featured projects to show at top
  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header with animated elements */}
        <div className="text-center mb-20 relative">
          <div className="inline-block relative">
            <span className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></span>
            <span className="absolute -bottom-10 -right-10 w-20 h-20 bg-teal-500/10 rounded-full blur-xl"></span>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 relative">
              Featured Projects
              <span className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500"></span>
            </h2>
          </div>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-8">
            A showcase of my recent work in web development, ranging from government portals to personal projects.
            Each project represents a unique challenge and innovative solution.
          </p>
        </div>
        
        {/* Project filter buttons - can be implemented for filtering functionality */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-2 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-300">
            All Projects
          </button>
          <button className="px-6 py-2 rounded-full bg-gray-800/50 text-gray-400 border border-gray-700/30 hover:bg-gray-700/50 transition-colors duration-300">
            Web Apps
          </button>
          <button className="px-6 py-2 rounded-full bg-gray-800/50 text-gray-400 border border-gray-700/30 hover:bg-gray-700/50 transition-colors duration-300">
            Full Stack
          </button>
          <button className="px-6 py-2 rounded-full bg-gray-800/50 text-gray-400 border border-gray-700/30 hover:bg-gray-700/50 transition-colors duration-300">
            Government
          </button>
        </div>

        {/* Featured projects section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={`featured-${index}`} project={project} />
          ))}
        </div>
        
        {/* Section divider */}
        <div className="relative flex items-center py-8 mb-12">
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          <span className="px-6 text-gray-500 text-lg font-medium">More Projects</span>
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>

        {/* Regular projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {regularProjects.map((project, index) => (
            <ProjectCard key={`regular-${index}`} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;