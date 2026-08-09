"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Tone = "chocolate" | "black" | "warm-white";

const TONE_LAYERS: Record<Tone, string> = {
  chocolate:
    "radial-gradient(120% 90% at 20% 15%, #7a3a17 0%, #5b260e 45%, #3a1608 100%)",
  black:
    "radial-gradient(120% 90% at 75% 20%, #241108 0%, #050505 55%, #000000 100%)",
  "warm-white":
    "radial-gradient(120% 90% at 30% 10%, #ffffff 0%, #f5f3f1 55%, #e7e2dd 100%)",
};

/**
 * Stand-in for macro chocolate photography until real assets land
 * (see DESIGN.md → Assets). Swap the inner div for next/image once
 * public/photos/* exists.
 */
export default function TextureBlock({
  tone = "chocolate",
  parallax = false,
  className = "",
}: {
  tone?: Tone;
  parallax?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 40, damping: 20 });
  const y = useSpring(my, { stiffness: 40, damping: 20 });
  const translateX = useTransform(x, [-0.5, 0.5], [-14, 14]);
  const translateY = useTransform(y, [-0.5, 0.5], [-14, 14]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!parallax || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.div
        style={parallax ? { x: translateX, y: translateY } : undefined}
        className="absolute inset-[-6%]"
      >
        <div
          className="h-full w-full"
          style={{ backgroundImage: TONE_LAYERS[tone] }}
        />
        <div
          className="absolute inset-0 mix-blend-overlay opacity-40"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </motion.div>
    </div>
  );
}
