import { motion } from "framer-motion";
import { LuGraduationCap, LuLanguages } from "react-icons/lu";
import { education, languages } from "../data/cv";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const LEVEL_WIDTH: Record<string, number> = {
  Nativo: 100,
  "Intermedio técnico": 62,
};

export default function Education() {
  return (
    <section id="formacion" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Background" title="Formación & Idiomas" />

      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="card-surface rounded-2xl p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-2 text-accent-600 dark:text-accent-400">
            <LuGraduationCap size={20} />
            <h3 className="font-display font-bold text-slate-900 dark:text-white">Formación académica</h3>
          </div>
          <ul className="space-y-4">
            {education.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="border-l-2 border-accent-500/40 pl-4"
              >
                <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.institution} &middot; {item.period}
                </p>
              </motion.li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="card-surface rounded-2xl p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-2 text-accent-600 dark:text-accent-400">
            <LuLanguages size={20} />
            <h3 className="font-display font-bold text-slate-900 dark:text-white">Idiomas</h3>
          </div>
          <ul className="space-y-5">
            {languages.map((lang, i) => (
              <li key={lang.language}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-900 dark:text-white">{lang.language}</span>
                  <span className="text-slate-500 dark:text-slate-400">{lang.level}</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200/70 dark:bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${LEVEL_WIDTH[lang.level] ?? 50}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
                    className="h-full rounded-full bg-linear-to-r from-accent-600 to-accent-400"
                  />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
