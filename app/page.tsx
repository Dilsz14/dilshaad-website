'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { SplineScene } from '@/components/ui/splite'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'
import {
  Shield,
  TrendingUp,
  Bot,
  Palette,
  ArrowRight,
  CheckCircle2,
  Star,
} from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Life Insurance',
    description:
      'Protecting your income, your family, and your legacy with the right cover in place.',
    href: '/life-insurance',
    color: 'from-blue-500/10 to-blue-600/5',
    border: 'border-blue-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description:
      'Full-funnel strategy and execution that replaces random activity with measurable growth.',
    href: '/digital-marketing',
    color: 'from-green-500/10 to-green-600/5',
    border: 'border-green-500/20',
    iconColor: 'text-green-400',
  },
  {
    icon: Bot,
    title: 'AI Consultancy',
    description:
      'Practical AI strategy and implementation for SMEs ready to pull ahead of their competition.',
    href: '/ai-consultancy',
    color: 'from-purple-500/10 to-purple-600/5',
    border: 'border-purple-500/20',
    iconColor: 'text-purple-400',
  },
  {
    icon: Palette,
    title: 'Digital Branding',
    description:
      'Complete brand identity systems that command trust and stop you from blending in.',
    href: '/digital-branding',
    color: 'from-[#B8922A]/10 to-[#B8922A]/5',
    border: 'border-amber-500/20',
    iconColor: 'text-[#B8922A]',
  },
]

const credentials = [
  'RE5 Qualified',
  'BCom Finance (In Progress)',
  '6 Regulatory Classes',
  'Adv. Digital Marketing',
  'FAIS Compliant',
  'Nearly a Decade of Experience',
]

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D1B2A" }}>
      {/* ── Hero Section ── */}
      <section className="relative min-h-screen">
        <Card className="w-full min-h-screen bg-black/[0.96] relative overflow-hidden rounded-none border-0">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />

          <div className="flex flex-col lg:flex-row h-screen">
            {/* Left content */}
            <div className="flex-1 p-8 lg:p-16 relative z-10 flex flex-col justify-center pt-28 lg:pt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B8922A]/30 bg-[#B8922A]/10 mb-6 w-fit"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8922A] animate-pulse" />
                <span className="text-[#B8922A] text-xs font-semibold uppercase tracking-widest">
                  Financial Advisor · Digital Entrepreneur
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  Building Wealth.
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#D4B878] to-[#A07820]">
                  Building Systems.
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  Building Legacies.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-lg text-neutral-400 max-w-lg leading-relaxed"
              >
                I&apos;m Dilshaad Williams — a financial advisor, digital
                entrepreneur, and systems thinker helping professionals and
                businesses build structures that create lasting value.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B8922A] text-black font-bold rounded-full hover:bg-[#C9A040] transition-all duration-200 hover:scale-105"
                >
                  Start the Conversation
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-white rounded-full hover:bg-white/5 transition-all duration-200"
                >
                  About Me
                </Link>
              </motion.div>
            </div>

            {/* Right — Spline 3D */}
            <div className="flex-1 relative min-h-[40vh] lg:min-h-0">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </section>

      {/* ── Services Section ── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B8922A]/30 bg-[#B8922A]/10 mb-4">
              <span className="text-[#B8922A] text-xs font-semibold uppercase tracking-widest">
                What I Do
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              One advisor. Multiple disciplines.
            </h2>
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-lg">
              Most professionals keep financial planning and the digital economy
              separate. I don&apos;t.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={service.href} className="block group">
                  <div
                    className={`relative p-8 rounded-2xl border ${service.border} bg-gradient-to-br ${service.color} hover:border-[#B8922A]/40 transition-all duration-300 hover:scale-[1.02]`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center mb-6 ${service.iconColor}`}
                    >
                      <service.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-[#B8922A] font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn more <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Philosophy Section ── */}
      <section className="py-24 px-6 bg-[#0A1622]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B8922A]/30 bg-[#B8922A]/10 mb-6">
              <span className="text-[#B8922A] text-xs font-semibold uppercase tracking-widest">
                The Philosophy
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Build something that outlasts the moment.
            </h2>
            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              My career began in sales — learning how to listen, understand what
              people actually need, and earn trust consistently. That foundation
              shaped everything that came after.
            </p>
            <p className="mt-4 text-neutral-400 leading-relaxed">
              The common thread across everything I do isn&apos;t the industry.
              It&apos;s the philosophy. Design systems, not quick fixes. Think in
              decades, not quarters.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#B8922A] text-black font-bold rounded-full hover:bg-[#C9A040] transition-all duration-200"
            >
              My Full Story <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/dilshaad.jpeg"
                alt="Dilshaad Williams"
                className="w-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <p className="text-[#B8922A] text-xs font-semibold uppercase tracking-widest mb-3">
                  Credentials & Qualifications
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {credentials.map((cred) => (
                    <div key={cred} className="flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-[#B8922A] shrink-0" />
                      <span className="text-white text-xs">{cred}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="py-20 px-6 border-y border-white/5" style={{ backgroundColor: '#0D1B2A' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '~10', label: 'Years of Experience' },
            { value: '6', label: 'Regulatory Classes' },
            { value: '4', label: 'Service Disciplines' },
            { value: '100%', label: 'FAIS Compliant' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#B8922A] mb-2">
                {stat.value}
              </div>
              <div className="text-neutral-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Quote Section ── */}
      <section className="py-24 px-6 bg-[#0A1622]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-[#B8922A] fill-[#B8922A]" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed">
              &ldquo;When you work with me, you&apos;re not getting a product
              pitch. You&apos;re getting a sharp, analytically-driven advisor who
              is genuinely invested in where you&apos;ll be five, ten, and twenty
              years from now.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#B8922A]/20 flex items-center justify-center">
                <span className="text-[#B8922A] font-bold text-sm">DW</span>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-sm">
                  Dilshaad Williams
                </div>
                <div className="text-neutral-500 text-xs">
                  Financial Advisor & Digital Entrepreneur
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to build something{' '}
              <span className="text-[#B8922A]">that lasts?</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
              Whether you&apos;re looking to structure your finances, grow your
              digital presence, or integrate AI into your business — let&apos;s
              start with a conversation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#B8922A] text-black font-bold text-lg rounded-full hover:bg-[#C9A040] transition-all duration-200 hover:scale-105"
            >
              Get in Touch <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
