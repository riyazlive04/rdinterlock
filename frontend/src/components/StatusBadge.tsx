import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  label: string;
  variant?: "default" | "success" | "warning" | "destructive" | "primary";
  className?: string;
}

const variants = {
  default: "bg-secondary text-secondary-foreground",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  destructive: "bg-destructive/10 text-destructive",
  primary: "bg-primary/10 text-primary",
};

export function StatusBadge({ label, variant = "default", className }: StatusBadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold",
      variants[variant],
      className
    )}>
      {label}
    </span>
  );
}
