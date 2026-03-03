import { ReactNode } from "react";

interface EntryCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function EntryCard({ title, children, className = "" }: EntryCardProps) {
  return (
    <div className={`card-modern p-5 sm:p-6 animate-fade-in ${className}`}>
      <h2 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">{title}</h2>
      {children}
    </div>
  );
}
