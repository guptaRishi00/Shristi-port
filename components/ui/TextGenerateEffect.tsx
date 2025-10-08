"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string; // text with optional "\n" for line breaks
  className?: string;
  filter?: boolean;
  duration?: number;
}

export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();

  // Split words but keep line breaks
  const wordsArray = words.split(" ").map((w) => w.replace(/\\n/g, "\n"));

  useEffect(() => {
    let isMounted = true;

    const loopAnimation = async () => {
      if (!isMounted) return;

      while (isMounted) {
        await animate(
          "span",
          { opacity: 1, filter: filter ? "blur(0px)" : "none" },
          { duration, delay: stagger(0.2) }
        );

        await new Promise((r) => setTimeout(r, 2000));

        await animate(
          "span",
          { opacity: 0, filter: filter ? "blur(10px)" : "none" },
          { duration: 0.3, delay: stagger(0.05) }
        );

        await new Promise((r) => setTimeout(r, 500));
      }
    };

    loopAnimation();

    return () => {
      isMounted = false;
    };
  }, [animate, filter, duration]);

  return (
    <div className={cn("font-bold inline-block", className)}>
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={cn("dark:text-white text-black opacity-0", className)}
            style={{ filter: filter ? "blur(10px)" : "none" }}
          >
            {word.includes("\n") ? (
              <>
                {word.replace("\n", "")}
                <br />
              </>
            ) : (
              word + " "
            )}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
