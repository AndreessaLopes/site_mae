import Image from "next/image";
import { cn } from "@/lib/utils";

interface SafeLogoProps {
  className?: string;
  rounded?: boolean;
}

export function SafeLogo({ className, rounded }: SafeLogoProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-purple-50",
        rounded ? "rounded-full" : "rounded-lg",
        className
      )}
    >
      
      <Image
        src="/logo.png"
        alt="Logo"
        width={300}
        height={300}
        className="object-contain"
      />
    </div>
  );
}
