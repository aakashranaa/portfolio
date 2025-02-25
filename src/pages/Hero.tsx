import { motion } from "framer-motion";
import heroBg from '../assets/profile/hero-bg.jpg';
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleExploreClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-between items-center px-8 relative overflow-hidden">
      {/* Background Tech Animation */}
      <div style={{ backgroundImage: `url(${heroBg})` }} className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat blur-md" />

      {/* Middle Content */}
      <div className="flex-grow flex items-center justify-center w-full">
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-8xl font-extrabold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent tracking-wide"
          >
            Aakash Rana
          </motion.h1>
          
          <motion.div
            className="h-16 mt-4 flex items-center justify-center overflow-hidden"
          >
            <motion.h2
              key={titles[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 tracking-widest font-mono uppercase"
            >
              {titles[index]}
            </motion.h2>
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA Button */}
      <motion.div 
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.button
          onClick={handleExploreClick}
          className="px-8 py-3 text-lg bg-gradient-to-r from-blue-500 to-teal-400 rounded-xl text-white font-semibold tracking-wide transition-all duration-300 flex items-center space-x-2 hover:shadow-lg hover:shadow-blue-500/20"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2), 0 10px 10px -5px rgba(59, 130, 246, 0.1)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Explore More</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut" 
            }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}