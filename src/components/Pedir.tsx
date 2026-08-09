"use client";

import { motion } from "framer-motion";
import TextureBlock from "./TextureBlock";

export default function Pedir() {
  return (
    <section
      id="pedir"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-chocolate px-6 py-16 sm:px-10"
    >
      <TextureBlock tone="chocolate" className="opacity-40" />

      <div className="relative z-10 flex-1" />

      <div className="relative z-10 flex flex-col gap-10">
        <motion.a
          href="mailto:hola@vulkan.com"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="group font-display text-[16vw] leading-[0.85] text-warm-white sm:text-[9vw]"
        >
          pedí el tuyo <span className="inline-block transition-transform group-hover:translate-x-3">↗</span>
        </motion.a>

        <div className="flex flex-col gap-6 border-t border-warm-white/15 pt-8 font-sans text-sm text-warm-white/70 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} vulkan.</span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="uppercase tracking-[0.15em] transition-colors hover:text-warm-white"
          >
            instagram
          </a>
        </div>
      </div>
    </section>
  );
}
