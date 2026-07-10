import { projects } from "../data/cv";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="proyectos" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Portafolio"
        title="Proyectos destacados"
        description="Sistemas y arquitecturas que diseñé e implementé de punta a punta — mueve el cursor sobre cada tarjeta."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
