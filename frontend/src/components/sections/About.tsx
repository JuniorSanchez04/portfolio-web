"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personal } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const paragraphs = [
    t("about.body.p1").replace("<name/>", personal.name),
    t("about.body.p2"),
    t("about.body.p3"),
    t("about.body.p4"),
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}>
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
            {t("about.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            {t("about.heading")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-square w-full max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden border border-white/5 shadow-lg shadow-indigo-500/10 hover:scale-105 transition-transform duration-300">
            <Image
              src="/me.png"
              alt="Junior Sanchez"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 384px"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-neutral-400 leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="pt-2">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                {t("about.cta")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
