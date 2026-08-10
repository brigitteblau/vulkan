"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Producto() {
  return (
    <section className="bg-black px-6 py-20 sm:px-14 sm:py-28">
      <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
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
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.15,
          }}
          className="max-w-xs font-sans text-sm leading-relaxed text-warm-white/70"
        >
          sin plástico de más. la bolsa se abre, se toca, se guarda el olor.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.1,
        }}
        className="relative mt-16 aspect-[16/9] w-full overflow-hidden sm:mt-24 sm:aspect-[21/9]"
      >
        <Image
          src="/photos/1.png"
          alt="Packaging de Vulkan"
          fill
          priority={false}
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
    </section>
  );
}