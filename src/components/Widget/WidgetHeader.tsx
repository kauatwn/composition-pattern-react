interface WidgetHeaderProps {
  title: string;
  label?: string;
}

export function WidgetHeader({ title, label }: WidgetHeaderProps) {
  return (
    <header className="flex items-center justify-between bg-zinc-600 px-6 py-4 dark:bg-zinc-800">
      <span className="font-bold text-white dark:text-white">{title}</span>
      <button className="text-xs font-bold uppercase text-green-300 hover:text-green-400">
        {label}
      </button>
    </header>
  );
}
