const navItems = ['Work', 'Services', 'Process', 'Contact']
const socials = [
  { label: 'Instagram', mark: 'IG' },
  { label: 'YouTube', mark: 'YT' },
  { label: 'WhatsApp', mark: 'WA' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#1E1E1E] py-10">
      <div className="container-x">
        <div className="grid items-center gap-8 border-b border-[#1E1E1E] pb-10 md:grid-cols-[1fr_auto_1fr]">
          <div>
            <div className="font-display text-2xl uppercase tracking-[-0.06em]">SL Graphics</div>
            <p className="mt-1 text-sm text-[#555555]">Bold visuals. Real impact.</p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-medium uppercase tracking-[0.15em] text-[#555555] transition-colors duration-500 hover:text-[#E8FF00]"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex gap-3 md:justify-end">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.label === 'WhatsApp' ? 'https://wa.me/91XXXXXXXXXX' : '#'}
                target={social.label === 'WhatsApp' ? '_blank' : undefined}
                rel={social.label === 'WhatsApp' ? 'noreferrer' : undefined}
                aria-label={social.label}
                className="grid h-10 w-10 place-items-center border border-[#1E1E1E] text-[10px] font-bold tracking-[0.15em] text-[#555555] transition-colors duration-500 hover:border-[#E8FF00] hover:text-[#E8FF00]"
              >
                {social.mark}
              </a>
            ))}
          </div>
        </div>

        <p className="pt-8 text-xs uppercase tracking-[0.15em] text-[#555555]">
          © {year} SL Graphics. All rights reserved. Made in UP.
        </p>
      </div>
    </footer>
  )
}
