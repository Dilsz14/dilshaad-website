'use client'

import { motion } from 'framer-motion'

interface PageHeroProps {
  tag?: string
  headline: string
  subheadline?: string
  image?: string
}

export default function PageHero({ tag, headline, subheadline, image }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-black">
      {/* Background image */}
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 pt-40">
        {tag && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B8922A]/30 bg-[#B8922A]/10 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8922A]" />
            <span className="text-[#B8922A] text-xs font-semibold uppercase tracking-widest">{tag}</span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl"
        >
          {headline}
        </motion.h1>
        {subheadline && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-neutral-300 max-w-2xl leading-relaxed"
          >
            {subheadline}
          </motion.p>
        )}
      </div>
    </section>
  )
}
