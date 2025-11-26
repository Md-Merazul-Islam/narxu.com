"use client";  // Add this line at the top
import { useState, useEffect } from "react";

const StatsRow = () => {
  // State for counting effect
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    // Counting animation for years
    let yearsCount = 0;
    const yearsInterval = setInterval(() => {
      if (yearsCount < 8) {
        yearsCount += 1;
        setYears(yearsCount);
      } else {
        clearInterval(yearsInterval);
      }
    }, 100); // Adjust timing for smooth count

    // Counting animation for projects
    let projectsCount = 0;
    const projectsInterval = setInterval(() => {
      if (projectsCount < 300) {
        projectsCount += 1;
        setProjects(projectsCount);
      } else {
        clearInterval(projectsInterval);
      }
    }, 10); // Adjust timing for smooth count

    // Counting animation for clients
    let clientsCount = 0;
    const clientsInterval = setInterval(() => {
      if (clientsCount < 150) {
        clientsCount += 1;
        setClients(clientsCount);
      } else {
        clearInterval(clientsInterval);
      }
    }, 15); // Adjust timing for smooth count

    // Cleanup
    return () => {
      clearInterval(yearsInterval);
      clearInterval(projectsInterval);
      clearInterval(clientsInterval);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-1000 delay-600 animate-fade-in-stats">
      <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
        <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {years}+ {/* The count will animate to this value */}
        </div>
        <p className="text-white/70 text-xs sm:text-sm">years of industry experience</p>
      </div>
      <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
        <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {projects}+ {/* The count will animate to this value */}
        </div>
        <p className="text-white/70 text-xs sm:text-sm">projects successfully delivered</p>
      </div>
      <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
        <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {clients}+ {/* The count will animate to this value */}
        </div>
        <p className="text-white/70 text-xs sm:text-sm">satisfied clients worldwide</p>
      </div>
    </div>
  );
};

export default StatsRow;
