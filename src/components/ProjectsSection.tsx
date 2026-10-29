import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/portfolioData";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Featured Work"
          title="Featured Web"
          highlight="Projects"
          description="A showcase of real-world web applications built with modern frontend and backend technologies. Click on any project card to explore full project details, live deployments, and challenges."
        />

        {/* 3 Real Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
