"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

const EASE_EMPHASIS = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Headline scales down and fades slightly as the section scrolls past —
  // the same "shrink into place" language as the Apple reference.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.72]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Accent bar draws in from the left edge on load.
  const barVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: EASE_EMPHASIS, delay: 0.2 },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: EASE_EMPHASIS,
        delay: 0.3 + i * 0.1,
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative flex h-[140vh] flex-col items-start justify-center"
    >
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center px-6">
        <motion.div
          className="mx-auto w-full max-w-6xl origin-left"
          style={{ scale, opacity, y }}
        >
          <motion.div
            className="mb-8 h-1 origin-left bg-reflex"
            style={{ width: "88px" }}
            variants={barVariants}
            initial="hidden"
            animate="visible"
          />

          <motion.h1
            className="font-display text-[13vw] font-semibold leading-[0.92] tracking-tightest sm:text-[9vw] lg:text-[7vw]"
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            ROB
            <br />
            KARPAVICIUS
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl font-body text-lg text-cloud/70 sm:text-xl"
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Senior product designer building considered, well-crafted
            digital products — from first principles to shipped detail.
          </motion.p>

          <motion.p
            className="mt-6 font-mono text-[11px] uppercase tracking-widest2 text-cloud/40"
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Scroll to explore
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
