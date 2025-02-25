import { motion } from "framer-motion";
import { useState } from "react";
import { SiTypescript, SiSharp, SiReact, SiJavascript, SiCplusplus, SiPython, SiNodedotjs, SiNestjs, SiDotnet, SiFastapi, SiRedis, SiApachekafka, SiGraphql, SiMysql, SiPostgresql, SiMongodb, SiElasticsearch, SiAmazon, SiKubernetes, SiDocker, SiJenkins, SiArgo, SiOctopusdeploy } from "react-icons/si";

// Skills data remains the same as your original
const skills = [
    { category: "Programming Languages", items: [
      { name: "TypeScript", icon: <SiTypescript />, link: "https://www.typescriptlang.org/" },
      { name: "C#", icon: <SiSharp />, link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
      { name: "JavaScript", icon: <SiJavascript />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "C++", icon: <SiCplusplus />, link: "https://isocpp.org/" },
      { name: "Python", icon: <SiPython />, link: "https://www.python.org/" }
    ]},
    { category: "Backend Technologies", items: [
      { name: "Node.js", icon: <SiNodedotjs />, link: "https://nodejs.org/" },
      { name: "Nest.js", icon: <SiNestjs />, link: "https://nestjs.com/" },
      { name: ".NET", icon: <SiDotnet />, link: "https://dotnet.microsoft.com/" },
      { name: "FastAPI", icon: <SiFastapi />, link: "https://fastapi.tiangolo.com/" },
      { name: "Redis", icon: <SiRedis />, link: "https://redis.io/" },
      { name: "Kafka", icon: <SiApachekafka />, link: "https://kafka.apache.org/" }
    ]},
    { category: "Frontend Technologies", items: [
      { name: "React", icon: <SiReact />, link: "https://react.dev/" },
      { name: "GraphQL", icon: <SiGraphql />, link: "https://graphql.org/" }
    ]},
    { category: "Databases", items: [
      { name: "MySQL", icon: <SiMysql />, link: "https://www.mysql.com/" },
      { name: "PostgreSQL", icon: <SiPostgresql />, link: "https://www.postgresql.org/" },
      { name: "MongoDB", icon: <SiMongodb />, link: "https://www.mongodb.com/" },
      { name: "ElasticSearch", icon: <SiElasticsearch />, link: "https://www.elastic.co/elasticsearch/" }
    ]},
    { category: "Cloud & DevOps", items: [
      { name: "AWS", icon: <SiAmazon />, link: "https://aws.amazon.com/" },
      { name: "Azure", icon: <SiAmazon />, link: "https://azure.microsoft.com/" },
      { name: "Kubernetes", icon: <SiKubernetes />, link: "https://kubernetes.io/" },
      { name: "Docker", icon: <SiDocker />, link: "https://www.docker.com/" },
      { name: "Jenkins", icon: <SiJenkins />, link: "https://www.jenkins.io/" },
      { name: "ArgoCD", icon: <SiArgo />, link: "https://argo-cd.readthedocs.io/en/stable/" },
      { name: "Octopus", icon: <SiOctopusdeploy />, link: "https://octopus.com/" }
    ]}
  ];

const About = () => {
  const [activeProject, setActiveProject] = useState('Autonomize AI');

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-6xl"
      >
        {/* Intro Section with Floating Elements Background */}
        <motion.div
          className="text-center mb-24 relative"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 30 - 15],
                  y: [0, Math.random() * 30 - 15],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: Math.random() * 5 + 5,
                }}
              />
            ))}
          </div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hey, I'm Aakash 👋
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Passionate Software Engineer with 3+ years of experience crafting digital excellence. 
            Specializing in backend development, cloud infrastructure, and AI-driven solutions. 
            My mission: Building scalable, efficient, and innovative technology solutions that make a difference.
          </motion.p>
        </motion.div>

        {/* Experience Section with Enhanced Timeline */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl font-bold inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Professional Journey
              <motion.div 
                className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 0.5 }}
              ></motion.div>
            </motion.h2>
          </div>

          {/* Main Timeline Component */}
          <div className="grid md:grid-cols-[1fr,4px,1fr] gap-6 md:gap-12 relative">
            {/* Timeline center line */}
            <div className="hidden md:block md:col-start-2 md:col-end-3 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 rounded-full relative z-10">
              {/* Timeline dots */}
              <motion.div 
                className="absolute top-0 left-1/2 w-6 h-6 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-blue-500/50"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />
              <motion.div 
                className="absolute top-1/2 left-1/2 w-6 h-6 bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-purple-500/50"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              />
              <motion.div 
                className="absolute bottom-0 left-1/2 w-6 h-6 bg-teal-500 rounded-full -translate-x-1/2 translate-y-1/2 shadow-lg shadow-teal-500/50"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              />
            </div>

            {/* Column 1 - Current Job */}
            <motion.div 
              className="md:col-start-1 md:col-end-2 md:text-right space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-gray-700/50 h-full">
                <div className="flex flex-col md:items-end justify-between mb-6">
                  <motion.h3 
                    className="text-2xl font-bold text-blue-400"
                    whileHover={{ 
                      textShadow: "0 0 8px rgba(96, 165, 250, 0.8)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    Software Engineer II
                  </motion.h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 rounded-full text-sm font-semibold">
                      EX Squared India
                    </span>
                  </div>
                  <span className="text-teal-400 font-semibold mt-3">June 2021 - Present</span>
                </div>

                {/* Project Tabs */}
                <div className="flex flex-wrap md:justify-end gap-2 mb-6">
                  {['Autonomize AI', 'Nexus Utility', 'HomLuv'].map((project) => (
                    <motion.button
                      key={project}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeProject === project 
                          ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white" 
                          : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                      }`}
                      onClick={() => setActiveProject(project)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {project}
                    </motion.button>
                  ))}
                </div>

                {/* Project Details */}
                <div className="relative overflow-hidden min-h-[12rem]">
                  {['Autonomize AI', 'Nexus Utility', 'HomLuv'].map((project) => (
                    <motion.div
                      key={project}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ 
                        opacity: activeProject === project ? 1 : 0,
                        x: activeProject === project ? 0 : 50,
                        pointerEvents: activeProject === project ? "all" : "none"
                      }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-0 left-0 w-full"
                    >
                      <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 mb-4 md:text-right">
                        {project}
                      </h4>
                      <ul className="space-y-3 text-gray-300">
                        {getProjectDetails(project).map((detail, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start md:justify-end gap-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                          >
                            <span className="text-teal-400 md:order-2">←</span>
                            <span className="md:text-right">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Empty column for mobile layout */}
            <div className="md:hidden"></div>

            {/* Column 3 - Previous Role */}
            <motion.div 
              className="md:col-start-3 md:col-end-4 space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div 
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-gray-700/50"
                whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex flex-col justify-between mb-6">
                  <motion.h3 
                    className="text-2xl font-bold text-blue-400"
                    whileHover={{ 
                      textShadow: "0 0 8px rgba(96, 165, 250, 0.8)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    Problem Setter & Reviewer
                  </motion.h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 rounded-full text-sm font-semibold">
                      Coding Ninjas
                    </span>
                  </div>
                  <span className="text-teal-400 font-semibold mt-3">Sept 2020 - Jan 2021</span>
                </div>
                
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Created and curated 50+ algorithmic challenges for CodeStudio platform",
                    "Enhanced problem statements for clarity and technical accuracy",
                    "Developed test cases ensuring comprehensive code validation",
                    "Authored comprehensive solution approaches with time/space complexity analysis"
                  ].map((detail, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + (i * 0.1), duration: 0.4 }}
                    >
                      <span className="text-teal-400 text-lg">→</span>
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Additional achievements card */}
              <motion.div 
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
              >
                <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-3">
                  Key Achievement Highlights
                </h4>
                <motion.div 
                  className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-3 rounded-lg mb-3"
                  whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                >
                  <span className="font-medium text-blue-300">99.9% Uptime</span>
                  <span className="text-gray-400 block text-sm">For microservices architecture</span>
                </motion.div>
                <motion.div 
                  className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-3 rounded-lg mb-3"
                  whileHover={{ backgroundColor: "rgba(168, 85, 247, 0.2)" }}
                >
                  <span className="font-medium text-purple-300">40% Performance</span>
                  <span className="text-gray-400 block text-sm">Improvement in API response time</span>
                </motion.div>
                <motion.div 
                  className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 p-3 rounded-lg"
                  whileHover={{ backgroundColor: "rgba(20, 184, 166, 0.2)" }}
                >
                  <span className="font-medium text-teal-300">85% Accuracy</span>
                  <span className="text-gray-400 block text-sm">In ML recommendation systems</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Section */}
        {/* Skills Section - Enhanced Version */}
<section className="py-20 relative">
  {/* Background elements */}
  <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-70 z-0"></div>
  
  {/* Instead of using an external SVG, we'll create a pattern with CSS */}
  <div className="absolute inset-0 opacity-10 z-0" 
       style={{
         backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
         backgroundSize: '30px 30px'
       }}>
  </div>
  
  {/* Floating particles animation */}
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(15)].map((_, i) => (
      <div 
        key={i}
        className="absolute rounded-full bg-blue-500/20 animate-float"
        style={{
          width: `${Math.random() * 60 + 20}px`,
          height: `${Math.random() * 60 + 20}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 15 + 10}s`,
          animationDelay: `${Math.random() * 5}s`,
          opacity: Math.random() * 0.5 + 0.1
        }}
      />
    ))}
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16">
      <motion.h2 
        className="text-4xl md:text-5xl font-extrabold inline-block relative"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
          Technical Expertise
        </span>
        <motion.div 
          className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
        />
      </motion.h2>
    </div>

    {/* Skills Categories */}
    <div className="space-y-16">
      {skills.map((category, catIndex) => (
        <motion.div
          key={catIndex}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: catIndex * 0.1 }}
          className="skill-category"
        >
          <div className="flex items-center gap-4 mb-8">
            <motion.h3 
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {category.category}
            </motion.h3>
            <div className="h-px flex-grow bg-gradient-to-r from-blue-500/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {category.items.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: skillIndex * 0.05, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                  {/* Color gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-500"></div>
                  
                  {/* Skill content */}
                  <div className="p-4 flex flex-col items-center justify-center relative z-10">
                    <div className="text-3xl mb-3 text-gray-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      </motion.div>
    </section>
  );
};

// Helper function to get project details
const getProjectDetails = (project: string) => {
  switch (project) {
    case 'Autonomize AI':
      return [
        "Engineered advanced agentic workflows achieving 40% improvement in task automation efficiency",
        "Integrated Langchain with OpenAI, resulting in 25% enhanced NLP accuracy",
        "Architected scalable database solutions handling 10M+ daily transactions",
        "Optimized real-time data pipelines processing 1000+ events/second using Kafka"
      ];
    case 'Nexus Utility':
      return [
        "Led microservices architecture design using Docker & K8s, achieving 99.9% uptime",
        "Developed responsive admin dashboard with 30% improved user engagement",
        "Implemented RBAC system reducing unauthorized access attempts by 95%",
        "Created automated report scheduler handling 10K+ daily report generations"
      ];
    case 'HomLuv':
      return [
        "Successfully migrated legacy .NET Core 2.2 to .NET 6 with zero downtime",
        "Designed BFF architecture reducing API response time by 40%",
        "Built ML-powered recommendation system with 85% accuracy",
        "Optimized Elasticsearch achieving 20% faster search response"
      ];
    default:
      return [];
  }
};

export default About;