interface WidgetHeaderProps {
  title: string;
  label?: string;
}

export function WidgetHeader({ title, label }: WidgetHeaderProps) {
  return (
    <header className="bg-zinc-600 dark:bg-zinc-800 py-4 px-6 flex items-center justify-between">
      <span className="font-bold text-white dark:text-white">{title}</span>
      <button className="text-green-300 font-bold text-xs hover:text-green-400 uppercase">
        {label}
      </button>
    </header>
  );
}
