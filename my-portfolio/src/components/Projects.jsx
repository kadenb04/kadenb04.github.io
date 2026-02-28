import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import { Typography } from "@mui/material";

export default function Projects({ flashSkill }) {
   return (
      <section id="projects" className="py-5 px-6">
         <div className="max-w-7xl mx-auto">
            <Typography variant="h4" className="mb-16 pb-8 text-center">
               Projects
            </Typography>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
               {projects.map((project, index) => (
                  <ProjectCard 
                     key={index} 
                     project={project}
                     flashSkill={flashSkill} 
                  />
               ))}
            </div>
         </div>
      </section>
   );
}
