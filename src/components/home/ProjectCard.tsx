import { motion } from "framer-motion";
import { Github, Globe, Rocket, ArrowUpRight } from "lucide-react";

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

export const ProjectCard = ({ project }: any) => (
    <motion.div
      variants={itemVariants}
      className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border border-gray-700/50 backdrop-blur-sm
                 hover:border-gray-600/50 hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-300"
    >
      <div className="relative overflow-hidden group">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60" />
        <div className="absolute top-4 right-4 bg-gray-900/90 px-3 py-1 rounded-full text-sm text-gray-300">
          {project.type}
        </div>
      </div>
  
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
  
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {project.highlights.map((highlight: any, index: any) => (
              <li key={index} className="text-gray-400 text-sm flex items-center">
                <Rocket className="w-4 h-4 mr-2 text-yellow-500" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
  
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: any, index: any) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-700/30 rounded-full text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
  
        <div className="flex justify-between items-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            {project.link.includes('github') ? (
              <>
                <Github className="w-5 h-5 mr-2" />
                View Source
              </>
            ) : (
              <>
                <Globe className="w-5 h-5 mr-2" />
                Visit Site
              </>
            )}
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );