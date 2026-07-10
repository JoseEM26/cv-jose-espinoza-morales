import { motion } from "framer-motion";
import { LuDownload, LuGithub, LuLinkedin, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { profile } from "../data/cv";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <section id="contacto" className="relative mx-auto max-w-6xl px-6 pb-16">
      <Reveal className="card-surface relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-14">
        <motion.div
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-accent-500/20 blur-[100px]"
        />

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">
          Contacto
        </span>
        <h2 className="font-display mt-2 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
          Conversemos sobre tu próximo proyecto
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[15px] text-slate-600 dark:text-slate-400">
          Disponible para roles backend, DevOps/cloud o colaboraciones freelance. Respondo rápido por correo o
          WhatsApp.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/30 transition-colors hover:bg-accent-700"
          >
            <LuMail size={16} /> Escríbeme
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-accent-500/50 hover:text-accent-600 dark:border-white/15 dark:text-slate-200 dark:hover:text-accent-400"
          >
            <LuGithub size={16} /> GitHub
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-accent-500/50 hover:text-accent-600 dark:border-white/15 dark:text-slate-200 dark:hover:text-accent-400"
          >
            <LuLinkedin size={16} /> LinkedIn
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            href={profile.cvFile}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-accent-500/50 hover:text-accent-600 dark:border-white/15 dark:text-slate-200 dark:hover:text-accent-400"
          >
            <LuDownload size={16} /> Descargar CV
          </motion.a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <LuMapPin size={14} className="text-accent-500" /> {profile.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <LuPhone size={14} className="text-accent-500" /> {profile.phone}
          </span>
        </div>
      </Reveal>

      <p className="mt-8 text-center text-xs text-slate-400 dark:text-slate-500">
        © {new Date().getFullYear()} {profile.name} — Hecho con React, TypeScript & Framer Motion.
      </p>
    </section>
  );
}
