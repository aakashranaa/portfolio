import React, { useState } from 'react';
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
  Droplet,
  Snowflake,
  Cloud
} from "lucide-react";

const bucketList = [
  { 
    title: "Run a Half Marathon", 
    completed: true, 
    icon: Dumbbell,
    year: 2024,
    status: "Completed",
    description: "Completed in 2:15:45"
  },
  { 
    title: "Run a Full Marathon", 
    completed: false, 
    icon: Mountain,
    year: 2025,
    status: "Target",
    description: "Training in progress"
  },
  { 
    title: "Swimming", 
    completed: false, 
    icon: Droplet,
    year: 2025,
    status: "Target",
    description: "Learn advanced techniques"
  },
  { 
    title: "Surfing", 
    completed: false, 
    icon: Droplet,
    year: 2025,
    status: "Target",
    description: "Mulki trip in plans"
  },
  { 
    title: "Skateboarding", 
    completed: false, 
    icon: Car,
    year: 2026,
    status: "Target",
    description: "Start with basics"
  },
  { 
    title: "Skiing", 
    completed: false, 
    icon: Snowflake,
    year: 2026,
    status: "Target",
    description: "Alps trip planned"
  },
  { 
    title: "Lift 120kg Chest Press", 
    completed: false, 
    icon: Dumbbell,
    year: 2025,
    status: "In Progress",
    description: "Currently at 90kg"
  },
  { 
    title: "Squat 150kg", 
    completed: false, 
    icon: Dumbbell,
    year: 2025,
    status: "Target",
    description: "Currently at 120kg"
  },
  { 
    title: "Complete 3 Treks in 2025", 
    completed: false, 
    icon: Mountain,
    year: 2025,
    status: "In Progress",
    description: "1/3 completed"
  },
  { 
    title: "Write a Book", 
    completed: false, 
    icon: BookOpen,
    year: 2029,
    status: "Target",
    description: "Pending"
  },
  { 
    title: "Launch a Startup", 
    completed: false, 
    icon: Rocket,
    year: 2030,
    status: "Target",
    description: "Building skills"
  },
  { 
    title: "Visit All the 8 Wonders", 
    completed: false, 
    icon: Globe2,
    year: 2030,
    status: "1/8",
    description: "Taj Mahal visited"
  },
  { 
    title: "Everest Base Camp Trek", 
    completed: false, 
    icon: Tent,
    year: 2025,
    status: "Target",
    description: "Training and planning"
  },
  { 
    title: "Explore Patagonia", 
    completed: false, 
    icon: Map,
    year: 2027,
    status: "Target",
    description: "Research phase"
  },
  { 
    title: "Paragliding", 
    completed: false, 
    icon: Cloud,
    year: 2026,
    status: "Target",
    description: "Looking for courses"
  },
  { 
    title: "Complete an Ironman", 
    completed: false, 
    icon: Timer,
    year: 2026,
    status: "Target",
    description: "Building endurance"
  },
  { 
    title: "Skydiving", 
    completed: false, 
    icon: Cloud,
    year: 2026,
    status: "Target",
    description: "Researching locations"
  },
  { 
    title: "Buy a Mustang", 
    completed: false, 
    icon: Car,
    year: 2028,
    status: "Target",
    description: "Saving in progress"
  },
];

const getStatusColor = (status: any) => {
  switch (status) {
    case "Completed":
      return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
    case "In Progress":
      return "bg-violet-500/20 text-violet-400 border border-violet-500/30";
    case "Target":
      return "bg-gray-700/50 text-gray-300 border border-gray-600/30";
    default:
      if (status.includes("/")) {
        return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
      }
      return "bg-gray-700/50 text-gray-300 border border-gray-600/30";
  }
};

const getIconBgColor = (status: any, isHovered: any) => {
  if (isHovered) {
    switch (status) {
      case "Completed":
        return "bg-emerald-500/30 text-emerald-300";
      case "In Progress":
        return "bg-violet-500/30 text-violet-300";
      case "Target":
        return "bg-blue-500/30 text-blue-300";
      default:
        if (status.includes("/")) {
          return "bg-amber-500/30 text-amber-300";
        }
        return "bg-blue-500/30 text-blue-300";
    }
  }
  
  switch (status) {
    case "Completed":
      return "bg-emerald-500/20 text-emerald-400";
    case "In Progress":
      return "bg-violet-500/20 text-violet-400";
    case "Target":
      return "bg-gray-700/50 text-gray-400";
    default:
      if (status.includes("/")) {
        return "bg-amber-500/20 text-amber-400";
      }
      return "bg-gray-700/50 text-gray-400";
  }
};

