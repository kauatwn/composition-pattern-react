import { ReactNode } from "react";

interface WidgetGroupProps {
  children: ReactNode;
}

export function WidgetGroup({ children }: WidgetGroupProps) {
  return (
    <section className="bg-zinc-300 px-2 pb-2 dark:bg-zinc-950">
      {children}
    </section>
  );
}
