import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { LuDownload, LuMenu, LuMoon, LuSun, LuX } from "react-icons/lu";
import { useTheme } from "../hooks/useTheme";
import { profile } from "../data/cv";

const LINKS = [
  { id: "perfil", label: "Perfil" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "skills", label: "Skills" },
  { id: "formacion", label: "Formación" },
  { id: "contacto", label: "Contacto" },
];

export default function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("perfil");
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);

      let current = LINKS[0].id;
      for (const link of LINKS) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= 140) current = link.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    setScrolled(!isHome);
  }, [isHome]);

  const scrollTo = (id: string) => {
    setOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/80 dark:bg-navy-950/80 backdrop-blur-lg border-b border-slate-200/70 dark:border-white/10" : ""
      }`}
    >
      <div className="h-0.5 bg-slate-200/40 dark:bg-white/5">
        <motion.div
          className="h-full bg-linear-to-r from-accent-600 via-accent-400 to-gold-400"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollTo("perfil")}
          className="font-display text-sm font-bold tracking-tight text-slate-900 dark:text-white"
        >
          J<span className="text-accent-600 dark:text-accent-400">.</span>Espinoza
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  active === link.id
                    ? "text-accent-700 dark:text-accent-300"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-accent-500/10 dark:bg-accent-400/10"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="grid size-9 place-items-center rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-accent-500/50 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid place-items-center"
              >
                {theme === "dark" ? <LuSun size={16} /> : <LuMoon size={16} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <a
            href={profile.cvFile}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-accent-600 hover:bg-accent-700 px-4 py-2 text-sm font-semibold text-white transition-colors shadow-sm shadow-accent-600/30"
          >
            <LuDownload size={15} /> CV
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden grid size-9 place-items-center rounded-full border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200"
            aria-label="Abrir menú"
          >
            {open ? <LuX size={18} /> : <LuMenu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-slate-200/70 dark:border-white/10 bg-white/95 dark:bg-navy-950/95 backdrop-blur-lg"
          >
            <ul className="flex flex-col px-6 py-3">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={`block w-full py-2.5 text-left text-sm font-medium ${
                      active === link.id ? "text-accent-600 dark:text-accent-400" : "text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
