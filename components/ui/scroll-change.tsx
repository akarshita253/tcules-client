"use client"
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  value: string;
}
interface WordProps {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}
export default function ScrollReveal({ value }: ScrollRevealProps) {
  const element = useRef<HTMLParagraphElement>(null);

  // Track scroll progress of this specific component
  const { scrollYProgress } = useScroll({
    target: element,
    // Start tracking when the top of the component hits the bottom of the window
    // End tracking when the top of the component hits the top of the window
    offset: ["start 0.9", "start 0.25"],
  });

  const words = value.split(" ");

  return (
    <span
      ref={element}
      className="inline text-heading-lg text-neutral-50"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </span>
  );
}

// Helper component for individual word/letter animation
const Word = ({ children, range, progress }: WordProps) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block mr-[0.35em]">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};