import type { ReactNode } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LuArrowLeft,
  LuArrowUpRight,
  LuCircleCheck,
  LuGithub,
  LuLayers,
  LuLightbulb,
  LuShieldCheck,
  LuTarget,
  LuTrendingUp,
} from "react-icons/lu";
import { getCaseStudy } from "../data/caseStudies";
import TechBadge from "../components/TechBadge";
import Reveal from "../components/Reveal";

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4">
      {paragraphs.map((p, i) => (
        <p key={i} className="text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
          {p}
        </p>
      ))}
    </div>
  );
}

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudy(slug) : undefined;

  if (!study) return <Navigate to="/" replace />;

  return (
    <div className="relative mx-auto min-h-screen max-w-3xl px-6 pb-24 pt-10">
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed -top-40 left-1/2 -z-10 size-[32rem] -translate-x-1/2 rounded-full bg-accent-500/20 blur-[120px]"
      />

      <Reveal>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
        >
          <LuArrowLeft size={16} /> Volver al CV
        </Link>
      </Reveal>

      <Reveal delay={0.06} className="mt-6">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">
          Caso de estudio &middot; {study.company}
        </span>
        <h1 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          {study.title}
        </h1>
        <p className="mt-3 text-[15px] font-medium text-slate-500 dark:text-slate-400">{study.period}</p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">{study.tagline}</p>

        {(study.repoUrl || study.links) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {study.repoUrl && (
              <a
                href={study.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-600/30 transition-colors hover:bg-accent-700"
              >
                <LuGithub size={16} /> Ver repositorio
              </a>
            )}
            {study.links?.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-accent-500/50 hover:text-accent-600 dark:border-white/15 dark:text-slate-200 dark:hover:text-accent-400"
              >
                {link.label} <LuArrowUpRight size={15} />
              </a>
            ))}
          </div>
        )}
      </Reveal>

      <div className="mt-12 space-y-12">
        <Reveal>
          <SectionBlock icon={LuTarget} title="Contexto y problema">
            <Prose paragraphs={study.context} />
          </SectionBlock>
        </Reveal>

        <Reveal>
          <SectionBlock icon={LuLightbulb} title="Solución implementada">
            <Prose paragraphs={study.solution} />
          </SectionBlock>
        </Reveal>

        {study.roles && (
          <Reveal>
            <SectionBlock icon={LuShieldCheck} title="Modelo de roles y seguridad">
              <div className="grid gap-3 sm:grid-cols-2">
                {study.roles.map((role) => (
                  <div key={role.name} className="card-surface rounded-xl p-4">
                    <p className="font-display text-sm font-bold text-slate-900 dark:text-white">{role.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {role.description}
                    </p>
                  </div>
                ))}
              </div>
            </SectionBlock>
          </Reveal>
        )}

        <Reveal>
          <SectionBlock icon={LuLayers} title="Stack técnico">
            <div className="space-y-4">
              {study.stack.map((group) => (
                <div key={group.label}>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, i) => (
                      <TechBadge key={item} name={item} index={i} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionBlock>
        </Reveal>

        <Reveal>
          <SectionBlock icon={LuTrendingUp} title="Resultados e impacto">
            <div className="grid gap-3 sm:grid-cols-2">
              {study.impact.map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="card-surface flex gap-3 rounded-xl p-4"
                >
                  <LuTrendingUp size={16} className="mt-0.5 shrink-0 text-accent-500" />
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{line}</p>
                </motion.div>
              ))}
            </div>
          </SectionBlock>
        </Reveal>

        <Reveal>
          <div className="grid gap-8 sm:grid-cols-2">
            <SectionBlock icon={LuCircleCheck} title="Beneficios directos">
              <BenefitList items={study.directBenefits} />
            </SectionBlock>
            <SectionBlock icon={LuCircleCheck} title="Beneficios indirectos">
              <BenefitList items={study.indirectBenefits} />
            </SectionBlock>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-16 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-accent-500/50 hover:text-accent-600 dark:border-white/15 dark:text-slate-200 dark:hover:text-accent-400"
        >
          <LuArrowLeft size={16} /> Volver al CV completo
        </Link>
      </Reveal>
    </div>
  );
}

function SectionBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof LuTarget;
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <div className="mb-4 flex items-center gap-2.5">
        <span className="grid size-9 place-items-center rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-400">
          <Icon size={18} />
        </span>
        <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function BenefitList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-500" />
          {item}
        </li>
      ))}
    </ul>
  );
}
