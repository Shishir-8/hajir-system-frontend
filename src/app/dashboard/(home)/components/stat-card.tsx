import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  LucideIcon,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  description?: string;
  trend?: string;
  trendType?: "up" | "down";
}

const StatCard = ({
  title,
  value,
  icon: Icon,
  description,
  trend,
  trendType = "up",
}: StatCardProps) => {
  return (
    <Card className="group border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>

        <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
          <Icon className="size-5" />
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tight">
          {value}
        </h2>

        {(trend || description) && (
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {trend && (
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2 py-1 font-medium ${
                  trendType === "up"
                    ? "bg-emerald-500/10 text-emerald-600"
                    : "bg-red-500/10 text-red-600"
                }`}
              >
                {trendType === "up" ? (
                  <TrendingUp className="size-3" />
                ) : (
                  <TrendingDown className="size-3" />
                )}

                {trend}
              </span>
            )}

            {description && (
              <span className="text-muted-foreground">
                {description}
              </span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;