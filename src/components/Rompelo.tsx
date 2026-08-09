"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Rompelo() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0, 0.25], [0.85, 1]);

  const lavaScale = useTransform(scrollYProgress, [0.3, 1], [0.4, 1.4]);
  const lavaOpacity = useTransform(scrollYProgress, [0.3, 0.55], [0, 1]);

  const leftX = useTransform(scrollYProgress, [0.3, 1], ["0%", "-100%"]);
  const rightX = useTransform(scrollYProgress, [0.3, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative h-[220vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* lava core — placeholder for the volcano opening to reveal liquid chocolate */}
        <motion.div
          style={{ scale: lavaScale, opacity: lavaOpacity }}
          className="absolute h-[60vmin] w-[60vmin] rounded-full"
        >
          <div
            className="h-full w-full rounded-full"
            style={{
              backgroundImage:
                "radial-gradient(60% 60% at 40% 35%, #f39aa0 0%, #c96a55 35%, #5b260e 75%)",
            }}
          />
        </motion.div>

        <motion.span
          style={{ opacity: textOpacity, scale: textScale }}
          className="relative z-20 font-display text-[26vw] leading-none text-warm-white sm:text-[18vw]"
        >
          rompelo
        </motion.span>

        {/* curtain halves standing in for the volcano silhouette until real
            product photography/illustration replaces this (see DESIGN.md) */}
        <motion.div
          style={{ x: leftX }}
          className="absolute inset-y-0 left-0 z-10 w-1/2 bg-black"
        />
        <motion.div
          style={{ x: rightX }}
          className="absolute inset-y-0 right-0 z-10 w-1/2 bg-black"
        />
      </div>
    </section>
  );
}
