import { cn } from "@/lib/utils";

interface TypewriterProps {
  word: string;
  count: number;
  cursorClassName?: string;
  className?: string;
}

export function Typewriter({cursorClassName, word, count, className }: TypewriterProps) {
  return (
    <span className={className}>
      {word.substring(0, count)}

       <span
        className={cn(
          "inline-block w-[3px] ml-2 h-[1em] bg-neutral-900 animate-blink",
          cursorClassName
        )}
      />
    </span>
  );
}
