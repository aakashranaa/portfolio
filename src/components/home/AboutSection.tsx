// import { motion } from "framer-motion";
// import { SiTypescript, SiSharp, SiReact,  SiJavascript, SiCplusplus, SiPython, SiNodedotjs, SiNestjs, SiDotnet, SiFastapi, SiRedis, SiApachekafka, SiGraphql, SiMysql, SiPostgresql, SiMongodb, SiElasticsearch, SiAmazon, SiKubernetes, SiDocker, SiJenkins, SiArgo, SiOctopusdeploy } from "react-icons/si";

// const skills = [
//   { category: "Programming Languages", items: [
//     { name: "TypeScript", icon: <SiTypescript />, link: "https://www.typescriptlang.org/" },
//     { name: "C#", icon: <SiSharp />, link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
//     { name: "JavaScript", icon: <SiJavascript />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
//     { name: "C++", icon: <SiCplusplus />, link: "https://isocpp.org/" },
//     { name: "Python", icon: <SiPython />, link: "https://www.python.org/" }
//   ]},
//   { category: "Backend Technologies", items: [
//     { name: "Node.js", icon: <SiNodedotjs />, link: "https://nodejs.org/" },
//     { name: "Nest.js", icon: <SiNestjs />, link: "https://nestjs.com/" },
//     { name: ".NET", icon: <SiDotnet />, link: "https://dotnet.microsoft.com/" },
//     { name: "FastAPI", icon: <SiFastapi />, link: "https://fastapi.tiangolo.com/" },
//     { name: "Redis", icon: <SiRedis />, link: "https://redis.io/" },
//     { name: "Kafka", icon: <SiApachekafka />, link: "https://kafka.apache.org/" }
//   ]},
//   { category: "Frontend Technologies", items: [
//     { name: "React", icon: <SiReact />, link: "https://react.dev/" },
//     { name: "GraphQL", icon: <SiGraphql />, link: "https://graphql.org/" }
//   ]},
//   { category: "Databases", items: [
//     { name: "MySQL", icon: <SiMysql />, link: "https://www.mysql.com/" },
//     { name: "PostgreSQL", icon: <SiPostgresql />, link: "https://www.postgresql.org/" },
//     { name: "MongoDB", icon: <SiMongodb />, link: "https://www.mongodb.com/" },
//     { name: "ElasticSearch", icon: <SiElasticsearch />, link: "https://www.elastic.co/elasticsearch/" }
//   ]},
//   { category: "Cloud & DevOps", items: [
//     { name: "AWS", icon: <SiAmazon />, link: "https://aws.amazon.com/" },
//     { name: "Azure", icon: <SiAmazon />, link: "https://azure.microsoft.com/" },
//     { name: "Kubernetes", icon: <SiKubernetes />, link: "https://kubernetes.io/" },
//     { name: "Docker", icon: <SiDocker />, link: "https://www.docker.com/" },
//     { name: "Jenkins", icon: <SiJenkins />, link: "https://www.jenkins.io/" },
//     { name: "ArgoCD", icon: <SiArgo />, link: "https://argo-cd.readthedocs.io/en/stable/" },
//     { name: "Octopus", icon: <SiOctopusdeploy />, link: "https://octopus.com/" }
//   ]}
// ];

// const About = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-16">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="container mx-auto max-w-5xl"
//       >
//         <motion.h1
//           className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400"
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           Hey, I'm Aakash 👋
//         </motion.h1>
//         <p className="text-lg md:text-xl text-gray-300 text-center mt-4 max-w-3xl mx-auto">
//           Passionate Software Engineer with 3+ years of experience specializing in backend development, cloud infrastructure, and AI-driven solutions. 
//           Expertise in designing scalable microservices, optimizing AI pipelines, and enhancing system performance. Dedicated to building high-performance, 
//           efficient, and user-friendly technology solutions.
//         </p>
        
//         {/* Experience Section */}
//         <motion.div
//           className="mt-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//         >
//           <h2 className="text-3xl font-semibold mb-6">Experience</h2>
//           <div className="space-y-6">
//             <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
//               <h3 className="text-xl font-semibold text-blue-300">Software Engineer II @ EX Squared India</h3>
//               <p className="text-gray-400 text-sm">June 2021 - Present</p>
              
//               <div className="mt-4 space-y-4">
//                 <div className="bg-gray-700 p-4 rounded-lg">
//                   <h4 className="text-lg font-semibold text-teal-300">Autonomize AI</h4>
//                   <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
//                     <li>Developed agentic workflows for AI-driven task automation.</li>
//                     <li>Integrated Langchain framework with OpenAI for NLP enhancements.</li>
//                     <li>Designed scalable database architectures using PostgreSQL & MongoDB.</li>
//                     <li>Built real-time data pipelines handling 1K+ events/sec using Kafka.</li>
//                   </ul>
//                 </div>
                
//                 <div className="bg-gray-700 p-4 rounded-lg">
//                   <h4 className="text-lg font-semibold text-teal-300">Nexus Utility</h4>
//                   <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
//                     <li>Designed and optimized microservices architecture using Docker, Nest.js, AWS, and Kubernetes.</li>
//                     <li>Developed Nexus admin dashboard using React.</li>
//                     <li>Integrated Role-Based Access Control (RBAC), Announcements, and Reports Scheduler.</li>
//                   </ul>
//                 </div>
                
//                 <div className="bg-gray-700 p-4 rounded-lg">
//                   <h4 className="text-lg font-semibold text-teal-300">HomLuv</h4>
//                   <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
//                     <li>Migrated application from .NET Core 2.2 to .NET 6 seamlessly.</li>
//                     <li>Designed and built a Backend-for-Frontend (BFF) system.</li>
//                     <li>Developed a recommendation system for personalized home suggestions.</li>
//                     <li>Optimized Elasticsearch queries for 18-21% performance improvement.</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-gray-700 p-4 rounded-lg">
//               <h3 className="text-xl font-semibold text-blue-300">Problem Setter & Reviewer @ Coding Ninjas</h3>
//               <p className="text-gray-400 text-sm">Sept 2020 - Jan 2021</p>
//               <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
//                 <li>Created 50+ coding problems for CodeStudio.</li>
//                 <li>Reviewed & improved problem statements for accuracy.</li>
//               </ul>
//             </div>
//           </div>
//         </motion.div>

//         {/* Skills Section */}
//         <motion.div className="mt-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
//           <h2 className="text-4xl font-bold mb-8 text-center text-teal-300">What's in My Arsenal ⚔️</h2>
//           {skills.map((skill, index) => (
//             <div key={index} className="mb-12">
//               <h3 className="text-2xl font-semibold text-blue-300 mb-4 border-b-2 border-blue-500 pb-2">{skill.category}</h3>
//               <div className="flex gap-6 overflow-x-auto pb-4">
//                 {skill.items.map((item, i) => (
//                   <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-5 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-110 hover:bg-blue-600 hover:text-white duration-300">
//                     <span className="text-5xl mb-2 transition-colors duration-300 group-hover:text-white">{item.icon}</span>
//                     <span className="text-gray-300 text-center font-medium">{item.name}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default About;
