const items = [
  'LOGO DESIGN',
  '◆',
  'BRAND IDENTITY',
  '◆',
  'POSTER DESIGN',
  '◆',
  'BANNER DESIGN',
  '◆',
  'REEL EDITING',
  '◆',
  'VIDEO PRODUCTION',
  '◆',
  'WEDDING FILMS',
  '◆',
  'YOUTUBE EDITING',
]

export function MarqueeSection() {
  const loop = [...items, ...items]

  return (
    <div className="marquee-band w-full overflow-hidden border-t border-[var(--border)] bg-[var(--ticker)] py-2.5">
      <div className="marquee-track flex w-max whitespace-nowrap">
        {loop.map((item, index) => {
          const isMark = item.length === 1

          return (
            <span
              key={`${item}-${index}`}
              className={`marquee-tag px-4 text-sm font-medium uppercase tracking-[0.08em] ${isMark ? 'text-[var(--brand)]' : 'text-[#111111]'}`}
            >
              {item}
            </span>
          )
        })}
      </div>
    </div>
  )
}
