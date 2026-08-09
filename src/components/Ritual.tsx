"use client";

import { motion } from "framer-motion";
import TextureBlock from "./TextureBlock";
import PinkMotif from "./PinkMotif";

export default function Ritual() {
  return (
    <section className="relative grid min-h-screen grid-cols-1 bg-chocolate sm:grid-cols-2">
      <div className="relative min-h-[50vh] sm:min-h-full">
        <TextureBlock tone="chocolate" />
      </div>

      <div className="flex flex-col justify-center gap-8 px-6 py-20 sm:px-14 sm:py-0">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[13vw] leading-[0.9] text-warm-white sm:text-[5.5vw]"
        >
          el ritual
          <br />
          vulkan
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="max-w-sm font-sans text-sm leading-relaxed text-warm-white/70 sm:text-base"
        >
          se rompe con la mano. se espera. se derrite. no hay apuro — el
          volcán se abre solo, a su propio ritmo.
        </motion.p>

        <PinkMotif variant="spoon" size={64} delay={0.3} />
      </div>
    </section>
  );
}
