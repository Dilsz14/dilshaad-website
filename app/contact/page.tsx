'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Instagram, ArrowRight, CheckCircle2, Video } from 'lucide-react'

const WHATSAPP_NUMBER = '27645443879'

const services = [
  'Life Insurance / Financial Planning',
  'Digital Marketing',
  'AI Consultancy',
  'Digital Branding',
  'Web Design',
  'General Enquiry',
]

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D1B2A" }}>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-400/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B8922A]/30 bg-[#B8922A]/10 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8922A] animate-pulse" />
            <span className="text-[#B8922A] text-xs font-semibold uppercase tracking-widest">
              Get in Touch
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Let&apos;s start a{' '}
            <span className="text-[#B8922A]">conversation.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 text-lg max-w-2xl mx-auto"
          >
            Whether you&apos;re looking to structure your finances, grow your
            digital presence, or integrate AI into your business — it starts with
            a conversation.
          </motion.p>

          {/* Teams note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F2035] border border-white/10"
          >
            <Video size={15} className="text-blue-400" />
            <span className="text-neutral-400 text-sm">
              Introductory appointments are held via{' '}
              <span className="text-white font-medium">Microsoft Teams</span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Banner */}
      <section className="px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-between gap-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl px-6 py-5 hover:bg-[#25D366]/15 transition-all duration-200 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
                <WhatsAppIcon size={22} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  Prefer to chat on WhatsApp?
                </p>
                <p className="text-neutral-400 text-xs mt-0.5">
                  Message me directly on 064 544 3879 — I&apos;ll get back to you promptly.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#25D366] font-semibold text-sm shrink-0 group-hover:gap-3 transition-all">
              Open WhatsApp <ArrowRight size={16} />
            </div>
          </motion.a>
        </div>
      </section>

      {/* Booking Section */}
      <section className="px-6 pb-8" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0F2035] rounded-2xl p-8 border border-white/5 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B8922A]/30 bg-[#B8922A]/10 mb-4">
              <span className="text-[#B8922A] text-xs font-semibold uppercase tracking-widest">
                Book a Meeting
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Schedule a time directly
            </h2>
            <p className="text-neutral-400 text-sm mb-6 max-w-lg mx-auto">
              Pick a slot that works for you — introductory appointments are held via Microsoft Teams.
            </p>
            <a
              href="https://outlook.office.com/book/MeetwithDilshaad@dilshaadwilliams.co.za/?ismsaljsauthenabled"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8922A] text-black font-bold rounded-full hover:bg-[#C9A040] transition-all duration-200 hover:scale-105"
            >
              Schedule an Appointment <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-8 px-6 pb-24" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact details */}
            <div className="bg-[#0F2035] rounded-2xl p-8 border border-white/5">
              <h3 className="text-white font-semibold text-lg mb-6">
                Contact Details
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:hello@dilshaadwilliams.co.za"
                  className="flex items-center gap-3 text-neutral-400 hover:text-[#B8922A] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#B8922A]/10 flex items-center justify-center">
                    <Mail size={18} className="text-[#B8922A]" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-600 mb-0.5">Email</p>
                    <p className="text-sm text-neutral-300">
                      hello@dilshaadwilliams.co.za
                    </p>
                  </div>
                </a>
                <a
                  href="tel:+27645443879"
                  className="flex items-center gap-3 text-neutral-400 hover:text-[#B8922A] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#B8922A]/10 flex items-center justify-center">
                    <Phone size={18} className="text-[#B8922A]" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-600 mb-0.5">Phone / WhatsApp</p>
                    <p className="text-sm text-neutral-300">064 544 3879</p>
                  </div>
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-400 hover:text-[#25D366] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                    <WhatsAppIcon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-600 mb-0.5">WhatsApp</p>
                    <p className="text-sm text-neutral-300">Message me directly</p>
                  </div>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-xs text-neutral-600 mb-3">Follow</p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/dilshaad-williams/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-neutral-400 hover:text-[#B8922A] hover:bg-[#B8922A]/10 transition-all"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://www.instagram.com/dilshaad.exe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-neutral-400 hover:text-[#B8922A] hover:bg-[#B8922A]/10 transition-all"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* What to expect */}
            <div className="bg-[#0F2035] rounded-2xl p-8 border border-white/5">
              <h3 className="text-white font-semibold text-lg mb-6">
                What to Expect
              </h3>
              <ul className="space-y-3">
                {[
                  'A response within 24 hours',
                  'No pitch decks, no pressure',
                  'A genuine conversation about your needs',
                  'Introductory appointments via Microsoft Teams',
                  'Clear next steps after our first call',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={14} className="text-[#B8922A] shrink-0" />
                    <span className="text-neutral-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div className="bg-[#0F2035] rounded-2xl p-8 border border-white/5">
              <h3 className="text-white font-semibold text-lg mb-3">
                Based In
              </h3>
              <p className="text-neutral-400 text-sm">
                South Africa — serving clients nationally and internationally.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="bg-[#0F2035] rounded-2xl p-8 md:p-10 border border-white/5">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-[#B8922A]/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} className="text-[#B8922A]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Message Received
                  </h3>
                  <p className="text-neutral-400 max-w-sm mx-auto mb-8">
                    Thank you for reaching out. I&apos;ll be in touch within 24
                    hours to schedule our first conversation via Microsoft Teams.
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] rounded-full text-sm font-medium hover:bg-[#25D366]/20 transition-all"
                  >
                    <WhatsAppIcon size={16} />
                    Or reach me on WhatsApp
                  </a>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-white mb-8">
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs text-neutral-500 uppercase tracking-widest mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-[#B8922A]/50 transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-neutral-500 uppercase tracking-widest mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-[#B8922A]/50 transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs text-neutral-500 uppercase tracking-widest mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="064 000 0000"
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-[#B8922A]/50 transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-neutral-500 uppercase tracking-widest mb-2">
                          I&apos;m Interested In
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#B8922A]/50 transition-colors text-sm appearance-none"
                        >
                          <option value="" className="bg-[#0F2035]">
                            Select a service
                          </option>
                          {services.map((s) => (
                            <option key={s} value={s} className="bg-[#0F2035]">
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-500 uppercase tracking-widest mb-2">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell me about your situation and what you're looking to achieve..."
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-[#B8922A]/50 transition-colors text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#B8922A] text-black font-bold rounded-xl hover:bg-[#C9A040] transition-all duration-200 hover:scale-[1.02]"
                    >
                      Send Message <ArrowRight size={18} />
                    </button>

                    <p className="text-xs text-neutral-600 text-center">
                      Your information is kept strictly confidential. No spam, ever.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
