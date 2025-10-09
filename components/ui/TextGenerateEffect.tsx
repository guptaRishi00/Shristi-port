"use client";
import { useEffect, useState } from "react";
import { motion, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string; // single word
  className?: string;
  filter?: boolean;
  duration?: number;
  colors?: string[]; // array of colors per letter
}

export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  className,
  filter = true,
  duration = 0.3,
  colors = ["#f5f5d7","#f7e9b0","#fcd07b","#f7d26c","#e8c86a","#e5b86c","#f5f5d7"],
}) => {
  const [scope, animate] = useAnimate();
  const lettersArray = words.split("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loopAnimation = async () => {
      if (!isMounted) return;

      while (isMounted) {
        // Show letters one by one
        for (let i = 0; i < lettersArray.length; i++) {
          if (!isMounted) return;
          setActiveIndex(i);
          await animate(
            `span:nth-child(${i + 1})`,
            { opacity: 1, filter: filter ? "blur(0px)" : "none" },
            { duration }
          );
          await new Promise((r) => setTimeout(r, 150)); // small delay per letter
        }

        // Keep cursor on last letter during pause
        await new Promise((r) => setTimeout(r, 1500));

        // Hide letters one by one
        for (let i = 0; i < lettersArray.length; i++) {
          if (!isMounted) return;
          await animate(
            `span:nth-child(${i + 1})`,
            { opacity: 0, filter: filter ? "blur(10px)" : "none" },
            { duration: 0.2 }
          );
        }

        setActiveIndex(null); // hide cursor during pause
        await new Promise((r) => setTimeout(r, 500));
      }
    };

    loopAnimation();

    return () => {
      isMounted = false;
    };
  }, [animate, filter, duration, lettersArray.length]);

  return (
    <motion.div ref={scope} className={cn("flex gap-0 font-bold inline-block", className)}>
      {lettersArray.map((letter, i) => (
        <motion.span
          key={letter + i}
          style={{
            color: colors[i % colors.length],
            filter: filter ? "blur(10px)" : "none",
            position: "relative",
          }}
          className="opacity-0"
        >
          {letter}
          {/* Smooth blinking cursor on active letter */}
          {activeIndex === i && (
            <span className="absolute -right-1 top-0 h-full w-[2px] bg-white animate-blinkSmooth"></span>
          )}
        </motion.span>
      ))}
      <style jsx>{`
        @keyframes blinkSmooth {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blinkSmooth {
          animation: blinkSmooth 1s infinite;
        }
      `}</style>
    </motion.div>
  );
};
