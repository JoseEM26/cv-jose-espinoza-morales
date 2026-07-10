import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">
        {eyebrow}
      </span>
      <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
      )}
    </Reveal>
  );
}
