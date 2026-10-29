"use client";

import { useState } from "react";
import { skillsData, SkillCategory } from "@/data/portfolioData";
import TechIcon from "./TechIcon";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("Languages");

  const categories: SkillCategory[] = [
    "Languages",
    "Frontend",
    "Backend",
    "Databases",
    "Hosting",
    "Tools",
  ];

  // Helper to get count per category
  const getCategoryCount = (cat: SkillCategory) => {
    return skillsData.filter((item) => item.category === cat).length;
  };

  // Filter skills by selected category
  const currentSkills = skillsData.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header exact match to screenshot */}
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-emerald-400 uppercase font-mono mb-2">
            MY ARSENAL
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Technical Skills
          </h2>
          {/* Green accent line under heading */}
          <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mt-3.5 mb-2 shadow-sm shadow-emerald-500/50" />
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mt-2">
            Categorized repertoire of programming languages, full-stack frameworks, databases, and engineering workflows.
          </p>
        </div>

        {/* Filter Pills Tabs (Exact pill style from screenshot) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-5xl mx-auto mb-10">
          {categories.map((cat) => {
            const count = getCategoryCount(cat);
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-[#00b894] hover:bg-[#00a383] text-white shadow-lg shadow-[#00b894]/30 scale-105"
                    : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800/80"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[11px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-black/20 text-white" : "text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Technology Cards Grid (Exact card layout from screenshot) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 max-w-5xl mx-auto justify-center">
          {currentSkills.map((skill, index) => {
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-slate-900/90 hover:bg-slate-900 border border-slate-800/90 hover:border-emerald-500/60 p-5 sm:p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/20 aspect-square sm:aspect-auto sm:min-h-[170px]"
              >
                {/* Tech Icon Container */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-950/90 border border-slate-800 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  <TechIcon name={skill.name} className="w-8 h-8 sm:w-9 sm:h-9" />
                </div>

                {/* Technology Name */}
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
