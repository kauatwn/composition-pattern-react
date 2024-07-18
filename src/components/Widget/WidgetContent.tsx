import { ReactNode } from "react";

interface WidgetContentProps {
  title: string;
  children: ReactNode;
}

export function WidgetContent({ title, children }: WidgetContentProps) {
  return (
    <section>
      <h2 className="bg-zinc-200 px-5 py-2 text-sm font-medium text-zinc-600 dark:bg-zinc-950 dark:text-zinc-300">
        {title}
      </h2>
      <div className="divide-y-8 divide-zinc-300 dark:divide-zinc-950">
        {children}
      </div>
    </section>
  );
}
