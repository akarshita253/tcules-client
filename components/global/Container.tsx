import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn("max-w-[1440px] mx-auto lg:px-12 md:px-6 sm:px-5 px-4", className)}>
      {children}
    </div>
  );
}