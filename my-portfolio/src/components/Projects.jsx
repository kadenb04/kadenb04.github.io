import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
            Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    </section>
  );
}
