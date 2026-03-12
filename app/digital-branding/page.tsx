'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import {
  Palette,
  Type,
  Layout,
  FileText,
  CheckCircle2,
  ArrowRight,
  Eye,
} from 'lucide-react'

const services = [
  {
    icon: Eye,
    title: 'Logo & Visual Identity',
    description:
      'A distinctive, scalable visual identity that communicates who you are at a glance — designed for digital-first application across all platforms and formats.',
  },
  {
    icon: Type,
    title: 'Brand Messaging & Positioning Strategy',
    description:
      "Defining your brand voice, your value proposition, and the positioning that sets you apart in a crowded market. What you say and how you say it matters as much as how you look.",
  },
  {
    icon: Layout,
    title: 'Social Media Brand Presence & Templates',
    description:
      'A consistent, professionally designed visual system for your social channels — so every post, story, and graphic reinforces your brand rather than diluting it.',
  },
  {
    icon: FileText,
    title: 'Brand Guidelines & Style Systems',
    description:
      'A comprehensive reference document that ensures your brand stays consistent across every application, every platform, and every team member who touches it.',
  },
]

export default function DigitalBrandingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D1B2A" }}>
      <PageHero
        tag="Digital Branding"
        headline="Your brand is the first impression you never get to control — unless you design it."
        subheadline="Most businesses are so focused on what they sell that they forget to think about how they're perceived. Your brand is not your logo. It's the total impression someone forms about your business in the moments before they decide whether to trust you."
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80"
      />

      {/* Main copy */}
      <section className="py-24 px-6" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              The most common thing I encounter when working with new branding
              clients isn&apos;t bad design. It&apos;s absence.
            </h2>
            <div className="space-y-4 text-neutral-400 leading-relaxed">
              <p>
                No coherent identity. No consistent voice. No clear answer to the
                question every potential customer is silently asking: why should I
                choose you?
              </p>
              <p>
                Your brand is what people say about you when you&apos;re not in the
                room — and in a digital world, those impressions form faster than
                ever, across more touchpoints than most businesses are managing.
              </p>
              <p className="text-white font-medium">
                That absence is costing businesses more than they realise.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80"
                alt="Brand design"
                className="w-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-[#0A1622]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B8922A]/30 bg-[#B8922A]/10 mb-4">
              <span className="text-[#B8922A] text-xs font-semibold uppercase tracking-widest">
                What We Build
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              A complete brand system — not just a logo.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0F2035] rounded-2xl p-8 border border-white/5 hover:border-[#B8922A]/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#B8922A]/10 flex items-center justify-center mb-6">
                  <service.icon size={24} className="text-[#B8922A]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who + How */}
      <section className="py-24 px-6" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B8922A]/30 bg-[#B8922A]/10 mb-6">
              <span className="text-[#B8922A] text-xs font-semibold uppercase tracking-widest">
                Who This Is For
              </span>
            </div>
            <ul className="space-y-4">
              {[
                'Startups ready to enter the market and need a brand that commands attention from day one',
                "Established businesses that have evolved significantly but whose brand identity hasn't kept pace — and are starting to feel the disconnect",
                'SMEs active across multiple digital platforms but looking like a different business on each one, eroding trust and recognition',
                "Any business whose brand doesn't clearly communicate who they are, what they stand for, and why they're the right choice",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-[#B8922A] shrink-0 mt-1"
                  />
                  <span className="text-neutral-400 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B8922A]/30 bg-[#B8922A]/10 mb-6">
              <span className="text-[#B8922A] text-xs font-semibold uppercase tracking-widest">
                How It Works
              </span>
            </div>
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Deep-Dive Discovery',
                  desc: "I need to understand your business, your market, your competitors, and — critically — how you want your ideal client to feel when they encounter your brand.",
                },
                {
                  step: '02',
                  title: 'Identity Development',
                  desc: 'I develop the full identity system, presenting concepts at each stage with clear strategic rationale behind every decision.',
                },
                {
                  step: '03',
                  title: 'System Delivery',
                  desc: "The deliverable isn't just a set of files. It's a complete brand system you can deploy immediately and maintain consistently.",
                },
                {
                  step: '04',
                  title: 'Market Activation',
                  desc: 'Having spent years running a digital marketing business, I understand not just how to build a brand identity — but how it performs in the real world.',
                },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <span className="text-[#B8922A] font-bold text-lg shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{s.title}</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What sets this apart */}
      <section className="py-24 px-6 bg-[#0A1622]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Palette size={48} className="text-[#B8922A] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              What Sets This Apart
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Brand strategy and digital marketing rarely live in the same hands.
              Having spent years running a digital marketing business, I
              understand not just how to build a brand identity — but how it
              performs in the real world of paid media, content, and social.
              Every branding decision I make is informed by what actually works
              when that brand is activated in the market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: "#0D1B2A" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stop blending in. Start commanding trust.
          </h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Complete digital branding for businesses that are ready to build a
            presence that commands attention and earns trust — from day one.
          </p>
          <a
            href="https://outlook.office.com/book/MeetwithDilshaad@dilshaadwilliams.co.za/?ismsaljsauthenabled"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8922A] text-black font-bold rounded-full hover:bg-[#C9A040] transition-all"
          >
            Schedule an Appointment <ArrowRight size={18} />
          </a>
        </motion.div>
      </section>
    </div>
  )
}
