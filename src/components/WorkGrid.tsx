"use client";

import { motion, type Variants } from "framer-motion";

const EASE_EMPHASIS = [0.16, 1, 0.3, 1] as const;

type CaseStudy = {
  title: string;
  tag: string;
  href: string;
};

type WorkGridProps = {
  caseStudies: CaseStudy[];
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_EMPHASIS },
  },
};

export default function WorkGrid({ caseStudies }: WorkGridProps) {
  return (
    <motion.section
      className="mx-auto max-w-6xl px-6 py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <p className="mb-12 font-mono text-[11px] uppercase tracking-widest2 text-cloud/40">
        Selected work
      </p>

      <div className="grid grid-cols-1 gap-px bg-grid-line md:grid-cols-3">
        {caseStudies.map((study) => (
          <motion.a
            key={study.title}
            href={study.href}
            variants={card}
            className="group relative flex aspect-[4/5] flex-col justify-end border border-transparent bg-dark-lift p-6 transition-colors duration-base ease-standard hover:border-reflex"
          >
            <h3 className="font-display text-2xl font-medium tracking-tightest">
              {study.title}
            </h3>
            <p className="mt-2 font-body text-sm text-cloud/60">
              {study.tag}
            </p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
