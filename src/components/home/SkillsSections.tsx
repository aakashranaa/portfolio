// // src/components/home/SkillsSection.tsx
// import React from 'react';
// import { motion } from 'framer-motion';

// const SkillsSection = () => {
//   const skills = [
//     { name: 'React', level: 90 },
//     { name: 'TypeScript', level: 85 },
//     { name: 'Node.js', level: 80 },
//     { name: 'CSS/SCSS', level: 85 },
//     { name: 'Next.js', level: 75 },
//     { name: 'GraphQL', level: 70 },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="container mx-auto px-4"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-bold text-center mb-16"
//         >
//           Skills & Expertise
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.5 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-xl font-semibold">{skill.name}</h3>
//                 <span className="text-blue-600 font-semibold">{skill.level}%</span>
//               </div>
//               <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                 <motion.div
//                   className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
//                   initial={{ width: 0 }}
//                   whileInView={{ width: `${skill.level}%` }}
//                   transition={{ duration: 1, delay: 0.2 }}
//                   viewport={{ once: true }}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default SkillsSection;