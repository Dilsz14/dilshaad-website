import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[#B8922A]/15 py-16 px-6" style={{ backgroundColor: '#0A1622' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/logo-horizontal.png"
              alt="Dilshaad Williams"
              width={180}
              height={46}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
            Financial advisor, digital entrepreneur, and systems thinker. Building wealth, systems, and legacies.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#B8922A' }}>Services</h3>
          <ul className="space-y-2">
            {[
              { href: '/life-insurance',    label: 'Financial Planning' },
              { href: '/digital-marketing', label: 'Digital Marketing' },
              { href: '/ai-consultancy',    label: 'AI Consultancy' },
              { href: '/digital-branding',  label: 'Digital Branding' },
              { href: '/web-design',        label: 'Web Design' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-neutral-400 text-sm transition-colors duration-200 hover:text-[#B8922A]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#B8922A' }}>Contact</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:hello@dilshaadwilliams.co.za"
                className="flex items-center gap-2 text-neutral-400 hover:text-[#B8922A] text-sm transition-colors"
              >
                <Mail size={14} />
                hello@dilshaadwilliams.co.za
              </a>
            </li>
            <li>
              <a
                href="tel:+27645443879"
                className="flex items-center gap-2 text-neutral-400 hover:text-[#B8922A] text-sm transition-colors"
              >
                <Phone size={14} />
                064 544 3879
              </a>
            </li>
            <li className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/dilshaad-williams/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-[#B8922A] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/dilshaad.exe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-[#B8922A] transition-colors"
              >
                <Instagram size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-neutral-600 text-xs">
          © {new Date().getFullYear()} Dilshaad Williams. All rights reserved.
        </p>
        <p className="text-neutral-600 text-xs">
          FSP Licensed · RE5 Qualified · FAIS Compliant
        </p>
      </div>
    </footer>
  )
}
