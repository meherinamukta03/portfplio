import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  ArrowRight,
  Code2,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { projectsData } from "@/data/portfolioData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.slug === id || p.id === id);

  if (!project) {
    return {
      title: "Project Not Found | Meherina Mukta",
      description: "The requested project details page could not be found.",
    };
  }

  return {
    title: `${project.title} - Project Details | Meherina Mukta`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === id || p.id === id);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Working Back to Projects Navigation */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>
          </div>

          {/* Project Header Info */}
          <div className="space-y-4 mb-8">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-950/70 border border-cyan-800/60 text-cyan-300">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-900 border border-slate-800 text-slate-400">
                Timeline: {project.date}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-900 border border-slate-800 text-slate-400">
                Role: {project.role}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-cyan-300 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Actual Project Screenshot Showcase */}
          <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 mb-10 group">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Live & Repository Links Action Banner */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-cyan-800/40 shadow-xl mb-12 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                  <span>Deployment &amp; Source Code</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Access the live deployed application and client-side source code below.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-md shadow-cyan-500/20 transition-all hover:scale-105"
                  title={`Open Live Website: ${project.title}`}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Project</span>
                </a>

                {project.clientRepo && (
                  <a
                    href={project.clientRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 bg-slate-950 hover:bg-slate-800 border border-slate-700 transition-colors"
                    title={`View GitHub Repository: ${project.title}`}
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Repository</span>
                  </a>
                )}
              </div>
            </div>

            {/* Direct URL references */}
            <div className="pt-3 border-t border-slate-800 text-xs font-mono space-y-1">
              <div>
                <span className="text-slate-400">Live Website: </span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline break-all"
                >
                  {project.liveUrl}
                </a>
              </div>
              {project.clientRepo ? (
                <div>
                  <span className="text-slate-400">GitHub Repo: </span>
                  <a
                    href={project.clientRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline break-all"
                  >
                    {project.clientRepo}
                  </a>
                </div>
              ) : (
                <div>
                  <span className="text-slate-400">GitHub Repo: </span>
                  <span className="text-slate-500 italic">Not provided yet. Source repository will be linked once published.</span>
                </div>
              )}
            </div>
          </div>

          {/* Grid Layout for Detailed Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content Column (Cols 8) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Detailed Description */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span>Brief Project Description</span>
                </h2>
                <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>{project.fullDescription}</p>
                </div>
              </section>

              {/* Key Features */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Key Features &amp; Capabilities</span>
                </h2>
                <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                  {project.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Challenges Faced Section */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                  <span>Challenges Faced While Developing the Project</span>
                </h2>
                <div className="p-6 rounded-2xl bg-slate-900/60 border border-amber-900/30 space-y-3">
                  {project.challenges.map((challenge, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                      <span className="leading-relaxed">{challenge}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Potential Improvements & Future Plans */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-cyan-400" />
                  <span>Potential Improvements and Future Plans</span>
                </h2>
                <div className="p-6 rounded-2xl bg-slate-900/60 border border-cyan-900/30 space-y-3">
                  {project.futureImprovements.map((improvement, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                      <span className="leading-relaxed">{improvement}</span>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* Right Sidebar Column: Tech Stack & Specs (Cols 4) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Technology Stack Panel */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Main Technology Stack Used</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-950 text-cyan-300 border border-cyan-900/50 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Meta Card */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-3 text-xs sm:text-sm">
                <h3 className="text-base font-bold text-white">Project Information</h3>
                <div className="divide-y divide-slate-800 space-y-2.5">
                  <div className="pt-2 flex justify-between">
                    <span className="text-slate-400">Project:</span>
                    <span className="font-semibold text-white">{project.title}</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-slate-400">Developer:</span>
                    <span className="font-semibold text-white">Meherina Mukta</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-slate-400">Category:</span>
                    <span className="text-cyan-300 text-right">{project.category}</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-slate-400">Timeline:</span>
                    <span className="text-slate-200">{project.date}</span>
                  </div>
                </div>
              </div>

              {/* Discussion CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-800/40 space-y-3 text-center">
                <h4 className="font-bold text-white text-base">Want to discuss this project?</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Have feedback or want to explore building something similar together?
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 transition-all cursor-pointer"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

          {/* Next / Previous Project Navigation */}
          <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="w-full sm:w-auto inline-flex items-center gap-2 p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-left transition-all"
              >
                <ArrowLeft className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Previous Project
                  </span>
                  <span className="font-bold text-sm text-white">
                    {prevProject.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="w-full sm:w-auto inline-flex items-center justify-end gap-2 p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-right transition-all sm:ml-auto"
              >
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Next Project
                  </span>
                  <span className="font-bold text-sm text-white">
                    {nextProject.title}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              </Link>
            ) : (
              <div />
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
