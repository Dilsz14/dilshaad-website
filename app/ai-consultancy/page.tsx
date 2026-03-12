'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import {
  Bot,
  Zap,
  Users,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Cpu,
} from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'Workflow & Admin Automation',
    description:
      "Identifying the repetitive, time-consuming tasks that are quietly consuming your team's capacity and replacing them with intelligent automated systems that run without supervision.",
  },
  {
    icon: Users,
    title: 'Sales & Lead Generation',
    description:
      'Deploying AI tools that identify, qualify, and nurture leads more efficiently — so your sales effort goes into closing, not chasing.',
  },
  {
    icon: MessageSquare,
    title: 'Content Creation & Marketing Automation',
    description:
      'Building content systems powered by AI that maintain a consistent, high-quality brand voice across channels without requiring manual output every time.',
  },
  {
    icon: Cpu,
    title: 'AI Strategy & Team Education',
    description:
      "Helping you and your team understand what AI can and can't do, where the real opportunities are in your specific business, and how to build a culture that adopts new tools confidently.",
  },
]

export default function AIConsultancyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D1B2A" }}>
      <PageHero
        tag="AI Consultancy"
        headline="AI isn't the future of business. It's the present — and most SMEs are missing it."
        subheadline="Artificial intelligence is no longer a conversation about what's coming. It's a conversation about what's already happening — in your industry, in your market, and in the businesses you're competing against."
        image="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80"
      />

      {/* Intro copy */}
      <section className="py-24 px-6" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              The gap between businesses that have integrated AI and those that haven&apos;t is widening every quarter.
            </h2>
            <div className="space-y-4 text-neutral-400 leading-relaxed">
              <p>
                The good news is that gap is still closeable. But it requires
                more than downloading a tool and hoping for the best. It requires
                strategy, implementation, and someone who understands both the
                technology and the business reality behind it.
              </p>
              <p>
                Most AI consultants are technologists who&apos;ve never run a
                business. I&apos;ve built and managed a digital operation from
                the ground up — which means I approach AI through the lens of
                outcomes, not features.
              </p>
              <p className="text-white font-medium">
                The question I ask is never &ldquo;what can this tool do?&rdquo;
                It&apos;s always &ldquo;what does your business need — and is
                this the right way to get there?&rdquo;
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
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&q=80"
                alt="AI technology"
                className="w-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent" />
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
                What We Work On
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              The highest-leverage AI opportunities for your business.
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
                className="bg-[#0F2035] rounded-2xl p-8 border border-white/5 hover:border-purple-400/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-400/10 flex items-center justify-center mb-6">
                  <service.icon size={24} className="text-purple-400" />
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
            <h2 className="text-3xl font-bold text-white mb-6">
              Is this for you?
            </h2>
            <ul className="space-y-4">
              {[
                "Small and medium businesses watching competitors move faster, produce more, and operate leaner",
                "Business owners who know AI is relevant but haven't had the time or guidance to figure out what that means for their specific operation",
                "Teams willing to think differently about how the business runs — and open to building systems that free people to focus on work that actually requires a human",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-purple-400 shrink-0 mt-1"
                  />
                  <span className="text-neutral-400 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-6 rounded-2xl bg-purple-400/5 border border-purple-400/20">
              <p className="text-purple-300 text-sm italic leading-relaxed">
                &ldquo;You don&apos;t need to be technical. You need to be
                willing to think differently about how your business runs.&rdquo;
              </p>
            </div>
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
                  title: 'Business Audit',
                  desc: 'A focused session to map your current workflows, identify where time and money are being lost, and surface the highest-impact opportunities for AI integration.',
                },
                {
                  step: '02',
                  title: 'Implementation Roadmap',
                  desc: 'I develop a practical roadmap, help you select the right tools for your context, and plan the adoption process.',
                },
                {
                  step: '03',
                  title: 'Tool Selection',
                  desc: 'No jargon. No overcomplicated tech stacks. Just clear, actionable choices built around your business as it actually exists.',
                },
                {
                  step: '04',
                  title: 'Team Adoption Support',
                  desc: 'I support your team through adoption — building confidence and capability, not dependency.',
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

      {/* CTA */}
      <section className="py-24 px-6 bg-[#0A1622] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <Bot size={48} className="text-purple-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stop falling behind. Start pulling ahead.
          </h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Practical AI strategy and implementation for small and medium
            businesses ready to operate at the level their competitors aren&apos;t.
          </p>
          <a
            href="https://outlook.office.com/book/MeetwithDilshaad@dilshaadwilliams.co.za/?ismsaljsauthenabled"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8922A] text-black font-bold rounded-full hover:bg-[#C9A040] transition-all"
          >
            Book an AI Audit <ArrowRight size={18} />
          </a>
        </motion.div>
      </section>
    </div>
  )
}
