import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  icon: LucideIcon;
  title: string;
  children?: ReactNode;
  className?: string;
}

export function Card({ icon: Icon, title, children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-purple-100 bg-purple-50/90 p-6 shadow-sm transition hover:shadow-md",
        className
      )}
    >
      <Icon className="mb-4 h-10 w-10 rounded-xl bg-purple-100/30 p-2 text-purple-800" />
      <h3 className="mb-2 text-xl font-semibold text-purple-900">{title}</h3>
      {children && <p className="text-medium text-purple-800/90">{children}</p>}
    </div>
  );
}
