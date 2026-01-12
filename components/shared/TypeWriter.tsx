interface TypewriterProps {
  word: string;
  count: number;
  className?: string;
}

export function Typewriter({ word, count, className }: TypewriterProps) {
  return (
    <span className={className}>
      {word.substring(0, count)}
    </span>
  );
}
