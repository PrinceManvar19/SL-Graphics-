const brands = [
  'Radhe Traders',
  'CloudFit',
  'Viral Studio',
  'Highway Homes',
  'Shubh Films',
  'Mishra Retail',
  'Creator Pack',
  'UP Events',
]

export function TrustedBySection() {
  const loop = [...brands, ...brands]

  return (
    <section className="snap-section bg-[var(--surface-alt)] py-16">
      <div className="container-x">
        <p className="label mb-8">/ TRUSTED BY</p>
      </div>
      <div className="overflow-hidden border-y border-[var(--border)] bg-white py-5">
        <div className="marquee-track flex w-max whitespace-nowrap">
          {loop.map((brand, index) => (
            <span
              key={`${brand}-${index}`}
              className="mx-8 text-lg font-semibold uppercase tracking-[0.14em] text-[var(--secondary)] transition-colors duration-300 hover:text-[var(--brand)]"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
