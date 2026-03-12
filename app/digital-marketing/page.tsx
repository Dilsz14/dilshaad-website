'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { TrendingUp, Search, Mail, Target, CheckCircle2, ArrowRight, BarChart3 } from 'lucide-react'

export default function DigitalMarketingPage() {
  const services = [
    { icon: BarChart3, title: 'Full Funnel Strategy & Execution', description: 'Mapping the complete customer journey from awareness to conversion and building the marketing infrastructure to support every stage — so every rand spent has a clear role.' },
    { icon: Target, title: 'Paid Advertising — Meta & Google', description: 'Targeted, data-driven ad campaigns built around clear objectives, precise audience segmentation, and continuous optimisation. Structured campaigns, not boosted posts.' },
    { icon: Search, title: 'Search Engine Optimisation (SEO)', description: "Building your organic visibility so the right people find you when they're actively searching for what you offer — reducing long-term dependence on paid channels." },
    { icon: Mail, title: 'Email Marketing & Nurture Campaigns', description: "Building and managing email systems that keep your audience warm, build trust over time, and convert prospects who aren't ready today into clients who are ready tomorrow." },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D1B2A" }}>
      <PageHero
        tag="Digital Marketing"
        headline="Most businesses don't have a marketing problem. They have a strategy problem."
        subheadline="There is no shortage of businesses spending money on digital marketing and seeing very little in return. The problem is almost never the platform. It's almost never the budget. It's the absence of a coherent strategy."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
      />

      {/* Main copy */}
      <section className="py-24 px-6" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
                Activity is not the same as results.
              </h2>
              <div className="space-y-4 text-neutral-400 leading-relaxed">
                <p>Boosted posts are not a campaign. A Facebook page is not a marketing strategy. And activity — no matter how consistent — is not the same as results.</p>
                <p>The ads run, the posts go out, the budget gets consumed — and at the end of the month the leads aren't there to justify any of it.</p>
                <p>What's missing is a coherent strategy connecting every moving part into a system that actually builds toward something.</p>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80"
              alt="Digital marketing analytics"
              className="rounded-2xl w-full object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-[#0A1622]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B8922A]/30 bg-[#B8922A]/10 mb-4">
              <span className="text-[#B8922A] text-xs font-semibold uppercase tracking-widest">What We Build</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">A system that consistently generates leads and growth.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0F2035] rounded-2xl p-8 border border-white/5 hover:border-green-400/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center mb-6">
                  <service.icon size={24} className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for + How it works */}
      <section className="py-24 px-6" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B8922A]/30 bg-[#B8922A]/10 mb-6">
              <span className="text-[#B8922A] text-xs font-semibold uppercase tracking-widest">Who This Is For</span>
            </div>
            <ul className="space-y-4">
              {[
                'Small businesses that are active online but have no clear strategy connecting their efforts to actual growth',
                'SMEs with a marketing budget who are tired of spending it without being able to point to what it produced',
                'Businesses that have tried digital marketing before and walked away with nothing but invoices to show for it',
                'Any business where digital marketing feels like a series of disconnected activities rather than a coherent system',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-green-400 shrink-0 mt-1" />
                  <span className="text-neutral-400 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B8922A]/30 bg-[#B8922A]/10 mb-6">
              <span className="text-[#B8922A] text-xs font-semibold uppercase tracking-widest">How It Works</span>
            </div>
            <div className="space-y-6">
              {[
                { step: '01', title: 'Marketing Audit', desc: 'I look at where you are, who your audience is, what your competitors are doing, and where the highest-leverage opportunities exist.' },
                { step: '02', title: 'Strategy Development', desc: 'A structured marketing strategy with clear objectives, defined channels, and measurable KPIs.' },
                { step: '03', title: 'Execution', desc: 'Every decision made along the way is traceable back to a business outcome.' },
                { step: '04', title: 'Monthly Reporting', desc: 'You always know exactly what your marketing is doing and why.' },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <span className="text-[#B8922A] font-bold text-lg shrink-0">{s.step}</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{s.title}</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#0A1622] text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Replace random activity with a system that works.</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">Full-funnel digital marketing strategy and execution for businesses ready to consistently generate leads and growth.</p>
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
