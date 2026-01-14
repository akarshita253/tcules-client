"use client";
import { cn } from "@/lib/utils";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  value: string;
  initialColor: string;
  finalColor: string;
  className?: string
}

interface CharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  initialColor: string;
  finalColor: string;
}

export default function ScrollReveal({
  value,
  initialColor,
  finalColor,
  className
}: ScrollRevealProps) {
  const element = useRef<HTMLSpanElement>(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = value.split(" ");
  const totalChars = value.length;
  
  let globalCharIndex = 0;

  return (
    <span
      ref={element}
      className={cn("text-heading-lg leading-tight text-justify",className)}
    >
      {words.map((word, i) => {
        const chars = word.split("");
        
        return (
          <span key={i} className="inline-block whitespace-nowrap mr-[0.35em]">
            {chars.map((char, charIndex) => {
              
              const start = globalCharIndex / totalChars;
              const end = start + (1 / totalChars);
              
              globalCharIndex++;

              return (
                <Char
                  key={charIndex}
                  range={[start, end]}
                  progress={scrollYProgress}
                  initialColor={initialColor}
                  finalColor={finalColor}
                >
                  {char}
                </Char>
              );
            })}
            <span className="hidden">{globalCharIndex++}</span>
          </span>
        );
      })}
    </span>
  );
}

const Char = ({
  children,
  progress,
  range,
  initialColor,
  finalColor,
}: CharProps) => {
const color = useTransform(progress, range, [initialColor, finalColor]);

  return (
    <motion.span style={{ color }}>
      {children}
    </motion.span>
  );
};