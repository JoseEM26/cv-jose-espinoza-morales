import { motion } from "framer-motion";
import { getTechIcon } from "../data/techIcons";
import { useTechInfo } from "../context/TechInfoContext";

interface TechBadgeProps {
  name: string;
  index?: number;
}

export default function TechBadge({ name, index = 0 }: TechBadgeProps) {
  const tech = getTechIcon(name);
  const Icon = tech?.icon;
  const { openTech } = useTechInfo();

  return (
    <motion.button
      type="button"
      onClick={() => openTech(name)}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{ y: -3, scale: 1.06 }}
      className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-accent-600/20 bg-accent-500/8 dark:bg-accent-400/10 px-3 py-1 text-xs font-semibold text-accent-700 transition-colors hover:border-accent-500/50 dark:text-accent-300"
    >
      {Icon && <Icon style={{ color: tech?.color }} className="shrink-0" size={13} />}
      {name}
    </motion.button>
  );
}