const BucketListItem = ({ item }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`
        relative overflow-hidden
        bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6
        border border-gray-700
        transition-all duration-300 cursor-pointer
        ${isHovered ? 'border-opacity-80 shadow-lg shadow-blue-500/10 scale-102' : 'border-opacity-30'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4">
        <div className={`
          p-3 rounded-xl transition-all duration-300
          ${getIconBgColor(item.status, isHovered)}
        `}>
          <item.icon className="w-6 h-6" />
        </div>
        
        <div className="flex-1">
          <h3 className={`
            text-xl font-semibold transition-colors duration-300
            ${isHovered 
              ? item.status === "Completed" 
                ? 'text-emerald-300' 
                : item.status === "In Progress" 
                  ? 'text-violet-300' 
                  : 'text-blue-300' 
              : item.status === "Completed" 
                ? 'text-emerald-400' 
                : 'text-gray-200'
            }
          `}>
            {item.title}
          </h3>
          <p className={`text-sm mt-1 transition-all duration-300 ${isHovered ? 'text-gray-300' : 'text-gray-500'}`}>
            {item.description}
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className={`
            px-4 py-1 rounded-full text-sm font-medium transition-all duration-300
            ${getStatusColor(item.status)}
            ${isHovered ? 'scale-105' : ''}
          `}>
            {item.status}
          </div>
          <span className={`text-sm transition-colors duration-300 ${isHovered ? 'text-gray-300' : 'text-gray-500'}`}>
            {item.year}
          </span>
        </div>
      </div>
      
      {/* Progress gradient for all items (varies by status) */}
      <div className={`
        absolute bottom-0 left-0 h-1 transition-all duration-700 ease-in-out
        ${item.status === "Completed" 
          ? 'right-0 bg-gradient-to-r from-emerald-500 to-green-500'
          : item.status === "In Progress" 
            ? 'right-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500'
            : item.status.includes("/")
              ? 'right-3/4 bg-gradient-to-r from-amber-500 to-orange-500'
              : 'right-[95%] bg-gradient-to-r from-blue-500 to-cyan-500'
        }
        ${isHovered ? 'opacity-100' : 'opacity-70'}
      `} />
      
      {/* Subtle light effect on hover */}
      <div className={`
        absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5
        transition-opacity duration-500
        ${isHovered ? 'opacity-100' : 'opacity-0'}
      `} />
      
      {/* Particle effect on hover (simulated with pseudo-element) */}
      <div className={`
        absolute right-0 bottom-0 w-20 h-20 transition-all duration-500
        bg-radial-gradient
        ${isHovered ? 'opacity-30' : 'opacity-0'}
        ${
          item.status === "Completed" 
            ? 'from-emerald-400/40 to-transparent' 
            : item.status === "In Progress" 
              ? 'from-violet-400/40 to-transparent' 
              : item.status.includes("/")
                ? 'from-amber-400/40 to-transparent'
                : 'from-blue-400/40 to-transparent'
        }
      `} />
    </div>
  );
};

export default function BucketList() {
  // Group bucket list items by year
  const itemsByYear = bucketList.reduce((acc: any, item: any) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  }, {});

  // Sort years in ascending order
  const sortedYears = Object.keys(itemsByYear).sort((a: any, b: any) => a - b);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-16 relative">
          <h1 className="text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            The Legacy List
          </h1>
          <p className="text-gray-400 text-lg mb-4">Transforming dreams into achievements</p>
          
          {/* Animated underline */}
          <div className="relative h-1 w-48 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-500/0 via-white/40 to-blue-500/0 animate-shimmer"></div>
          </div>
        </div>

        {/* Summary Section - Moved to top */}
        <div className="mb-12 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/30 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/10">
              <div className="text-2xl font-bold text-emerald-400">
                {bucketList.filter(item => item.status === "Completed").length}
              </div>
              <div className="text-gray-400">Completed</div>
            </div>
            <div className="text-center p-4 bg-violet-500/10 rounded-xl border border-violet-500/30 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/10">
              <div className="text-2xl font-bold text-violet-400">
                {bucketList.filter(item => item.status === "In Progress").length}
              </div>
              <div className="text-gray-400">In Progress</div>
            </div>
            <div className="text-center p-4 bg-blue-500/10 rounded-xl border border-blue-500/30 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="text-2xl font-bold text-blue-400">
                {bucketList.filter(item => item.status === "Target").length}
              </div>
              <div className="text-gray-400">Targets</div>
            </div>
            <div className="text-center p-4 bg-amber-500/10 rounded-xl border border-amber-500/30 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/10">
              <div className="text-2xl font-bold text-amber-400">
                {bucketList.length}
              </div>
              <div className="text-gray-400">Total Goals</div>
            </div>
          </div>
        </div>

        {/* Display bucket list items grouped by year */}
        {sortedYears.map(year => (
          <div key={year} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-300 mb-4 flex items-center">
              <span className="mr-2">{year}</span>
              <div className="h-px flex-grow bg-gradient-to-r from-gray-700 to-transparent"></div>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {itemsByYear[year].map((item: any, index: any) => (
                <BucketListItem key={`${year}-${index}`} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}