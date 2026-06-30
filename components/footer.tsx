import Image from 'next/image'
import { ExternalLink, Heart } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { CONTACT } from '@/lib/contact'

const navItems = ['Work', 'Services', 'Process', 'Contact']
const socials = [
  { label: 'Instagram', href: CONTACT.instagram, icon: Heart },
  { label: 'WhatsApp', href: CONTACT.whatsapp, icon: FaWhatsapp },
  { label: 'Behance', href: CONTACT.behance, icon: ExternalLink },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--brand)] bg-[var(--text)] py-10 text-white">
      <div className="container-x">
        <div className="grid items-center gap-8 border-b border-white/20 pb-10 md:grid-cols-[1fr_auto_1fr]">
          <div>
            <Image src="/SL-logo-new.png" alt="SL Graphics brand mark" width={120} height={40} className="h-10 w-auto object-contain" />
            <p className="mt-3 text-sm text-white/75">Bold visuals. Real impact.</p>
          </div>

          <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                data-cursor="hover"
                className="text-xs font-medium uppercase tracking-[0.15em] text-white/75 transition-colors duration-300 hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex gap-3 md:justify-end">
            {socials.map((social) => {
              const Icon = social.icon

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('https') ? '_blank' : undefined}
                  rel={social.href.startsWith('https') ? 'noreferrer' : undefined}
                  aria-label={social.label}
                  data-cursor="hover"
                  className="grid h-10 w-10 place-items-center border border-white/25 text-white/75 transition-colors duration-300 hover:border-white hover:text-white"
                >
                  <Icon size={19} aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>

        <p className="pt-8 text-xs uppercase tracking-[0.15em] text-white/65">
          Copyright {year} SL Graphics. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
