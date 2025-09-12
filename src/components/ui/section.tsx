import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full py-20 px-6 ${className ?? ""}`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-900">{title}</h2>
        {subtitle && (
          <p className="mt-2 text-xl text-purple-800">{subtitle}</p>
        )}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}
