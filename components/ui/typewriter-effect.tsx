"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
useEffect(() => {
  if (isInView) {
    const runCycle = async () => {
      // Reset: hide all characters first (total ~2s for smooth erase)
      await animate(
        "span",
        {
          opacity: 0,
          width: 0,
        },
        {
          duration: 2,
          ease: "easeInOut",
        }
      );
      // Type: reveal with stagger
      await animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    };
    
    runCycle(); // Start first cycle
    
    // Repeat every ~4.3s (2s erase + 0.3s type + 2s pause)
    const interval = setInterval(runCycle, 10000);
    
    return () => clearInterval(interval);
  }
}, [isInView]);


  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `dark:text-white text-display-lg opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div className={cn("text-display-lg md:text-center", className)}>
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-1 h-16 bg-neutral-800",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};


