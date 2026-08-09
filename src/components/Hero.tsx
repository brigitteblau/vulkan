"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TextureBlock from "./TextureBlock";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex h-screen items-end overflow-hidden bg-chocolate"
    >
      <motion.div style={{ scale, opacity }} className="absolute inset-0">
        <TextureBlock tone="chocolate" parallax />
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      <div className="relative z-10 flex w-full flex-col gap-6 px-6 pb-16 sm:px-10 sm:pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-display leading-[0.85] text-warm-white text-[22vw] sm:text-[16vw]"
        >
          vulkan
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-xs font-sans text-sm leading-relaxed text-warm-white/70">
            no es un postre.
            <br />
            es el momento antes de romperlo.
          </p>

          <a
            href="#pedir"
            className="group flex items-center gap-2 font-sans text-sm uppercase tracking-[0.15em] text-warm-white"
          >
            <span className="border-b border-warm-white/40 pb-0.5 transition-colors group-hover:border-warm-white">
              pedí el tuyo
            </span>
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
