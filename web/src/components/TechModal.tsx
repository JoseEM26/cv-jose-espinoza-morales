import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuX } from "react-icons/lu";
import { getTechIcon } from "../data/techIcons";
import { getTechInfo } from "../data/techInfo";

interface TechModalProps {
  name: string | null;
  onClose: () => void;
}

export default function TechModal({ name, onClose }: TechModalProps) {
  useEffect(() => {
    if (!name) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [name, onClose]);

  const tech = name ? getTechIcon(name) : undefined;
  const Icon = tech?.icon;
  const description = name ? getTechInfo(name) : undefined;

  return (
    <AnimatePresence>
      {name && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm dark:bg-black/60"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={name}
            className="card-surface relative w-full max-w-sm rounded-2xl p-6 shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-4 top-4 grid size-8 place-items-center rounded-full text-slate-400 transition-colors hover:bg-slate-500/10 hover:text-slate-700 dark:hover:text-slate-200"
            >
              <LuX size={16} />
            </button>

            <div className="flex items-center gap-3 pr-8">
              {Icon && (
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-500/10">
                  <Icon size={24} style={{ color: tech?.color }} />
                </span>
              )}
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{name}</h3>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {description ?? "Descripción no disponible todavía — pronto la agrego."}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
