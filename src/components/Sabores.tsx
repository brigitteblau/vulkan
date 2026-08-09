"use client";

import { motion } from "framer-motion";
import PinkMotif from "./PinkMotif";

const FLAVORS = ["clásico", "café", "maní", "frambuesa", "sal marina"];

export default function Sabores() {
  return (
    <section id="sabores" className="relative bg-warm-white px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto flex max-w-5xl flex-col gap-16">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[14vw] leading-[0.9] text-chocolate sm:text-[7vw]"
        >
          sabores
        </motion.h2>

        <ul className="flex flex-col">
          {FLAVORS.map((flavor, i) => (
            <motion.li
              key={flavor}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.06,
              }}
              className="flex items-baseline gap-6 border-t border-chocolate/15 py-6 first:border-t-0 sm:gap-10 sm:py-8"
            >
              <span className="font-sans text-xs text-chocolate/50 sm:text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[9vw] leading-none text-chocolate sm:text-[4.5vw]">
                {flavor}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      <PinkMotif
        variant="drop"
        size={72}
        className="absolute right-8 top-24 hidden sm:block"
        delay={0.4}
      />
    </section>
  );
}
