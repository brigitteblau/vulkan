"use client";

import { motion } from "framer-motion";
import TextureBlock from "./TextureBlock";
import PinkMotif from "./PinkMotif";

export default function Producto() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 sm:flex-row sm:items-end sm:justify-between">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[13vw] leading-[0.9] text-warm-white sm:text-[6vw]"
        >
          el
          <br />
          packaging
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="max-w-xs font-sans text-sm leading-relaxed text-warm-white/70"
        >
          sin plástico de más. la bolsa se abre, se toca, se guarda el olor.
        </motion.p>
      </div>

      <div className="relative mt-16 aspect-[16/9] w-full overflow-hidden sm:mt-24 sm:aspect-[21/9]">
        <TextureBlock tone="black" />
        <PinkMotif
          variant="volcano"
          size={100}
          className="absolute bottom-8 left-8 sm:left-14"
          delay={0.3}
        />
      </div>
    </section>
  );
}
