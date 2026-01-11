"use client";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  value: string;
  initialColor: string; // e.g. "#737373" or "rgb(115,115,115)"
  finalColor: string;   // e.g. "#fafafa"
}

interface WordProps {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
  initialColor: string;
  finalColor: string;
}

export default function ScrollReveal({
  value,
  initialColor,
  finalColor,
}: ScrollRevealProps) {
  const element = useRef<HTMLSpanElement>(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = value.split(" ");

  return (
    <span ref={element} className="inline text-heading-lg">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word
            key={i}
            range={[start, end]}
            progress={scrollYProgress}
            initialColor={initialColor}
            finalColor={finalColor}
          >
            {word}
          </Word>
        );
      })}
    </span>
  );
}
const Word = ({
  children,
  range,
  progress,
  initialColor,
  finalColor,
}: WordProps) => {
  // Controls reveal timing
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative inline-block mr-[0.35em]">
      {/* Base text (initial color) */}
      <span style={{ color: initialColor }}>
        {children}
      </span>

      {/* Revealed text (final color) */}
      <motion.span
        className="absolute left-0 top-0"
        style={{ color: finalColor, opacity }}
      >
        {children}
      </motion.span>
    </span>
  );
};
