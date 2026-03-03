import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  variant?: "default" | "primary" | "accent" | "success" | "warning";
  onClick?: () => void;
}

const gradientMap = {
  default: "",
  primary: "gradient-primary",
  accent: "gradient-accent",
  success: "gradient-success",
  warning: "gradient-warning",
};

export function KPICard({ title, value, icon: Icon, trend, variant = "default", onClick }: KPICardProps) {
  const isColored = variant !== "default";

  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-2xl p-4 sm:p-5 animate-fade-in transition-all duration-200",
        isColored
          ? `${gradientMap[variant]} text-white shadow-md`
          : "card-modern",
        onClick && "cursor-pointer active:scale-[0.97] hover:shadow-[var(--shadow-md)]"
      )}
    >
      <div className="flex items-start gap-3">
        <div className={cn(
          "rounded-xl p-2.5",
          isColored ? "bg-white/20" : "bg-primary/8"
        )}>
          <Icon className={cn("h-5 w-5", isColored ? "text-white" : "text-primary")} />
        </div>
        <div className="flex-1 min-w-0">
          <p className={cn("text-xs font-medium truncate", isColored ? "text-white/80" : "text-muted-foreground")}>
            {title}
          </p>
          <p className="text-xl sm:text-2xl font-bold mt-0.5">{value}</p>
          {trend && (
            <p className={cn("text-xs mt-1", isColored ? "text-white/70" : "text-muted-foreground")}>
              {trend}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
