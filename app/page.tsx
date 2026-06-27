'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, MessageCircle, X } from 'lucide-react'
import { CONTACT } from '@/lib/contact'

const services = [
  ['Logo Design', 'Distinct marks built for recall, trust, and daily use.', '3–5 days'],
  ['Brand Identity', 'A complete visual system that keeps every touchpoint unmistakably yours.', '7–10 days'],
  ['Poster Design', 'Campaign visuals designed to stop thumbs and start conversations.', '1–2 days'],
  ['Banner Design', 'Sharp digital and outdoor creative that turns attention into action.', '1–2 days'],
  ['Reel Editing', 'Fast, rhythmic edits tuned for retention, captions, and sharing.', '2–3 days'],
  ['Video Production', 'Brand stories, wedding films, and content shaped with cinematic polish.', '5–7 days'],
]

const pricing = [['Logo Design', '₹2,999'], ['Brand Identity', '₹7,999'], ['Poster / Banner', '₹999'], ['Reel / Video Edit', '₹1,499']]
const projects = [
  ['Radhe Traders', 'logo', 'RT'], ['Viral Reels Pack', 'video', '▶'], ['Diwali Campaign', 'poster', '✦'],
  ['CloudFit Identity', 'brand', 'CF'], ['Highway Launch', 'poster', '01'], ['Wedding Film', 'video', '∞'],
]
const steps = [['Discover', 'We listen, question, and find the real objective.'], ['Define', 'A clear direction, scope, timeline, and price.'], ['Create', 'Ideas become strong, considered visual options.'], ['Refine', 'Your feedback sharpens the chosen direction.'], ['Deliver', 'Final files arrive organized and ready to work.']]
const testimonials = [
  ['Amit Patel', 'Radhe Traders, Ahmedabad', 'Quick concepts, no back-and-forth. Our brand finally looks as premium as the work we do.'],
  ['Priya Singh', 'Creator, Delhi', 'The reels feel sharper, faster, and more intentional. Our views doubled within two weeks.'],
  ['Rahul Mishra', 'CloudFit, Pune', 'A complete brand kit that felt like working with a proper agency — clear, thoughtful, and polished.'],
]

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="nav">
    <a href="#top" className="brand"><Image src="/SL-logo-new.png" alt="SL Graphics" width={150} height={56} priority /></a>
    <nav className={open ? 'navlinks open' : 'navlinks'}>
      {['Work', 'Services', 'Process', 'Contact'].map(x => <a key={x} href={`#${x.toLowerCase()}`} onClick={() => setOpen(false)}>{x}</a>)}
      <a className="pill primary" href="#contact" onClick={() => setOpen(false)}>Start Project</a>
    </nav>
    <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
  </header>
}

function Hero() {
  const [counts, setCounts] = useState([0, 0])
  useEffect(() => { let n = 0; const id = setInterval(() => { n += 1; setCounts([Math.min(50, n * 2), Math.min(30, n)]); if (n >= 30) clearInterval(id) }, 35); return () => clearInterval(id) }, [])
  return <>
    <section id="top" className="hero">
      <Image className="hero-logo" src="/SL-logo-new.png" alt="SL Graphics logo" width={420} height={320} priority />
      <p className="studio">SL GRAPHICS</p>
      <h1>VISUALS THAT <span>SELL.</span></h1>
      <p className="subhead">LOGOS · BRANDS · REELS</p>
      <div className="actions"><a className="pill primary" href="#work">View Our Work</a><a className="pill outline" href={CONTACT.whatsapp}>WhatsApp Us</a></div>
      <div className="stats"><span><b>{counts[0]}+</b> Projects</span><i>◆</i><span><b>{counts[1]}+</b> Brands</span><i>◆</i><span><b>5.0 ★</b> Rating</span></div>
    </section>
    <div className="marquee"><div>{Array(2).fill('LOGO DESIGN ◆ BRAND IDENTITY ◆ POSTER DESIGN ◆ REEL EDITING ◆ VIDEO PRODUCTION ◆ WEDDING FILMS ◆ ').join('')}</div></div>
  </>
}

