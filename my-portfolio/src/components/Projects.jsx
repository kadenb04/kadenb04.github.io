import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import { Typography } from "@mui/material";

export default function Projects() {
  return (
    <section id="projects" className="py-15 px-6">
        <div className="max-w-6xl mx-auto">
            <Typography variant="h4" className="mb-16 pb-5 text-center">
                Projects
            </Typography>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    </section>
  );
}
