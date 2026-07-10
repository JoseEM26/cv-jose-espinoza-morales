import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LuArrowDown, LuDownload, LuGithub, LuLinkedin, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { profile } from "../data/cv";
import IconCloud from "./IconCloud";
import RoleCycler from "./RoleCycler";
import Reveal from "./Reveal";
import StatsRow from "./StatsRow";

const NAME_LETTERS = profile.name.split("");

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 20 });
  const springY = useSpring(my, { stiffness: 60, damping: 20 });
  const blobX = useTransform(springX, (v) => v * 30);
  const blobY = useTransform(springY, (v) => v * 30);
  const blobX2 = useTransform(springX, (v) => v * -22);
  const blobY2 = useTransform(springY, (v) => v * -22);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="perfil"
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 pb-16"
    >
      <motion.div
        style={{ x: blobX, y: blobY }}
        className="absolute -top-32 -left-32 size-[26rem] rounded-full bg-accent-500/25 blur-[110px]"
      />
      <motion.div
        style={{ x: blobX2, y: blobY2 }}
        className="absolute -bottom-40 -right-24 size-[28rem] rounded-full bg-gold-400/20 blur-[120px]"
      />

      <IconCloud />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-600/25 bg-accent-500/10 px-4 py-1.5 text-sm font-medium text-accent-700 dark:text-accent-300"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Disponible para nuevos proyectos
        </motion.p>

        <h1 className="font-display max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
          {NAME_LETTERS.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.02 }}
              className="inline-block"
            >
              {letter === " " ? " " : letter}
            </motion.span>
          ))}
        </h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-3 text-xl font-medium text-slate-600 sm:text-2xl dark:text-slate-300"
        >
          <RoleCycler roles={profile.roles} />
        </motion.h2>

        <Reveal delay={0.35} className="mt-6 max-w-2xl">
          <p className="text-balance text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.summary}
          </p>
        </Reveal>

        <Reveal delay={0.45} className="mt-7 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <LuMapPin size={15} className="text-accent-500" /> {profile.location}
          </span>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-accent-600 dark:hover:text-accent-400">
            <LuPhone size={15} className="text-accent-500" /> {profile.phone}
          </a>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-accent-600 dark:hover:text-accent-400">
            <LuMail size={15} className="text-accent-500" /> {profile.email}
          </a>
        </Reveal>

        <Reveal delay={0.55} className="mt-9 flex flex-wrap items-center gap-3">
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            href={profile.cvFile}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/30 transition-colors hover:bg-accent-700"
          >
            <LuDownload size={16} /> Descargar CV
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/15 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors hover:border-accent-500/50 hover:text-accent-600 dark:hover:text-accent-400"
          >
            <LuGithub size={16} /> {profile.githubLabel}
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/15 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors hover:border-accent-500/50 hover:text-accent-600 dark:hover:text-accent-400"
          >
            <LuLinkedin size={16} /> LinkedIn
          </motion.a>
        </Reveal>

        <StatsRow />
      </div>

      <motion.button
        onClick={() => document.getElementById("experiencia")?.scrollIntoView({ behavior: "smooth" })}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Ir a experiencia"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 hover:text-accent-500 dark:text-slate-500"
      >
        <LuArrowDown size={22} />
      </motion.button>
    </section>
  );
}
