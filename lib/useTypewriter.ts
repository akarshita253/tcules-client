"use client";

import { useEffect, useState } from "react";

type Phase = "typing" | "waiting" | "deleting";

export function useTypewriterController(
  words: string[],
  speed = 100,
  deleteSpeed = 50,
  delay = 1500
) {
  const maxLength = Math.max(...words.map(w => w.length));

  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "typing") {
      if (count < maxLength) {
        timeout = setTimeout(() => {
          setCount(c => c + 1);
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setPhase("waiting");
        }, delay);
      }
    }

    if (phase === "waiting") {
      timeout = setTimeout(() => {
        setPhase("deleting");
      }, delay / 2);
    }

    if (phase === "deleting") {
      if (count > 0) {
        timeout = setTimeout(() => {
          setCount(c => c - 1);
        }, deleteSpeed);
      } else {
        timeout = setTimeout(() => {
          setPhase("typing");
          setIndex(i => (i + 1) % words.length);
        }, 0); // 👈 async boundary fixes the warning
      }
    }

    return () => clearTimeout(timeout);
  }, [count, phase, speed, deleteSpeed, delay, words.length, maxLength]);

  return { index, count, phase };
}
