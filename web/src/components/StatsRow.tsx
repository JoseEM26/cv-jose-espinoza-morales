import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { caseStudies } from "../data/caseStudies";
import { experience, featuredTech } from "../data/cv";
import Reveal from "./Reveal";

const STATS = [
  { value: 2, suffix: "+", label: "Años de experiencia" },
  { value: experience.length, suffix: "+", label: "Empleos y proyectos freelance" },
  { value: caseStudies.length, suffix: "", label: "Casos de estudio detallados" },
  { value: featuredTech.length, suffix: "+", label: "Tecnologías principales" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.3,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">
      {display}
      {suffix}
    </span>
  );
}

export default function StatsRow() {
  return (
    <Reveal delay={0.65} className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
      {STATS.map((stat) => (
        <div key={stat.label} className="text-left">
          <Counter value={stat.value} suffix={stat.suffix} />
          <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
        </div>
      ))}
    </Reveal>
  );
}
