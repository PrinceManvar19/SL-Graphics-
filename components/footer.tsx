import Image from 'next/image'

const navItems = ['Work', 'Services', 'Process', 'Contact']
const socials = [
  { label: 'Instagram', href: '#', icon: InstagramIcon },
  { label: 'YouTube', href: '#', icon: YouTubeIcon },
  { label: 'WhatsApp', href: 'https://wa.me/91XXXXXXXXXX', icon: WhatsAppIcon },
]

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M21 8.2a3 3 0 0 0-2.1-2.1C17 5.6 12 5.6 12 5.6s-5 0-6.9.5A3 3 0 0 0 3 8.2 31 31 0 0 0 2.5 12a31 31 0 0 0 .5 3.8 3 3 0 0 0 2.1 2.1c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-3.8 31 31 0 0 0-.5-3.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="m10.2 15 4.7-3-4.7-3v6Z" fill="currentColor" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M5.2 19.2 6.3 15A7.7 7.7 0 1 1 9 17.7l-3.8 1.5Z" />
      <path d="M9.4 8.6c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c-.1.2-.1.3 0 .5.4.8 1.2 1.6 2.1 2.1.2.1.4.1.5-.1l.6-.7c.2-.2.4-.2.7-.1l1.5.8c.3.1.4.3.4.6 0 .7-.5 1.4-1.1 1.6-.6.3-2.7.2-4.9-1.7-2.2-1.9-3-4.2-2.8-4.9.1-.3.3-.7.6-.9Z" />
    </svg>
  )
}

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
            {socials.map((social) => {
              const Icon = social.icon

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('https') ? '_blank' : undefined}
                  rel={social.href.startsWith('https') ? 'noreferrer' : undefined}
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-[4px] border border-[var(--border)] text-[var(--muted)] transition-colors duration-300 hover:border-[var(--brand)] hover:text-[var(--brand)]"
                >
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>

        <p className="pt-8 text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
          © {year} SL Graphics. All rights reserved. Made in UP.
        </p>
      </div>
    </footer>
  )
}
