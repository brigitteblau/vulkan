"use client";

import { motion } from "framer-motion";

type Variant = "volcano" | "drop" | "spoon";

const PATHS: Record<Variant, string> = {
  // abstract volcano / cone
  volcano:
    "M50 8 C58 8 63 20 66 34 C82 40 96 58 96 76 C96 90 76 96 50 96 C24 96 4 90 4 76 C4 58 18 40 34 34 C37 20 42 8 50 8 Z",
  // abstract chocolate drop
  drop:
    "M50 4 C68 32 88 52 88 72 C88 90 70 100 50 100 C30 100 12 90 12 72 C12 52 32 32 50 4 Z",
  // abstract spoon
  spoon:
    "M50 6 C68 6 80 20 80 36 C80 50 68 60 56 62 L62 96 L38 96 L44 62 C32 60 20 50 20 36 C20 20 32 6 50 6 Z",
};

/**
 * Placeholder for the pink line illustrations (spoon, heart, volcano, bag)
 * referenced in DESIGN.md. Swap the <path> for the real SVG once
 * public/illustrations/* exists — this component's floating/parallax
 * behavior can stay as-is.
 */
export default function PinkMotif({
  variant = "volcano",
  className = "",
  size = 96,
  delay = 0,
}: {
  variant?: Variant;
  className?: string;
  size?: number;
  delay?: number;
}) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay }}
    >
      <motion.path
        d={PATHS[variant]}
        fill="none"
        stroke="var(--color-vulkan-pink)"
        strokeWidth={2.5}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95],
          delay,
        }}
      />
    </motion.svg>
  );
}
