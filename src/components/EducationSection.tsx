import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-28 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academic Background"
          title="Education &amp;"
          highlight="Foundation"
        />

        <div className="max-w-2xl mx-auto">
          <div className="relative p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl text-center space-y-4 group hover:border-cyan-500/40 transition-colors">
            {/* Ambient corner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-emerald-500/5 rounded-3xl pointer-events-none -z-10" />

            <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400 shadow-inner">
              <GraduationCap className="w-8 h-8" />
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Bachelor of Science in Computer Science &amp; Engineering (CSE)
            </h3>

            <h4 className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Green University of Bangladesh (GUB)
            </h4>
          </div>
        </div>

      </div>
    </section>
  );
}
