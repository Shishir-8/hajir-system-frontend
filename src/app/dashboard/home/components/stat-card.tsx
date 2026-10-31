
import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  iconColor?: string;
};

export default function StatCard({
  title,
  value,
  icon: Icon,
  description,
  iconColor = "text-indigo-600 bg-indigo-50",
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

        <div
          className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${iconColor}`}
        >
          <Icon className="size-5" strokeWidth={2} />
        </div>
      </div>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
        {value}
      </h2>

      {description && (
        <p className="mt-2 text-sm text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}
