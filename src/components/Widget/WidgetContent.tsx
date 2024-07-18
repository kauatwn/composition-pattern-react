import { ReactNode } from "react";

interface WidgetContentProps {
  title: string;
  children: ReactNode;
}

export function WidgetContent({ title, children }: WidgetContentProps) {
  return (
    <>
      <h2 className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-300">
        {title}
      </h2>
      <div className="flex flex-col gap-1">{children}</div>
    </>
  );
}
