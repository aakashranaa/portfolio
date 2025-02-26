import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMapPin, FiExternalLink, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '' // Added subject field
  });
  const [errors, setErrors]: any = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [focusedField, setFocusedField] = useState(null);

  // Add typing animation effect
  const [typingEffect, setTypingEffect] = useState('');
  const fullText = "Ready to bring your ideas to life? Let's create something amazing together!";
  
  useEffect(() => {
    if (typingEffect.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypingEffect(fullText.slice(0, typingEffect.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [typingEffect]);

  useEffect(() => {
    setTypingEffect('');
  }, []);

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setErrors({});
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormData({ name: '', email: '', message: '', subject: '' });
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev: any) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFocus = (field: any) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  // Staggered animation for form fields
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Success/Error message animations
  const statusVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            initial={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 255)}, 0.05)`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="inline-block mb-6"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>
          
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6"
          >
            Let's Create Something Amazing
          </motion.h2>
          
          <motion.p className="text-xl text-gray-300 h-8">
            {typingEffect}
            <span className="animate-pulse">|</span>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/80 backdrop-blur-sm p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-700/50 hover:border-gray-600/50 transition-all"
          >
            <div className="space-y-8">
              {/* Freelance Status - Highlighted */}
              <motion.div 
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20"
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <h3 className="text-xl font-bold text-blue-400">Available for Freelance</h3>
                </div>
                <p className="text-gray-300 mt-2">Currently accepting new projects and collaborations</p>
              </motion.div>

              <div className="flex items-center space-x-4">
                <motion.div 
                  className="p-3 bg-blue-500/20 rounded-full"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                >
                  <FiMail className="w-6 h-6 text-blue-400" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200">Email</h3>
                  <motion.a 
                    href="mailto:aakash05rana@gmail.com" 
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    aakash05rana@gmail.com
                    <FiExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <motion.div 
                  className="p-3 bg-purple-500/20 rounded-full"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(168, 85, 247, 0.3)" }}
                >
                  <FiMapPin className="w-6 h-6 text-purple-400" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200">Location</h3>
                  <p className="text-gray-400">Gurgaon, India</p>
                </div>
              </div>

              {/* Project Timeline */}
              <div className="mt-8 pt-8 border-t border-gray-700/50">
                <h3 className="text-lg font-semibold text-gray-200 mb-4">Typical Project Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-400 font-semibold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Project Discussion</h4>
                      <p className="text-gray-400 text-sm">Initial consultation to understand requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-400 font-semibold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Proposal & Planning</h4>
                      <p className="text-gray-400 text-sm">Timeline, deliverables, and milestones</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-400 font-semibold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Development</h4>
                      <p className="text-gray-400 text-sm">Regular updates with collaborative feedback</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-400 font-semibold">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Delivery & Support</h4>
                      <p className="text-gray-400 text-sm">Final delivery with ongoing support options</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-700/50">
                <h3 className="text-lg font-semibold text-gray-200 mb-4">Connect With Me</h3>
                <div className="flex space-x-6">
                  <motion.a 
                    whileHover={{ 
                      scale: 1.2, 
                      color: "#ffffff",
                      transition: { duration: 0.2 } 
                    }} 
                    className="cursor-pointer"
                    href="#"
                  >
                    <FaGithub className="w-8 h-8 text-gray-400 transition-colors" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ 
                      scale: 1.2, 
                      color: "#0077b5",
                      transition: { duration: 0.2 } 
                    }} 
                    className="cursor-pointer"
                    href="#"
                  >
                    <FaLinkedin className="w-8 h-8 text-gray-400 transition-colors" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ 
                      scale: 1.2, 
                      color: "#1DA1F2",
                      transition: { duration: 0.2 } 
                    }} 
                    className="cursor-pointer"
                    href="#"
                  >
                    <FaTwitter className="w-8 h-8 text-gray-400 transition-colors" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800/80 backdrop-blur-sm p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-700/50 hover:border-gray-600/50 transition-all"
          >
            <motion.form
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div 
                    className="bg-green-500/20 border border-green-500/30 text-green-400 p-4 rounded-lg flex items-center space-x-3"
                    variants={statusVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <FiCheck className="w-5 h-5 flex-shrink-0" />
                    <p>Your message has been sent successfully! I'll get back to you soon.</p>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div 
                    className="bg-red-500/20 border border-red-500/30 text-red-400 p-4 rounded-lg flex items-center space-x-3"
                    variants={statusVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p>There was an error sending your message. Please try again.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  className={`relative rounded-lg overflow-hidden ${focusedField === 'name' ? 'ring-2 ring-blue-500' : ''}`}
                >
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 text-gray-200 rounded-lg focus:outline-none transition-all"
                    placeholder="Your name"
                  />
                  {focusedField === 'name' && (
                    <motion.span
                      layoutId="focus-border"
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
                {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  className={`relative rounded-lg overflow-hidden ${focusedField === 'email' ? 'ring-2 ring-blue-500' : ''}`}
                >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 text-gray-200 rounded-lg focus:outline-none transition-all"
                    placeholder="your@email.com"
                  />
                  {focusedField === 'email' && (
                    <motion.span
                      layoutId="focus-border"
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
                {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  className={`relative rounded-lg overflow-hidden ${focusedField === 'subject' ? 'ring-2 ring-blue-500' : ''}`}
                >
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 text-gray-200 rounded-lg focus:outline-none transition-all"
                    placeholder="What's this about?"
                  />
                  {focusedField === 'subject' && (
                    <motion.span
                      layoutId="focus-border"
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
                {errors.subject && <p className="mt-2 text-sm text-red-400">{errors.subject}</p>}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  className={`relative rounded-lg overflow-hidden ${focusedField === 'message' ? 'ring-2 ring-blue-500' : ''}`}
                >
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 text-gray-200 rounded-lg focus:outline-none transition-all"
                    placeholder="Tell me about your project..."
                  />
                  {focusedField === 'message' && (
                    <motion.span
                      layoutId="focus-border"
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
                {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message}</p>}
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-2 font-medium"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;