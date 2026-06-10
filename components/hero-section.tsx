const stats = [
  { value: '200+', label: 'Projects' },
  { value: '50+', label: 'Brands' },
  { value: '5★', label: 'Rating' },
]

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="container-x grid min-h-[calc(100vh-7rem)] items-center gap-16 lg:grid-cols-[1.35fr_0.9fr]">
        <div>
          <div className="max-w-5xl">
            <p className="label mb-8">Creative Studio — UP, India</p>
            <h1 className="font-display max-w-[980px] text-[56px] uppercase leading-[0.86] text-[#F0EDE8] md:text-[100px] xl:text-[132px]">
              VISUALS
              <span className="block whitespace-nowrap text-[#E8FF00]">THAT SELL.</span>
            </h1>
            <p className="mt-8 text-sm uppercase tracking-[0.22em] text-[#555555] md:text-base">
              Logo · Brand · Motion · Film
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="border border-[#F0EDE8]/30 px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-500 hover:border-[#E8FF00] hover:text-[#E8FF00]"
              >
                View Work
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="border border-[#E8FF00] bg-[#E8FF00] px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-[#0A0A0A] transition-colors duration-500 hover:bg-transparent hover:text-[#E8FF00]"
              >
                WhatsApp Us
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm uppercase tracking-[0.12em]">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="font-display text-2xl text-[#E8FF00]">{stat.value}</span>
                  <span className="ml-2 text-[#555555]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="group relative ml-auto aspect-[4/5] w-full max-w-[430px] transition-transform duration-700 hover:rotate-2">
            <div className="absolute left-[10%] top-[8%] h-[54%] w-[58%] border border-[#E8FF00] bg-[#E8FF00]/10 mix-blend-screen" />
            <div className="absolute right-[2%] top-[23%] h-[42%] w-[48%] border border-[#F0EDE8]/20 bg-[#F0EDE8]/10 mix-blend-screen" />
            <div className="absolute bottom-[8%] left-[18%] h-[38%] w-[60%] bg-[#111111] outline outline-1 outline-[#1E1E1E]" />
            <div className="absolute bottom-[22%] right-[12%] h-28 w-28 rounded-full border border-[#E8FF00] bg-[#E8FF00]/20 mix-blend-screen" />
            <div className="absolute left-0 top-[58%] h-1 w-full bg-[#E8FF00]" />
            <div className="absolute right-[4%] top-[6%] text-[11px] uppercase tracking-[0.3em] text-[#555555] [writing-mode:vertical-rl]">
              Design / Edit / Impact
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
