import * as React from "react";
import { cn } from "@/lib/utils"; // se não tiver utils.ts, pode remover o cn

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 shadow-sm",
        className
      )}
      {...props}
    />
  );
}
