import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { featuredTech, skillCategories } from "../data/cv";
import { getTechIcon } from "../data/techIcons";
import { useTechInfo } from "../context/TechInfoContext";
import TechBadge from "./TechBadge";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const [active, setActive] = useState(0);
  const category = skillCategories[active];
  const { openTech } = useTechInfo();

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Stack técnico"
        title="Tecnologías & Conocimientos"
        description="El stack con el que trabajo día a día, más el detalle completo por categoría."
      />

      <Reveal className="card-surface mb-10 rounded-2xl p-6 sm:p-8">
        <div className="grid grid-cols-4 gap-x-4 gap-y-7 sm:grid-cols-6 md:grid-cols-8">
          {featuredTech.map((name, i) => {
            const tech = getTechIcon(name);
            if (!tech) return null;
            const Icon = tech.icon;
            return (
              <motion.button
                type="button"
                key={name}
                onClick={() => openTech(name)}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                whileHover={{ y: -6, scale: 1.12 }}
                className="group flex cursor-pointer flex-col items-center gap-2"
                title={name}
              >
                <div className="grid size-12 place-items-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors group-hover:border-accent-500/50 dark:border-white/10 dark:bg-navy-800 sm:size-14">
                  <Icon size={24} style={{ color: tech.color }} />
                </div>
                <span className="text-center text-[10.5px] font-medium leading-tight text-slate-500 dark:text-slate-400">
                  {name}
                </span>
              </motion.button>
            );
          })}
        </div>
      </Reveal>

      <Reveal className="flex flex-wrap gap-2">
        {skillCategories.map((cat, i) => (
          <button
            key={cat.label}
            onClick={() => setActive(i)}
            className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active === i
                ? "text-white"
                : "text-slate-600 hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
            }`}
          >
            {active === i && (
              <motion.span
                layoutId="skills-pill"
                className="absolute inset-0 rounded-full bg-accent-600"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative">{cat.label}</span>
          </button>
        ))}
      </Reveal>

      <div className="card-surface mt-4 min-h-[9rem] rounded-2xl p-6 sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {category.note && (
              <p className="mb-4 text-xs italic text-slate-500 dark:text-slate-400">{category.note}</p>
            )}
            <div className="flex flex-wrap gap-2.5">
              {category.items.map((item, ti) => (
                <TechBadge key={item} name={item} index={ti} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
