import { cn } from "@/lib/utils";

interface PillSelectorProps {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  className?: string;
}

export function PillSelector({ options, value, onChange, className }: PillSelectorProps) {
  return (
    <div className={cn("flex gap-2 flex-wrap", className)}>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={cn(
            "h-11 px-5 rounded-full text-sm font-semibold transition-all duration-200 active:scale-[0.96] touch-target",
            value === opt
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-secondary/70 text-secondary-foreground hover:bg-secondary"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
