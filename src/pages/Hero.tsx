import { motion, AnimatePresence } from "framer-motion";
import heroBg from '../assets/profile/hero-bg.jpg';
import { useEffect, useState, useRef } from "react";
import { ChevronDown, Code, Mountain, Coffee, Brain, Zap, Heart } from "lucide-react";

export default function LandingPage() {
  const titles = [
    "Software Engineer",
    "Explorer",
    "Relentless",
    "Problem Solver",
    "Runner",
    "Endorphin Junkie",
    "Summit Chaser",
    "Trail Tamer"
  ];
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // For particle animation
  const containerRef = useRef(null);
  const [particles, setParticles]: any = useState([]);
  
  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Create particles on component mount - responsive to device
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 25 : 50;
    
    const newParticles = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        speed: Math.random() * 0.5 + 0.2
      });
    }
    setParticles(newParticles);
  }, []);

  // Title animation interval
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Increased time for better readability
    return () => clearInterval(interval);
  }, []);

  const handleExploreClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Tech icons that float around
  const techIcons = [
    { Icon: Code, color: "#61DAFB" },
    { Icon: Mountain, color: "#FF6B6B" },
    { Icon: Brain, color: "#A78BFA" },
    { Icon: Coffee, color: "#FBBF24" },
    { Icon: Zap, color: "#34D399" },
    { Icon: Heart, color: "#EC4899" }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between items-center px-4 sm:px-8 relative overflow-hidden">
      {/* Background with animated particles */}
      <div style={{ backgroundImage: `url(${heroBg})` }} className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat blur-md" />
      
      {/* Animated particle overlay with improved animation and mouse interactivity */}
      <div ref={containerRef} className="icons-container">
        {particles.map((particle: any) => (
          <motion.div
            key={particle.id}
            className="icon-element"
            initial={{
              x: `${particle.x}%`,
              y: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
            }}
            animate={{
              x: [`${particle.x}%`, `${(particle.x + 5 + mousePosition.x * 3) % 100}%`],
              y: [`${particle.y}%`, `${(particle.y + 10 + mousePosition.y * 3) % 100}%`],
              opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity],
            }}
            transition={{
              duration: 5 / particle.speed,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Floating tech icons - improved distribution and sizing */}
      <div className="icons-container">
        {techIcons.map((tech, i) => (
          <motion.div
            key={i}
            className="icon-element"
            initial={{
              x: `${i * (100 / techIcons.length)}%`,
              y: `${20 + (i % 3) * 20}%`,
              opacity: 0.4,
            }}
            animate={{
              x: [`${i * (100 / techIcons.length)}%`, `${((i + 2) * (100 / techIcons.length)) % 100}%`],
              y: [`${20 + (i % 3) * 20}%`, `${20 + ((i + 1) % 3) * 20}%`],
              opacity: [0.4, 0.7, 0.4],
              rotate: [0, i % 2 === 0 ? 360 : -360]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <tech.Icon size={18 + (i % 3) * 8} color={tech.color} />
          </motion.div>
        ))}
      </div>

      {/* Middle Content */}
      <div className="flex-grow flex items-center justify-center w-full relative z-10">
        <div className="text-center">
          {/* Name with animated reveal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 bg-black z-10"
            />
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-wide font-sans text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
              Aakash Rana
            </h1>
          </motion.div>
          
          {/* Animated underline */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "40%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"
          />
          
          {/* Animated titles with improved animation */}
          <div className="h-16 sm:h-20 mt-6 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h2
                key={titles[index]}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.22, 1, 0.36, 1] // Custom ease curve for more dynamic motion
                }}
                className="text-2xl md:text-3xl font-bold tracking-wider uppercase"
                style={{
                  fontFamily: "'Space Mono', monospace", // More tech-looking font
                  background: "linear-gradient(90deg, rgba(168,85,247,1) 0%, rgba(236,72,153,1) 50%, rgba(248,113,113,1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "200% auto",
                  animation: "gradientShift 3s ease infinite"
                }}
              >
                {titles[index]}
              </motion.h2>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom CTA Button with improved animation */}
      <motion.div 
        className="mb-8 sm:mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.button
          onClick={handleExploreClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl text-white font-bold tracking-wide overflow-hidden"
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Button background with animated gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 rounded-xl"
            animate={{ 
              backgroundPosition: isHovered ? "100% 0%" : "0% 0%",
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ backgroundSize: "200% 100%" }}
          />
          
          {/* Glow effect on hover */}
          <motion.div 
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              boxShadow: "0 0 25px 3px rgba(56, 189, 248, 0.6)",
            }}
          />
          
          {/* Button content with improved bounce animation */}
          <span className="relative z-10 flex items-center justify-center gap-2">
            <span>Explore More</span>
            <motion.div
              animate={{ 
                y: isHovered ? [0, 5, 0] : [0, 3, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: isHovered ? 1 : 2,
                ease: "easeInOut"
              }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </span>
        </motion.button>
      </motion.div>
      
    </div>
  );
}