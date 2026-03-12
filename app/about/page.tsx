'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Award, BookOpen, Briefcase } from 'lucide-react'
import PageHero from '@/components/PageHero'

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D1B2A" }}>
      <PageHero
        tag="About Dilshaad"
        headline="Building Wealth. Building Systems. Building Legacies."
        subheadline="I'm Dilshaad Williams — a financial advisor, digital entrepreneur, and systems thinker who has spent the better part of a decade building structures that create lasting value."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
      />

      {/* The Real Story section */}
      <section className="py-24 px-6" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B8922A]/30 bg-[#B8922A]/10 mb-6">
              <span className="text-[#B8922A] text-xs font-semibold uppercase tracking-widest">The Real Version</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
              I didn't choose finance because it sounded impressive.
            </h2>
            <div className="space-y-4 text-neutral-400 leading-relaxed">
              <p>I chose it because I watched what happens when people don't have the right structures in place — and I decided that wouldn't be the story for the people in my corner.</p>
              <p>My career didn't begin behind a desk. It began in sales — learning how to listen, how to understand what people actually need beneath what they say they want, and how to earn trust consistently over time.</p>
              <p>That foundation shaped everything that came after. It's why I approach every client engagement not as a transaction, but as a relationship with a long timeline.</p>
              <p>Over the years, that path has taken me deep into two worlds that most professionals keep separate: financial planning and the digital economy. On one side, I've spent years helping individuals and families build financial structures across investments, retirement, estate planning, life insurance, and healthcare — working with some of South Africa's most respected financial institutions.</p>
              <p>On the other, I've built and run a digital marketing business from the ground up, which means I understand what it takes to grow something, not just advise on it.</p>
              <p className="text-white font-medium">The common thread isn't the industry — it's the philosophy. Build something that outlasts the moment. Design systems, not quick fixes. Think in decades, not quarters.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/dilshaad.jpeg"
                alt="Dilshaad Williams"
                className="w-full object-cover aspect-[3/4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            {/* Qualifications card */}
            <div className="bg-[#0F2035] rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-[#B8922A]" size={20} />
                <h3 className="text-white font-semibold">Qualifications & Credentials</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'RE5 Qualification',
                  'BCom in Finance and Financial Management (In Progress)',
                  '6 Regulatory Classes of Business',
                  'Long-term insurance & pension fund benefits',
                  'Collective investments & healthcare',
                  'Advanced Digital Marketing (Formally Credentialled)',
                  'Fully FAIS-compliant',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#B8922A] shrink-0 mt-0.5" />
                    <span className="text-neutral-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Two worlds section */}
      <section className="py-24 px-6 bg-[#0A1622]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white">Two worlds. One philosophy.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Briefcase,
                title: 'Financial Planning',
                description: "Years helping individuals and families build financial structures across investments, retirement, estate planning, life insurance, and healthcare — working with South Africa's most respected financial institutions.",
                items: ['Discovery', 'Sanlam', 'Liberty', 'Momentum', 'BrightRock', 'Allan Gray', 'Old Mutual'],
              },
              {
                icon: BookOpen,
                title: 'Digital Economy',
                description: 'Built and run a digital marketing business from the ground up — which means I understand what it takes to grow something, not just advise on it.',
                items: ['Digital Marketing', 'AI Consultancy', 'Web Design', 'Digital Branding'],
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-[#0F2035] rounded-2xl p-8 border border-white/5"
              >
                <div className="w-12 h-12 rounded-xl bg-[#B8922A]/10 flex items-center justify-center mb-6">
                  <item.icon size={24} className="text-[#B8922A]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.items.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs bg-white/5 text-neutral-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: "#0D1B2A" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to work together?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8922A] text-black font-bold rounded-full hover:bg-[#C9A040] transition-all"
          >
            Start the Conversation <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
