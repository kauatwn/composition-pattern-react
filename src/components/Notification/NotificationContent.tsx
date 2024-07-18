interface NotificationContentProps {
  text: string;
}

export function NotificationContent({ text }: NotificationContentProps) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-50">
        {text}
      </p>
      <span className="text-xs text-zinc-600 dark:text-zinc-400">3min ago</span>
    </div>
  );
}
