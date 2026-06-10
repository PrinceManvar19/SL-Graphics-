import Image from 'next/image'

const navItems = ['Work', 'Services', 'Process', 'Contact']
const socials = [
  { label: 'Instagram', href: '#', mark: 'IG' },
  { label: 'YouTube', href: '#', mark: 'YT' },
  { label: 'WhatsApp', href: 'https://wa.me/91XXXXXXXXXX', mark: 'WA' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] py-10">
      <div className="container-x">
        <div className="grid items-center gap-8 border-b border-[var(--border)] pb-10 md:grid-cols-[1fr_auto_1fr]">
          <div>
            <Image src="/sl-logo.png" alt="SL Graphics" width={120} height={40} className="h-10 w-auto object-contain" />
            <p className="mt-3 text-sm text-[var(--muted)]">Bold visuals. Real impact.</p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--brand)]"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex gap-3 md:justify-end">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('https') ? '_blank' : undefined}
                rel={social.href.startsWith('https') ? 'noreferrer' : undefined}
                aria-label={social.label}
                className="grid h-10 w-10 place-items-center rounded-[4px] border border-[var(--border)] text-[10px] font-bold tracking-[0.12em] text-[var(--muted)] transition-colors duration-300 hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                {social.mark}
              </a>
            ))}
          </div>
        </div>

        <p className="pt-8 text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
          © {year} SL Graphics. All rights reserved. Made in UP.
        </p>
      </div>
    </footer>
  )
}
