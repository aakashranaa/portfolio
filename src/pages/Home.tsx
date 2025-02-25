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
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>
        
        <section id="about" className="min-h-screen py-20">
          <About />
        </section>
        
        <section id="projects" className="min-h-screen py-20">
          <Projects />
        </section>
        
        <section id="bucket-list" className="min-h-screen py-20">
          <BucketList />
        </section>
        
        <section id="contact" className="min-h-screen py-20">
          <Contact />
        </section>
      </motion.div>
    </>
  );
};

export { Home };