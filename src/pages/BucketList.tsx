import React from 'react';
import { motion } from "framer-motion";
import { 
  Dumbbell, 
  Mountain, 
  Globe2, 
  Tent, 
  Map, 
  Timer, 
  BookOpen, 
  Rocket,
  Car,
  GlassWaterIcon,
  Snowflake,
  SunSnowIcon
} from "lucide-react";

const bucketList = [
  { 
    title: "Run a Half Marathon", 
    completed: true, 
    icon: Dumbbell,
    year: 2024,
    status: "Completed"
  },
  { 
    title: "Run a Full Marathon", 
    completed: false, 
    icon: Mountain,
    year: 2025,
    status: "Target"
  },
  { 
    title: "Swimming", 
    completed: false, 
    icon: GlassWaterIcon,
    year: 2025,
    status: "Target"
  },
  { 
    title: "Surfing", 
    completed: false, 
    icon: Snowflake,
    year: 2025,
    status: "Target"
  },
  { 
    title: "Skateboarding", 
    completed: false, 
    icon: SunSnowIcon,
    year: 2026,
    status: "Target"
  },
  { 
    title: "Skiing", 
    completed: false, 
    icon: Snowflake,
    year: 2026,
    status: "Target"
  },
  { 
    title: "Lift 120kg Chest Press", 
    completed: false, 
    icon: Dumbbell,
    year: 2025,
    status: "In Progress"
  },
  { 
    title: "Squat 150kg", 
    completed: false, 
    icon: Dumbbell,
    year: 2025,
    status: "Target"
  },
  { 
    title: "Complete 3 Treks in 2025", 
    completed: false, 
    icon: Mountain,
    year: 2025,
    status: "In Progress"
  },
  { 
    title: "Write a Book", 
    completed: false, 
    icon: BookOpen,
    year: 2029,
    status: "Target"
  },
  { 
    title: "Launch a Startup", 
    completed: false, 
    icon: Rocket,
    year: 2030,
    status: "Target"
  },
  { 
    title: "Visit All the 8 Wonders", 
    completed: false, 
    icon: Globe2,
    year: 2025,
    status: "1/8"
  },
  { 
    title: "Everest Base Camp Trek", 
    completed: false, 
    icon: Tent,
    year: 2025,
    status: "Target"
  },
  { 
    title: "Explore Patagonia", 
    completed: false, 
    icon: Map,
    year: 2027,
    status: "Target"
  },
  { 
    title: "Paragliding", 
    completed: false, 
    icon: Timer,
    year: 2026,
    status: "Target"
  },
  { 
    title: "Complete an Ironman", 
    completed: false, 
    icon: Timer,
    year: 2026,
    status: "Target"
  },
  { 
    title: "Skydiving", 
    completed: false, 
    icon: Timer,
    year: 2026,
    status: "Target"
  },
  { 
    title: "Buy a Mustang", 
    completed: false, 
    icon: Car,
    year: 2028,
    status: "Target"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const getStatusColor = (status: any) => {
  switch (status) {
    case "Completed":
      return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
    case "In Progress":
      return "bg-purple-500/20 text-purple-400 border border-purple-500/30";
    case "Target":
      return "bg-gray-700/50 text-gray-300 border border-gray-600/30";
    default:
      return "bg-gray-700/50 text-gray-300 border border-gray-600/30";
  }
};

export default function BucketList() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Legacy List
          </h1>
          <p className="text-gray-400 text-lg">Transforming dreams into achievements</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {bucketList.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`
                relative overflow-hidden
                bg-gray-800 rounded-2xl p-6
                border border-gray-700
                transition-all duration-300
                hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5
              `}
            >
              <div className="flex items-center gap-4">
                <div className={`
                  p-3 rounded-xl
                  ${item.completed ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-700/50 text-gray-400'}
                  transition-colors duration-300
                `}>
                  <item.icon className="w-6 h-6" />
                </div>
                
                <div className="flex-1">
                  <h3 className={`
                    text-xl font-semibold
                    ${item.completed ? 'text-blue-400' : 'text-gray-200'}
                  `}>
                    {item.title}
                  </h3>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className={`
                    px-4 py-1 rounded-full text-sm font-medium
                    ${getStatusColor(item.status)}
                  `}>
                    {item.status}
                  </div>
                  <span className="text-gray-500 text-sm">
                    {item.year}
                  </span>
                </div>
              </div>
              
              {/* Progress bar for completed items */}
              {item.completed && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
              )}
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 bg-gray-800 rounded-2xl border border-gray-700"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
              <div className="text-2xl font-bold text-blue-400">
                {bucketList.filter(item => item.completed).length}
              </div>
              <div className="text-gray-400">Completed</div>
            </div>
            <div className="text-center p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
              <div className="text-2xl font-bold text-purple-400">
                {bucketList.filter(item => item.status === "In Progress").length}
              </div>
              <div className="text-gray-400">In Progress</div>
            </div>
            <div className="text-center p-4 bg-gray-700/50 rounded-xl border border-gray-600/30">
              <div className="text-2xl font-bold text-gray-300">
                {bucketList.filter(item => item.status === "Target").length}
              </div>
              <div className="text-gray-400">Targets</div>
            </div>
            <div className="text-center p-4 bg-gray-700/50 rounded-xl border border-gray-600/30">
              <div className="text-2xl font-bold text-gray-300">
                {bucketList.length}
              </div>
              <div className="text-gray-400">Total Goals</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}