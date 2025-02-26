import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import About from './About';
import Projects from './Projects';
import BucketList from './BucketList';
import { Contact } from './Contact';
import Hero from './Hero';

const Home = () => {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div id="hero" className="min-h-screen">
          <Hero />
        </div>
        
        <div id="about" className="min-h-screen">
          <About />
        </div>
        
        <div id="projects" className="min-h-screen">
          <Projects />
        </div>
        
        <div id="bucket-list" className="min-h-screen">
          <BucketList />
        </div>
        
        <div id="contact" className="min-h-screen">
          <Contact />
        </div>
      </motion.div>
    </>
  );
};

export { Home };