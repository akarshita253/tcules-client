import { cn } from "@/lib/utils";

interface BlockProps {
  className?: string;
  children: React.ReactNode;
}

export function Block({ className, children }: BlockProps) {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  );
}