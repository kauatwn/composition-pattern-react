interface WidgetHeaderProps {
  title: string;
  label?: string;
}

export function WidgetHeader({ title, label }: WidgetHeaderProps) {
  return (
    <header className="bg-zinc-200 dark:bg-zinc-800 py-4 px-6 flex items-center justify-between">
      <span className="font-bold text-white">{title}</span>
      <button className="text-green-500 font-bold text-xs hover:text-green-600 uppercase">
        {label}
      </button>
    </header>
  );
}
