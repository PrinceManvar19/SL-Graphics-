const items = [
  'LOGO DESIGN', '✦', 'BRAND IDENTITY', '◈', 'POSTER DESIGN', '◉',
  'BANNER DESIGN', '▶', 'REEL EDITING', '◼', 'VIDEO PRODUCTION', '✦',
]

export function MarqueeSection() {
  const loop = [...items, ...items, ...items, ...items]

  return (
    <section className="overflow-hidden border-y border-[#1E1E1E] bg-[#0A0A0A] py-5">
      <div className="marquee-track flex w-max whitespace-nowrap">
        {loop.map((item, index) => {
          const isMark = item.length === 1

          return (
            <span
              key={`${item}-${index}`}
              className={`px-4 text-[13px] font-medium uppercase tracking-[0.15em] ${
                isMark ? 'text-[#E8FF00]' : 'text-[#555555]'
              }`}
            >
              {item}
            </span>
          )
        })}
      </div>
    </section>
  )
}
