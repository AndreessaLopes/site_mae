import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface CardProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}

export function Card({ icon: Icon, title, children }: CardProps) {
  return (
    <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition bg-purple-50/90">
      <Icon className="bg-white h-10 w-10 text-purple-950/50 mb-4 rounded-xl" />
      <h3 className="text-xl font-semibold mb-2 text-purple-900">{title}</h3>
      <p className="text-muted-foreground text-purple-800">{children}</p>
    </div>
  );
}
