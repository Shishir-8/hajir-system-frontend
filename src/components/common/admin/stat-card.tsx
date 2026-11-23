import { type LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  iconColor?: string;
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  iconColor = "text-indigo-600",
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-medium text-muted-foreground">
          {title}
        </p>

        <Icon
          className={`size-5 shrink-0 ${iconColor}`}
          strokeWidth={1.8}
        />
      </div>

      <div className="mt-4">
        <h3 className="text-2xl font-semibold leading-none tracking-tight tabular-nums text-foreground sm:text-3xl">
          {value}
        </h3>

        {description && (
          <p className="mt-2 text-xs leading-5 text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}