import { motion } from "framer-motion";
import { featuredTech } from "../data/cv";
import { getTechIcon } from "../data/techIcons";

interface Placement {
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const PLACEMENTS: Placement[] = [
  { top: "6%", left: "10%", size: 34, duration: 7, delay: 0, opacity: 0.9 },
  { top: "14%", left: "82%", size: 30, duration: 8, delay: 0.4, opacity: 0.8 },
  { top: "28%", left: "3%", size: 26, duration: 6.5, delay: 0.8, opacity: 0.7 },
  { top: "4%", left: "45%", size: 24, duration: 9, delay: 1.2, opacity: 0.6 },
  { top: "38%", left: "92%", size: 32, duration: 7.5, delay: 0.2, opacity: 0.85 },
  { top: "52%", left: "6%", size: 28, duration: 8.5, delay: 1.6, opacity: 0.7 },
  { top: "66%", left: "88%", size: 26, duration: 6, delay: 0.6, opacity: 0.65 },
  { top: "78%", left: "16%", size: 30, duration: 7.2, delay: 1, opacity: 0.75 },
  { top: "86%", left: "48%", size: 22, duration: 9.5, delay: 1.8, opacity: 0.55 },
  { top: "20%", left: "62%", size: 22, duration: 6.8, delay: 1.4, opacity: 0.6 },
  { top: "60%", left: "38%", size: 20, duration: 8, delay: 0.9, opacity: 0.5 },
  { top: "90%", left: "78%", size: 24, duration: 7.8, delay: 0.3, opacity: 0.65 },
  { top: "44%", left: "22%", size: 18, duration: 9.2, delay: 2, opacity: 0.45 },
  { top: "8%", left: "68%", size: 20, duration: 6.2, delay: 1.1, opacity: 0.55 },
];

export default function IconCloud() {
  const icons = featuredTech
    .map((name) => ({ name, tech: getTechIcon(name) }))
    .filter((i) => i.tech);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {PLACEMENTS.map((p, i) => {
        const item = icons[i % icons.length];
        if (!item?.tech) return null;
        const Icon = item.tech.icon;
        return (
          <motion.div
            key={`${item.name}-${i}`}
            className="absolute drop-shadow-sm"
            style={{ top: p.top, left: p.left, opacity: p.opacity }}
            animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
            title={item.name}
          >
            <Icon size={p.size} style={{ color: item.tech.color }} />
          </motion.div>
        );
      })}
    </div>
  );
}
