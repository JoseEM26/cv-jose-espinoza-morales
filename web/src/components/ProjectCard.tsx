import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LuFolderGit2, LuGithub } from "react-icons/lu";
import type { Project } from "../data/cv";
import TechBadge from "./TechBadge";
import Reveal from "./Reveal";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 250, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 250, damping: 20 });
  const glowX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        className="card-surface group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 shadow-sm transition-shadow hover:shadow-xl"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(240px circle at ${glowX} ${glowY}, rgba(47,125,225,0.16), transparent 70%)`,
          }}
        />
        <div className="relative">
          <div className="mb-4 grid size-11 place-items-center rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-400">
            <LuFolderGit2 size={20} />
          </div>
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{project.title}</h3>

          {project.description && (
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.description}</p>
          )}

          {project.points && (
            <ul className="mt-3 space-y-1.5">
              {project.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent-500" />
                  {point}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag, ti) => (
              <TechBadge key={tag} name={tag} index={ti} />
            ))}
          </div>

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:underline dark:text-accent-400"
            >
              <LuGithub size={15} /> Ver repositorio
            </a>
          )}
        </div>
      </motion.div>
    </Reveal>
  );
}
