import { Heart, Sparkles, Sprout, Terminal, Target, UserCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { aboutData, profileData } from "@/data/portfolioData";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-slate-950/40">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Passion, Precision &amp;"
          highlight="Purpose"
          description="Get to know the person behind the code, my journey into software development, and the passions that fuel my craft."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story & Journey (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl backdrop-blur-sm space-y-4">
              <div className="flex items-center gap-2.5 text-cyan-400 font-semibold text-sm">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span>My Programming Journey</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                From Curiosities to Building End-to-End Web Solutions
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {aboutData.journey}
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-md bg-slate-800 text-xs font-mono text-cyan-300 border border-slate-700">
                  CSE Student @ GUB
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-800 text-xs font-mono text-teal-300 border border-slate-700">
                  Next.js &amp; React Stack
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-800 text-xs font-mono text-emerald-300 border border-slate-700">
                  Full-Stack Architecture
                </span>
              </div>
            </div>

            {/* Career Goals Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950 border border-cyan-800/40 shadow-xl">
              <div className="flex items-center gap-2.5 text-emerald-400 font-semibold text-sm mb-3">
                <Target className="w-5 h-5" />
                <span>Career Goals</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Aspiring Full-Stack Web Developer
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {aboutData.careerGoals}
              </p>
            </div>

            {/* Personality Highlights Grid */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono">
                Core Strengths &amp; Work Ethic
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {aboutData.personality.map((trait, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-cyan-300 font-medium text-sm mb-1">
                      <UserCheck className="w-4 h-4 text-cyan-400" />
                      <span>{trait.label}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {trait.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interests & Passions (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2.5 text-teal-400 font-semibold text-sm mb-4">
                <Heart className="w-5 h-5 text-rose-400" />
                <span>What I Love Doing</span>
              </div>

              <div className="space-y-4">
                {aboutData.interests.map((interest, idx) => {
                  let accentColor = "border-cyan-500/30 bg-cyan-950/20";
                  if (interest.title === "Gardening") {
                    accentColor = "border-emerald-500/30 bg-emerald-950/20";
                  } else if (interest.title === "Problem-Solving") {
                    accentColor = "border-purple-500/30 bg-purple-950/20";
                  }

                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border ${accentColor} transition-all hover:scale-[1.02]`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{interest.emoji}</span>
                        <h4 className="text-base font-bold text-white">
                          {interest.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Special Gardening Reflection Note */}
              <div className="mt-6 p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-start gap-3">
                <Sprout className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-emerald-200/90 leading-relaxed italic">
                  &quot;Just as patience and regular care allow a delicate plant to blossom into full vigor, deliberate daily problem-solving transforms budding lines of code into robust, world-class systems.&quot;
                </p>
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 text-sm space-y-3">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Quick Profile Facts
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 divide-y divide-slate-800/80">
                <li className="pt-2 flex justify-between">
                  <span className="text-slate-400">Name:</span>
                  <span className="font-medium text-slate-100">{profileData.name}</span>
                </li>
                <li className="pt-2 flex justify-between">
                  <span className="text-slate-400">Education:</span>
                  <span className="font-medium text-slate-100 text-right">B.Sc. in CSE, Green University</span>
                </li>
                <li className="pt-2 flex justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-medium text-slate-100">{profileData.location}</span>
                </li>
                <li className="pt-2 flex justify-between">
                  <span className="text-slate-400">Interests:</span>
                  <span className="font-medium text-cyan-300">Code, Logic, Plants 🌱</span>
                </li>
                <li className="pt-2 flex justify-between">
                  <span className="text-slate-400">Primary Goal:</span>
                  <span className="font-medium text-emerald-300">Professional Full-Stack Engineer</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
