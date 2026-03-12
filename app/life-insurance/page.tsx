'use client'
import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'
import {
  Shield,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Briefcase,
  HeartPulse,
  ScrollText,
  Landmark,
  TrendingDown,
} from 'lucide-react'

const coverageAreas = [
  {
    icon: Shield,
    title: 'Life & Disability Cover',
    description:
      'Ensuring your income, your debts, and your dependants are protected if the unexpected happens — so the people who rely on you are never left exposed.',
  },
  {
    icon: Landmark,
    title: 'Retirement Planning',
    description:
      "Building a strategy that ensures you don't outlive your money — at the right contribution level and investment allocation for your specific timeline.",
  },
  {
    icon: TrendingUp,
    title: 'Investment Planning',
    description:
      'Growing your assets in a tax-efficient, risk-appropriate way over the long term — structured around your goals, not a generic portfolio model.',
  },
  {
    icon: Briefcase,
    title: 'Business Planning',
    description:
      'Protecting your business interests through key person cover, buy-and-sell agreements, and business continuity structures that keep operations intact when the unexpected occurs.',
  },
  {
    icon: ScrollText,
    title: 'Estate Planning',
    description:
      'Making sure the wealth you build passes efficiently and tax-effectively to the people and causes you care about — without unnecessary delay or cost.',
  },
  {
    icon: HeartPulse,
    title: 'Medical Aid & Gap Cover',
    description:
      'Ensuring you and your family have access to quality healthcare without catastrophic out-of-pocket exposure — with the right plan for your life stage and budget.',
  },
]

const providerGroups = [
  {
    label: 'Life, Investment & Retirement',
    providers: [
      { name: 'Discovery', domain: 'discovery.co.za' },
      { name: 'Sanlam', domain: 'sanlam.co.za' },
      { name: 'Liberty', domain: 'liberty.co.za' },
      { name: 'Momentum', domain: 'momentum.co.za' },
      { name: 'BrightRock', domain: 'brightrock.co.za' },
      { name: 'Allan Gray', domain: 'allangray.co.za' },
      { name: 'Old Mutual', domain: 'oldmutual.co.za' },
    ],
  },
  {
    label: 'Medical Aid & Gap Cover',
    providers: [
      { name: 'Bestmed', domain: 'bestmed.co.za' },
      { name: 'MediHelp', domain: 'medihelp.co.za' },
      { name: 'Bonitas', domain: 'bonitas.co.za' },
      { name: 'Netcare Gap Cover', domain: 'netcare.co.za' },
    ],
  },
  {
    label: 'Estate Planning',
    providers: [
      { name: 'Capital Legacy', domain: 'capitallegacy.co.za' },
    ],
  },
]

export default function FinancialPlanningPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0D1B2A' }}>
      <PageHero
        tag="Financial Planning"
        headline="Your income is not your wealth. Your structure is."
        subheadline="Most people who come to me aren't financially irresponsible. They're busy — building careers, running businesses, raising families — and quietly assuming they'll get around to the financial stuff later. Later has a cost."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
      />

      {/* Main copy */}
      <section className="py-24 px-6" style={{ backgroundColor: '#0D1B2A' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Earning well and building wealth are two entirely different things.
            </h2>
            <div className="space-y-4 text-neutral-400 leading-relaxed">
              <p>
                One fills your account. The other builds something that compounds — something that outlasts you, protects your family, and eventually works harder than you do.
              </p>
              <p>
                That gap between income and legacy is where financial planning lives. And closing it is what I do.
              </p>
              <p>
                A financial plan isn't a single product. It's a coordinated structure built around your life, your risk profile, and your long-term objectives.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80"
              alt="Financial planning"
              className="rounded-2xl w-full object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </section>

      {/* What we cover */}
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
                What We Cover
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              A coordinated structure built around your life.
            </h2>
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
              A financial plan isn't one product — it's every area of your financial life working together toward a single outcome.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#0F2035] rounded-2xl p-8 border border-white/5 hover:border-[#B8922A]/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#B8922A]/10 flex items-center justify-center mb-6">
                  <area.icon size={24} className="text-[#B8922A]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for + How it works */}
      <section className="py-24 px-6" style={{ backgroundColor: '#0D1B2A' }}>
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
            <h2 className="text-3xl font-bold text-white mb-6">Is this for you?</h2>
            <ul className="space-y-4">
              {[
                "Professionals and business owners who are earning well but haven't formalised where it's all going",
                'Business owners who have poured everything into their ventures but left personal financial planning as an afterthought',
                'Anyone ready to build a clearer, coordinated financial structure',
                "People who have cover in place — but haven't sat down with an advisor in years. Products change. Life changes.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#B8922A] shrink-0 mt-1" />
                  <span className="text-neutral-400 text-sm leading-relaxed">{item}</span>
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
            <h2 className="text-3xl font-bold text-white mb-6">Simple. Transparent. Structured.</h2>
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Discovery Conversation',
                  desc: 'A thorough conversation to understand your current position, obligations, goals, and timeline. No forms, no pitch decks.',
                },
                {
                  step: '02',
                  title: 'Personalised Plan',
                  desc: 'I build a structured, personalised financial plan and walk you through every element in plain language.',
                },
                {
                  step: '03',
                  title: 'Implementation',
                  desc: 'We implement the plan together with full transparency at every step.',
                },
                {
                  step: '04',
                  title: 'Ongoing Review',
                  desc: "A financial plan isn't filed away — it's a living strategy that evolves as your life does.",
                },
              ].map((step) => (
                <div key={step.step} className="flex gap-4">
                  <span className="text-[#B8922A] font-bold text-lg shrink-0">{step.step}</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Providers */}
      <section className="py-24 px-6 bg-[#0A1622]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B8922A]/30 bg-[#B8922A]/10 mb-4">
              <span className="text-[#B8922A] text-xs font-semibold uppercase tracking-widest">
                Accredited & Licensed
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white mt-4 mb-4">
              South Africa's most trusted providers.
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              I am fully accredited and licensed to advise across these providers. Every recommendation is grounded in an objective assessment of your needs — not a preference for any single product.
            </p>
          </motion.div>

          <div className="space-y-12">
            {providerGroups.map((group, gi) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1 }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-6 text-center">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  {group.providers.map((provider) => (
                    <div
                      key={provider.name}
                      className="flex items-center gap-3 bg-white/[0.04] border border-white/8 rounded-2xl px-5 py-3.5 hover:border-[#B8922A]/30 hover:bg-[#B8922A]/5 transition-all duration-200"
                    >
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0">
                        <img
                          src={`https://logo.clearbit.com/${provider.domain}`}
                          alt={provider.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const el = e.currentTarget
                            el.style.display = 'none'
                          }}
                        />
                      </div>
                      <span className="text-neutral-200 text-sm font-medium whitespace-nowrap">
                        {provider.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-neutral-600 text-xs mt-12"
          >
            RE5 Qualified · 6 Regulatory Classes of Business · Fully FAIS Compliant
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: '#0D1B2A' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don&apos;t let &ldquo;later&rdquo; have a cost.
          </h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Whether you&apos;re building from scratch or optimising what you&apos;ve already accumulated — let&apos;s start with a conversation.
          </p>
          <a
            href="https://outlook.office.com/book/MeetwithDilshaad@dilshaadwilliams.co.za/?ismsaljsauthenabled"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8922A] text-black font-bold rounded-full hover:bg-[#C9A040] transition-all"
          >
            Book a Discovery Call <ArrowRight size={18} />
          </a>
        </motion.div>
      </section>
    </div>
  )
}
