const items = [
  'LOGO DESIGN',
  '✦',
  'BRAND IDENTITY',
  '◈',
  'POSTER DESIGN',
  '◉',
  'BANNER DESIGN',
  '▶',
  'REEL EDITING',
  '◼',
  'VIDEO PRODUCTION',
  '✦',
  'WEDDING FILMS',
  '◈',
  'YOUTUBE EDITING',
]

export function MarqueeSection() {
  const loop = [...items, ...items]

  return (
    <section className="fixed left-0 right-0 top-16 z-30 overflow-hidden border-y border-[var(--border)] bg-[#111111] py-3">
      <div className="marquee-track flex w-max whitespace-nowrap">
        {loop.map((item, index) => {
          const isMark = item.length === 1

          return (
            <span
              key={`${item}-${index}`}
              className={`px-4 font-display text-sm uppercase ${isMark ? 'text-[var(--brand)]' : 'text-[var(--muted)]'}`}
            >
              {item}
            </span>
          )
        })}
      </div>
    </section>
  )
}
