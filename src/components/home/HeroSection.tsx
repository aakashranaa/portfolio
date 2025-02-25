import { motion } from "framer-motion";
import heroBg from '../../assets/profile/hero-bg.jpg';
import { useEffect, useState } from "react";

export default function LandingPage() {
  const titles = [
    "Software Engineer",
    "Runner",
    "Trekker",
    "Fitness Enthusiast"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-8 relative overflow-hidden">
      {/* Background Tech Animation */}
      <div style={{ backgroundImage: `url(${heroBg})` }} className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat blur-md" />


      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-8xl font-extrabold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent tracking-wide"
        >
          Aakash Rana
        </motion.h1>
        
        <motion.h2
          key={titles[index]}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          className="text-3xl mt-4 text-gray-300 tracking-wider"
        >
          {titles[index]}
        </motion.h2>

        {/* Animated CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 px-8 py-4 text-lg bg-gradient-to-r from-blue-500 to-teal-400 rounded-xl text-white font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore More →
        </motion.button>
      </div>
    </div>
  );
}
