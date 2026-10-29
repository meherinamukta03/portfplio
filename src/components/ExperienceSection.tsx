import { Briefcase, Calendar, Info, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experienceData } from "@/data/portfolioData";
import Link from "next/link";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Career Readiness"
          title="Practical Experience &amp;"
          highlight="Milestones"
          description="As an aspiring developer, my practical engineering foundation is built on comprehensive university projects, self-directed applications, and modern full-stack workflows."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-4 transition-all hover:border-slate-700"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-xs text-cyan-300 font-mono mb-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{item.type}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-teal-400 mt-1">
                    {item.organization}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-400 font-mono self-start">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {item.description}
              </p>

              <div className="space-y-2 pt-2">
                {item.points.map((point, ptIdx) => {
                  const isPlaceholder = point.startsWith("[");
                  return (
                    <div
                      key={ptIdx}
                      className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                        isPlaceholder
                          ? "p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/40 text-cyan-200 font-mono"
                          : "text-slate-400"
                      }`}
                    >
                      {isPlaceholder ? (
                        <Info className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      )}
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  );
                })}
              </div>

              {/* Action Banner for Recruiters */}
              <div className="pt-4 mt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                <span className="text-slate-400">
                  Ready to contribute immediately to production web teams.
                </span>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  <span>Discuss an opportunity</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