function Title({ label, children }: { label: string, children: React.ReactNode }) { return <div className="title"><p>/{' '}{label}</p><h2>{children}</h2></div> }

function Work() {
  const [filter, setFilter] = useState('all')
  return <section id="work"><Title label="SELECTED WORK">WORK THAT <em>SPEAKS.</em></Title>
    <div className="filters">{['all', 'logo', 'video', 'poster', 'brand'].map(x => <button className={filter === x ? 'active' : ''} onClick={() => setFilter(x)} key={x}>{x}</button>)}</div>
    <div className="work-grid">{projects.filter(p => filter === 'all' || p[1] === filter).map((p, i) => <article className={`project project-${i}`} key={p[0]}><strong>{p[2]}</strong><div><span>{p[1]}</span><h3>{p[0]}</h3></div></article>)}</div>
  </section>
}

export default function Home() {
  return <main><Header /><Hero />
    <section id="services"><Title label="WHAT WE DO">SIX WAYS WE MAKE YOU <em>UNFORGETTABLE.</em></Title><div className="service-grid">{services.map((s, i) => <a href="#contact" className="service" key={s[0]}><small>{String(i + 1).padStart(2, '0')}</small><div><h3>{s[0]}</h3><p>{s[1]}</p><span>Delivery: {s[2]}</span></div><ArrowUpRight /></a>)}</div></section>
    <section className="alt"><Title label="PRICING">CLEAR STARTS. <em>NO SURPRISES.</em></Title><div className="price-grid">{pricing.map((p, i) => <article className="price" key={p[0]}><small>0{i + 1} / {p[0]}</small><p>Starting from</p><h3>{p[1]}</h3><a href="#contact">Get Quote →</a></article>)}</div></section>
    <Work />
    <section id="process" className="alt"><Title label="OUR PROCESS">FIVE STEPS. <em>ZERO CONFUSION.</em></Title><div className="steps">{steps.map((s, i) => <article key={s[0]}><b>0{i + 1}</b><h3>{s[0]}</h3><p>{s[1]}</p></article>)}</div></section>
    <section><Title label="KIND WORDS">CLIENTS DON’T LIE.</Title><div className="quotes">{testimonials.map(t => <figure key={t[0]}><div>★★★★★</div><blockquote>“{t[2]}”</blockquote><figcaption><b>{t[0]}</b><span>{t[1]}</span></figcaption></figure>)}</div></section>
    <section id="contact" className="contact"><div><Title label="CONTACT">LET’S CREATE <em>TOGETHER.</em></Title><p className="contact-copy">Have a project in mind? Tell us what you’re building. We’ll bring the visual firepower.</p><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a><a className="pill whatsapp" href={CONTACT.whatsapp}><MessageCircle size={18}/> Chat on WhatsApp</a></div><form onSubmit={e => e.preventDefault()}><input required placeholder="Your name"/><input type="email" required placeholder="Email address"/><select defaultValue=""><option value="" disabled>Choose a service</option>{services.map(s => <option key={s[0]}>{s[0]}</option>)}</select><textarea rows={5} required placeholder="Tell us about your project"/><button className="submit">SEND IT →</button></form></section>
    <footer><div><Image src="/SL-logo-new.png" alt="SL Graphics" width={130} height={50}/><p>Bold visuals. Real impact.</p></div><div className="footer-links"><a href="#work">Work</a><a href="#services">Services</a><a href="#process">Process</a><a href="#contact">Contact</a><a href={CONTACT.instagram} aria-label="Instagram">IG</a><a href={CONTACT.whatsapp}><MessageCircle size={18}/></a></div><small>© 2026 SL Graphics. All rights reserved.</small></footer>
    <a className="float-wa" href={CONTACT.whatsapp} aria-label="WhatsApp"><MessageCircle /></a>
  </main>
}
