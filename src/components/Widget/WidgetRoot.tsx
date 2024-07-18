import { ReactNode } from "react";

interface WidgetRootProps {
  children: ReactNode;
}

export function WidgetRoot({ children }: WidgetRootProps) {
  return <div className="w-[448px] overflow-hidden rounded">{children}</div>;
}
