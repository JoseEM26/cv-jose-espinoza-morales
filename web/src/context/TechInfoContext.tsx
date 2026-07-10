import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import TechModal from "../components/TechModal";

interface TechInfoContextValue {
  openTech: (name: string) => void;
}

const TechInfoContext = createContext<TechInfoContextValue | null>(null);

export function TechInfoProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<string | null>(null);
  const value = useMemo(() => ({ openTech: setActive }), []);

  return (
    <TechInfoContext.Provider value={value}>
      {children}
      <TechModal name={active} onClose={() => setActive(null)} />
    </TechInfoContext.Provider>
  );
}

export function useTechInfo() {
  const ctx = useContext(TechInfoContext);
  if (!ctx) throw new Error("useTechInfo debe usarse dentro de TechInfoProvider");
  return ctx;
}
