'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import {
  Layout,
  ShoppingBag,
  RefreshCw,
  User,
  CheckCircle2,
  ArrowRight,
  Monitor,
} from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: 'Custom Websites Built From Scratch',
    description:
      'Purpose-built, original design tailored to your brand, your audience, and your business objectives. No templates, no shortcuts.',
  },
  {
    icon: RefreshCw,
    title: 'Rebuilds of Existing Sites',
    description:
      "If your current website is underperforming, outdated, or no longer reflects who you are, I rebuild it from the ground up with a sharper strategy behind every decision.",
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce Websites',
    description:
      'Online stores designed to sell — with clean product presentation, a frictionless checkout experience, and the back-end structure to scale as your business grows.',
  },
  {
    icon: User,
    title: 'Personal & Portfolio Sites',
    description:
      'For professionals and entrepreneurs who need a digital presence that communicates authority, credibility, and personality without feeling generic.',
  },
]

export default function WebDesignPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D1B2A" }}>
      <PageHero
        tag="Web Design"
        headline="Your website is working 24 hours a day. The question is whether it's working for you."
        subheadline="Most businesses have a website. Very few have one that actually works. There's a significant difference between a website that exists and a website that converts."
        image="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80"
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
              &ldquo;We have a site, but it doesn&apos;t really do anything for
              us.&rdquo;
            </h2>
            <div className="space-y-4 text-neutral-400 leading-relaxed">
              <p>
                That&apos;s the most common thing I hear from new clients.
                That&apos;s not a traffic problem. That&apos;s a design and
                strategy problem — and it&apos;s exactly what I fix.
              </p>
              <p>
                There&apos;s a significant difference between a website that
                exists and a website that converts — that earns trust in the
                first few seconds, guides visitors toward a clear action, and
                turns anonymous traffic into real enquiries.
              </p>
              <p className="text-white font-medium">
                That difference isn&apos;t accidental. It&apos;s designed.
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
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&q=80"
                alt="Web design"
                className="w-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* What we build */}
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
              Every site built with one question in mind.
            </h2>
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
              Will this move the right person closer to getting in touch?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0F2035] rounded-2xl p-8 border border-white/5 hover:border-sky-400/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-400/10 flex items-center justify-center mb-6">
                  <service.icon size={24} className="text-sky-400" />
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

      {/* Who this is for + How it works */}
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
                "Small business owners whose websites are live but silent — attracting visitors who leave without making contact",
                "Entrepreneurs who are rebranding and need their digital presence to catch up with where the business has evolved",
                "Professionals building a personal brand who need a site that reflects the quality of their work",
                "SMEs who understand that in today's market, your website is your most important salesperson — and it needs to perform like one",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-sky-400 shrink-0 mt-1"
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
                  title: 'Strategy Session',
                  desc: 'Before a single design decision is made, I need to understand your business, your audience, your competitors, and what success looks like for this project.',
                },
                {
                  step: '02',
                  title: 'Wireframing & Design',
                  desc: 'We move through wireframing and design with your input at every key stage.',
                },
                {
                  step: '03',
                  title: 'Development & Launch',
                  desc: 'Clean, performant build with full quality checks before going live.',
                },
                {
                  step: '04',
                  title: 'Post-Launch Support',
                  desc: "I ensure you're equipped to manage and update your site independently, with support available as your needs evolve.",
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
            <Monitor size={48} className="text-sky-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              What Sets This Apart
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Most web designers think in aesthetics. I think in outcomes. Having
              built and run a digital marketing business, I understand that a
              website isn&apos;t just a creative project — it&apos;s a commercial
              tool. Every layout decision, every call to action, every page
              structure is made with one question in mind: will this move the
              right person closer to getting in touch?
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
            A website that actually works.
          </h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Custom web design for businesses and professionals who need more than
            a good-looking site — they need one that performs.
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
