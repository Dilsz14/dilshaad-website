'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const serviceLinks = [
  { href: '/life-insurance',    label: 'Financial Planning', desc: 'Investments, retirement & cover' },
  { href: '/digital-marketing', label: 'Digital Marketing', desc: 'Full-funnel strategy & execution' },
  { href: '/ai-consultancy',    label: 'AI Consultancy',    desc: 'Practical AI for SMEs' },
  { href: '/digital-branding',  label: 'Digital Branding',  desc: 'Identity & brand systems' },
  { href: '/web-design',        label: 'Web Design',        desc: 'Sites that convert' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setServicesOpen(false)
  }, [pathname])

  const isServiceActive = serviceLinks.some((s) => pathname === s.href)

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'backdrop-blur-md border-b border-[#B8922A]/15 py-3'
          : 'bg-transparent py-5'
      )}
      style={scrolled ? { backgroundColor: 'rgba(13,27,42,0.92)' } : undefined}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-horizontal.png"
            alt="Dilshaad Williams"
            width={200}
            height={52}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          <Link
            href="/"
            className={cn(
              'px-4 py-2 text-sm font-medium rounded-full transition-all duration-200',
              pathname === '/'
                ? 'text-[#B8922A] bg-[#B8922A]/10'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            )}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={cn(
              'px-4 py-2 text-sm font-medium rounded-full transition-all duration-200',
              pathname === '/about'
                ? 'text-[#B8922A] bg-[#B8922A]/10'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            )}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={cn(
                'flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200',
                isServiceActive
                  ? 'text-[#B8922A] bg-[#B8922A]/10'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              )}
            >
              Services
              <ChevronDown
                size={14}
                className={cn('transition-transform duration-200', servicesOpen ? 'rotate-180' : '')}
              />
            </button>

            {servicesOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 backdrop-blur-md border border-white/10 rounded-2xl p-2 shadow-2xl"
                style={{ backgroundColor: 'rgba(13,27,42,0.97)' }}
              >
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setServicesOpen(false)}
                    className={cn(
                      'flex flex-col px-4 py-3 rounded-xl transition-all duration-150 group',
                      pathname === link.href ? 'bg-[#B8922A]/10' : 'hover:bg-white/5'
                    )}
                  >
                    <span className={cn(
                      'text-sm font-medium',
                      pathname === link.href
                        ? 'text-[#B8922A]'
                        : 'text-white group-hover:text-[#B8922A] transition-colors'
                    )}>
                      {link.label}
                    </span>
                    <span className="text-xs text-neutral-500 mt-0.5">{link.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={cn(
              'px-4 py-2 text-sm font-medium rounded-full transition-all duration-200',
              pathname === '/contact'
                ? 'text-[#B8922A] bg-[#B8922A]/10'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            )}
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: '#B8922A', color: '#0D1B2A' }}
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden backdrop-blur-md border-t border-[#B8922A]/15 px-6 py-4 flex flex-col gap-1"
          style={{ backgroundColor: 'rgba(13,27,42,0.97)' }}
        >
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={cn(
              'px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200',
              pathname === '/' ? 'text-[#B8922A] bg-[#B8922A]/10' : 'text-neutral-300 hover:text-white hover:bg-white/5'
            )}
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={cn(
              'px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200',
              pathname === '/about' ? 'text-[#B8922A] bg-[#B8922A]/10' : 'text-neutral-300 hover:text-white hover:bg-white/5'
            )}
          >
            About
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={cn(
                'w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200',
                isServiceActive ? 'text-[#B8922A] bg-[#B8922A]/10' : 'text-neutral-300 hover:text-white hover:bg-white/5'
              )}
            >
              Services
              <ChevronDown size={14} className={cn('transition-transform duration-200', mobileServicesOpen ? 'rotate-180' : '')} />
            </button>
            {mobileServicesOpen && (
              <div className="ml-4 mt-1 flex flex-col gap-1">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'px-4 py-2.5 text-sm rounded-lg transition-all duration-200',
                      pathname === link.href ? 'text-[#B8922A] bg-[#B8922A]/10' : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={cn(
              'px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200',
              pathname === '/contact' ? 'text-[#B8922A] bg-[#B8922A]/10' : 'text-neutral-300 hover:text-white hover:bg-white/5'
            )}
          >
            Contact
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 px-5 py-3 text-sm font-semibold rounded-full text-center transition-all hover:opacity-90"
            style={{ backgroundColor: '#B8922A', color: '#0D1B2A' }}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  )
}
