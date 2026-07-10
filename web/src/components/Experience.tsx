import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { LuArrowUpRight, LuBriefcase, LuChevronDown } from "react-icons/lu";
import { experience } from "../data/cv";
import TechBadge from "./TechBadge";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 0.8", "end 0.35"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experiencia" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Trayectoria"
        title="Experiencia laboral"
        description="Más de dos años construyendo backend, microservicios e infraestructura cloud en equipos ágiles y como freelance."
      />

      <div className="relative" ref={containerRef}>
        <div className="absolute left-4.5 top-2 bottom-2 w-px bg-slate-200/70 dark:bg-white/10 sm:left-5.5" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-4.5 top-2 w-px bg-linear-to-b from-accent-600 via-accent-400 to-gold-400 sm:left-5.5"
        />

        <ul className="space-y-4">
          {experience.map((job, i) => {
            const isOpen = openIndex === i;
            const hasCaseStudy = Boolean(job.caseStudySlug);

            return (
              <Reveal key={job.title + job.period} delay={i * 0.06}>
                <li className="relative pl-11 sm:pl-14">
                  <motion.span
                    className="absolute left-0 top-4 grid size-9 place-items-center rounded-full border-2 border-accent-500 bg-white text-accent-600 dark:bg-navy-900 dark:text-accent-400 sm:size-11"
                    whileHover={{ scale: 1.1 }}
                  >
                    <LuBriefcase size={16} />
                  </motion.span>

                  <div
                    className={`card-surface overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-md ${
                      hasCaseStudy ? "ring-1 ring-accent-500/25" : ""
                    }`}
                  >
                    {hasCaseStudy ? (
                      <Link
                        to={`/case/${job.caseStudySlug}`}
                        className="group flex w-full flex-col gap-1 px-5 py-4 text-left sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                              {job.title}
                            </h3>
                            <span className="rounded-full bg-accent-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-600 dark:text-accent-400">
                              Caso de estudio
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-accent-600 dark:text-accent-400">
                            {job.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="whitespace-nowrap text-xs font-medium text-slate-500 dark:text-slate-400">
                            {job.period}
                          </span>
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-600 transition-transform group-hover:translate-x-0.5 dark:text-accent-400">
                            Ver caso completo <LuArrowUpRight size={16} />
                          </span>
                        </div>
                      </Link>
                    ) : (
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className="flex w-full flex-col gap-1 px-5 py-4 text-left sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div>
                          <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                            {job.title}
                          </h3>
                          <p className="text-sm font-semibold text-accent-600 dark:text-accent-400">
                            {job.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="whitespace-nowrap text-xs font-medium text-slate-500 dark:text-slate-400">
                            {job.period}
                          </span>
                          <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-slate-400">
                            <LuChevronDown size={18} />
                          </motion.span>
                        </div>
                      </button>
                    )}

                    {hasCaseStudy && (
                      <div className="flex flex-wrap gap-2 px-5 pb-4">
                        {job.tags.map((tag, ti) => (
                          <TechBadge key={tag} name={tag} index={ti} />
                        ))}
                      </div>
                    )}

                    {!hasCaseStudy && (
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5">
                              <ul className="mb-4 space-y-2 border-t border-slate-200/70 pt-4 dark:border-white/10">
                                {job.points.map((point) => (
                                  <li
                                    key={point}
                                    className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                                  >
                                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent-500" />
                                    {point}
                                  </li>
                                ))}
                              </ul>
                              <div className="flex flex-wrap gap-2">
                                {job.tags.map((tag, ti) => (
                                  <TechBadge key={tag} name={tag} index={ti} />
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
