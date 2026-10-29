import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { ProjectItem } from "@/data/portfolioData";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 shadow-xl hover:shadow-cyan-950/20 transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* Project Image Preview Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-70 pointer-events-none" />

        {/* Category Pill Tag floating */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/90 text-cyan-300 border border-cyan-800/60 backdrop-blur-md shadow-md">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Card Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm font-medium text-teal-400">
            {project.tagline}
          </p>

          <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800/80"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons: View More / Details & Quick Live / GitHub Links */}
          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 shadow-md shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View More / Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Quick External Links */}
            <div className="flex items-center gap-2 text-slate-400">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
                title={`Visit Live Website: ${project.title}`}
                aria-label={`Visit Live Website: ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              {project.clientRepo && (
                <a
                  href={project.clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                  title={`View GitHub Repository: ${project.title}`}
                  aria-label={`View GitHub Repository: ${project.title}`}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
