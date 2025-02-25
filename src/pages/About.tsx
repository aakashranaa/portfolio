import { motion } from "framer-motion";
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
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-6xl"
      >
        {/* Intro Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 mb-6">
            Hey, I'm Aakash 👋
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Passionate Software Engineer with 3+ years of experience crafting digital excellence. 
            Specializing in backend development, cloud infrastructure, and AI-driven solutions. 
            My mission: Building scalable, efficient, and innovative technology solutions that make a difference.
          </p>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text relative">
              Professional Journey
              <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            </h2>
          </div>

          <div className="space-y-8">
            <motion.div 
              className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-blue-400">Software Engineer II @ EX Squared India</h3>
                <span className="text-teal-400 font-semibold">June 2021 - Present</span>
              </div>

              <div className="space-y-6">
                {['Autonomize AI', 'Nexus Utility', 'HomLuv'].map((project, index) => (
                  <motion.div
                    key={project}
                    className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 mb-4">
                      {project}
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                      {getProjectDetails(project).map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-teal-400 mr-2">→</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-blue-400">Problem Setter & Reviewer @ Coding Ninjas</h3>
                <span className="text-teal-400 font-semibold">Sept 2020 - Jan 2021</span>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-teal-400 mr-2">→</span>
                  Created and curated 50+ algorithmic challenges for CodeStudio platform
                </li>
                <li className="flex items-center">
                  <span className="text-teal-400 mr-2">→</span>
                  Enhanced problem statements for clarity and technical accuracy
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>



        {/* Skills Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold inline-block bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-transparent bg-clip-text relative">
              My Tech Arsenal ⚔️
              <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500"></div>
            </h2>
          </div>

          <div className="space-y-16">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-6">
                  {skill.category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {skill.items.map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 flex flex-col items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                      <span className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                        {item.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
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