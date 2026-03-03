import { LucideIcon } from "lucide-react";

interface ActionButtonProps {
  label: string;
  icon?: LucideIcon;
  onClick?: () => void;
  variant?: "default" | "primary" | "accent" | "outline" | "success" | "ghost";
  size?: "default" | "lg" | "sm";
  active?: boolean;
  className?: string;
  type?: "button" | "submit";
}

export function ActionButton({
  label,
  icon: Icon,
  onClick,
  variant = "default",
  size = "default",
  active = false,
  className = "",
  type = "button",
}: ActionButtonProps) {
  const base = "touch-target font-semibold transition-all duration-200 rounded-xl select-none";
  const sizeClass = {
    sm: "h-10 px-3 text-xs",
    default: "h-12 px-4 text-sm",
    lg: "h-14 px-6 text-base",
  }[size];

  const variantClass = {
    default: active
      ? "bg-primary text-primary-foreground shadow-md"
      : "bg-secondary/70 text-secondary-foreground hover:bg-secondary",
    primary: "gradient-primary text-primary-foreground hover:opacity-90 shadow-md",
    accent: "gradient-accent text-accent-foreground hover:opacity-90 shadow-md",
    outline: active
      ? "border-2 border-primary bg-primary/8 text-primary shadow-sm"
      : "border border-border bg-card text-foreground hover:border-primary/40 hover:bg-primary/4",
    success: "gradient-success text-success-foreground hover:opacity-90 shadow-md",
    ghost: active
      ? "bg-primary/10 text-primary"
      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${sizeClass} ${variantClass[variant]} ${className} inline-flex items-center justify-center gap-2 active:scale-[0.97]`}
    >
      {Icon && <Icon className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} />}
      {label}
    </button>
  );
}
