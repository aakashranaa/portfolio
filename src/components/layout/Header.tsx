// src/components/layout/Header.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Track active section for navigation highlighting
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.3,
    };

    const handleIntersection = (entries: any) => {
      const visibleSections = entries
        .filter((entry: any) => entry.isIntersecting)
        .sort((a: any, b: any) => b.intersectionRatio - a.intersectionRatio);
      
      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0].target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  
  // Navigation items
  const navItems = [
    { id: 'hero', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'bucket-list', label: 'Bucket List', path: '/bucket-list' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-blue-500/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <div key={item.id} className="relative group">
                <Link 
                  to={item.path}
                  onClick={(e) => {
                    // If we're already on the homepage, scroll to section instead
                    if (window.location.pathname === '/' || window.location.pathname === '') {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }
                  }}
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-400 font-semibold' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
                
                {/* Bottom highlight bar */}
                <span 
                  className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 transform transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'scale-x-100' 
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`} 
                />
                
                {/* Glow effect for active item */}
                {activeSection === item.id && (
                  <motion.span 
                    className="absolute inset-0 -z-10 bg-blue-500/10 rounded-md blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    layoutId="navHighlight"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile menu (hidden by default) */}
      {/* Add mobile menu implementation here */}
    </motion.header>
  );
};

export default Header;