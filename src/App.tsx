import React, { useState, type FormEvent } from 'react'

const YEAR = 2014

function Field({
  label,
  id,
  type = 'text',
  required = false,
  multiline = false,
  placeholder,
}: {
  label: string
  id: string
  type?: string
  required?: boolean
  multiline?: boolean
  placeholder?: string
}) {
  return (
    <label htmlFor={id} className="group block">
      <span className="mb-3 block font-sans text-[11px] font-[600] uppercase tracking-[0.28em] text-ink/55">
        {label}
        {required && <span className="text-earth"> *</span>}
      </span>
      {multiline ? (
        <textarea
          id={id}
          rows={3}
          placeholder={placeholder}
          className="w-full resize-none border-0 border-b-2 border-ink/25 bg-transparent pb-3 font-serif text-lg text-ink placeholder:text-ink/30 transition-colors duration-300 outline-none focus:border-forest"
        />
      ) : (
        <input
          id={id}
          type={type}
          required={required}
          placeholder={placeholder}
          className="w-full border-0 border-b-2 border-ink/25 bg-transparent pb-3 font-serif text-lg text-ink placeholder:text-ink/30 transition-colors duration-300 outline-none focus:border-forest"
        />
      )}
    </label>
  )
}

function MicIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth={1.25}>
      <rect x="19" y="6" width="10" height="22" rx="5" />
      <path d="M13 22a11 11 0 0 0 22 0M24 33v9M17 42h14" strokeLinecap="round" />
    </svg>
  )
}

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth={1.25} strokeLinejoin="round" strokeLinecap="round">
      <path d="M4 16h8l7 6c1.5 1.4 1.5 3.6 0 5s-3.6 1.4-5 0l-3-3" />
      <path d="M44 16h-8l-9 8-6-5" />
      <path d="M36 34l-6-5M30 38l-5-4M24 40l-4-3" />
      <path d="M12 30v6M36 22v10" />
    </svg>
  )
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth={1.25}>
      <circle cx="24" cy="24" r="18" />
      <circle cx="24" cy="24" r="10" />
      <circle cx="24" cy="24" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

// ==========================================
// PROPERTY TYPES — bespoke noir fine-liner line art.
// Shared stroke conventions; decorative (aria-hidden) atop labelled cards.
// ==========================================

const sketchProps = {
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

function FlatsArt() {
  return (
    <svg viewBox="0 0 160 120" className="h-24 w-auto" aria-hidden="true" {...sketchProps}>
      <path d="M36 108V34l44-18 44 18v74" />
      <path d="M20 108h120" strokeWidth={2} />
      <path d="M36 34h88" strokeWidth={1} opacity={0.5} />
      {[48, 70, 92].map((y) => (
        <g key={y}>
          <rect x="48" y={y} width="14" height="12" strokeWidth={1} />
          <rect x="73" y={y} width="14" height="12" strokeWidth={1} />
          <rect x="98" y={y} width="14" height="12" strokeWidth={1} />
        </g>
      ))}
      <rect x="73" y="94" width="14" height="14" strokeWidth={1} />
    </svg>
  )
}

function BuildingsArt() {
  return (
    <svg viewBox="0 0 160 120" className="h-24 w-auto" aria-hidden="true" {...sketchProps}>
      <path d="M16 108h128" strokeWidth={2} />
      <rect x="24" y="60" width="34" height="48" />
      <rect x="62" y="30" width="30" height="78" />
      <rect x="96" y="72" width="40" height="36" />
      {[68, 82, 96].map((y) =>
        [30, 42].map((x) => <line key={`${x}-${y}`} x1={x} y1={y} x2={x + 6} y2={y} strokeWidth={1} opacity={0.6} />),
      )}
      {[40, 54, 68, 82, 96].map((y) =>
        [69, 80].map((x) => <line key={`b${x}-${y}`} x1={x} y1={y} x2={x + 6} y2={y} strokeWidth={1} opacity={0.6} />),
      )}
      {[82, 96].map((y) =>
        [104, 118].map((x) => <line key={`c${x}-${y}`} x1={x} y1={y} x2={x + 8} y2={y} strokeWidth={1} opacity={0.6} />),
      )}
    </svg>
  )
}

function VillaArt() {
  return (
    <svg viewBox="0 0 160 120" className="h-24 w-auto" aria-hidden="true" {...sketchProps}>
      <path d="M16 106h128" strokeWidth={2} />
      <path d="M34 106V58l46-30 46 30v48" />
      <path d="M24 62 80 24l56 38" />
      <rect x="70" y="80" width="20" height="26" strokeWidth={1} />
      <rect x="46" y="70" width="16" height="14" strokeWidth={1} />
      <rect x="98" y="70" width="16" height="14" strokeWidth={1} />
      <line x1="80" y1="24" x2="80" y2="16" strokeWidth={1} />
    </svg>
  )
}

function FarmhouseArt() {
  return (
    <svg viewBox="0 0 160 120" className="h-24 w-auto" aria-hidden="true" {...sketchProps}>
      <path d="M12 108h136" strokeWidth={2} />
      <path d="M40 108V70l30-20 30 20v38" />
      <path d="M34 72 70 46l36 26" />
      <rect x="58" y="84" width="16" height="24" strokeWidth={1} />
      <rect x="82" y="76" width="12" height="12" strokeWidth={1} />
      <path d="M122 108c0-18 6-30 6-30s6 12 6 30" />
      <path d="M128 90c-6-4-9-11-9-11M128 94c6-3 10-9 10-9" strokeWidth={1} opacity={0.7} />
      <path d="M18 108v-10M26 108v-14M34 108v-10" strokeWidth={1} opacity={0.6} />
    </svg>
  )
}

function FarmlandArt() {
  return (
    <svg viewBox="0 0 160 120" className="h-24 w-auto" aria-hidden="true" {...sketchProps}>
      <circle cx="122" cy="34" r="12" strokeWidth={1} />
      <path d="M8 74q40-22 80-8t64 2" opacity={0.8} />
      <path d="M4 88q46-20 84-6t68 0" opacity={0.7} />
      <path d="M2 104q48-18 86-4t72-2" opacity={0.6} />
      <path d="M40 68l-8 44M70 62l-4 50M100 64l2 48M126 70l8 42" strokeWidth={1} opacity={0.5} />
    </svg>
  )
}

function NALandArt() {
  return (
    <svg viewBox="0 0 160 120" className="h-24 w-auto" aria-hidden="true" {...sketchProps}>
      <path d="M30 92 44 34l84 8-10 62z" strokeDasharray="7 5" />
      {[
        [30, 92],
        [44, 34],
        [128, 42],
        [118, 104],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill="currentColor" stroke="none" />
      ))}
      <line x1="44" y1="34" x2="118" y2="104" strokeWidth={1} strokeDasharray="3 4" opacity={0.5} />
      <path d="M138 20v18M138 20l-5 6M138 20l5 6" strokeWidth={1} />
      <text x="132" y="50" fontSize="9" fontFamily="'Space Mono', monospace" fill="currentColor" stroke="none" opacity={0.7}>N</text>
    </svg>
  )
}

const PROPERTY_LABELS = ['Flats', 'Buildings', 'Villas & Bungalows', 'Farmhouses', 'Farmland', 'NA Land'] as const
type PropertyLabel = (typeof PROPERTY_LABELS)[number]

const propertyTypes: Array<{ art: React.ReactNode; title: PropertyLabel; note: string; tile: string }> = [
  { art: <FlatsArt />, title: 'Flats', note: '1–4 BHK · Pune corridors', tile: 'bg-mist text-ink ring-1 ring-ink/10' },
  { art: <BuildingsArt />, title: 'Buildings', note: 'Commercial & mixed-use', tile: 'bg-forest text-paper' },
  { art: <VillaArt />, title: 'Villas & Bungalows', note: 'Gated & standalone', tile: 'bg-ink text-paper' },
  { art: <FarmhouseArt />, title: 'Farmhouses', note: 'Konkan & Western Ghats', tile: 'bg-earth text-paper' },
  { art: <FarmlandArt />, title: 'Farmland', note: 'Cultivable & orchard plots', tile: 'bg-paper text-forest ring-1 ring-ink/15' },
  { art: <NALandArt />, title: 'NA Land', note: 'Sanctioned non-agricultural', tile: 'bg-mist text-ink ring-1 ring-ink/10' },
]

const cards = [
  {
    icon: <MicIcon />,
    title: 'Conversations over Catalogs',
    body: 'Every conversation starts with an honest discussion about the land, the flat, or the future you are trying to build — not a filtered grid of listings.',
  },
  {
    icon: <HandshakeIcon />,
    title: 'Reputation over Reach',
    body: 'More than a decade across Pune and the Konkan belt built on referrals and repeat families. We trade on trust, not paid impressions.',
  },
  {
    icon: <TargetIcon />,
    title: 'Intent over Noise',
    body: 'No jargon, no inflated valuations, no fluff. Just raw local knowledge, honest advisory, and absolute transparency on every deal.',
  },
]

export default function App() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedType, setSelectedType] = useState<PropertyLabel | null>(null)

  const handlePropertyClick = (title: PropertyLabel) => {
    setSelectedType(title)
    document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    setSelectedType(null)
  }

  return (
    <div className="min-h-screen bg-paper font-serif text-ink">
      {/* Top bar */}
      <header className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-7 md:px-12">
        <span className="font-display text-sm font-[800] uppercase tracking-[0.18em]">
          Broker&nbsp;&amp;&nbsp;Manager
        </span>
        <span className="hidden font-sans text-[11px] font-[500] uppercase tracking-[0.28em] text-ink/55 md:inline">
          Pune · Konkan
        </span>
      </header>

      {/* 1 — Hero */}
      <section className="relative overflow-hidden">
        {/* Signature framed line-art tile in the right negative space */}
        <div className="pointer-events-none absolute right-10 top-24 z-0 hidden w-72 lg:block xl:right-20">
          <div className="flex aspect-[4/5] flex-col justify-between bg-forest p-7 text-paper shadow-sm">
            <span className="font-sans text-[11px] font-[600] tracking-[0.22em] opacity-60">
              EST. {YEAR}
            </span>
            <div className="flex flex-1 items-center justify-center py-4">
              <VillaArt />
            </div>
            <div>
              <h3 className="font-display text-lg font-[700] uppercase leading-tight tracking-[-0.01em]">
                Land, Flats<br />&amp; Advisory
              </h3>
              <p className="mt-1.5 font-sans text-[11px] font-[500] uppercase tracking-[0.2em] opacity-60">
                Pune · Konkan
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-6 pt-10 pb-24 md:grid-cols-12 md:px-12 md:pt-16">
        <div className="md:col-span-10">
          <p className="mb-8 font-sans text-[11px] font-[600] uppercase tracking-[0.32em] text-earth">
            Real Estate Advisory · Est. {YEAR}
          </p>
          <h1 className="font-display text-[13vw] font-[900] uppercase leading-[0.92] tracking-[-0.02em] md:text-[7.5rem]">
            We Took<br />Down Our<br />Listings.
          </h1>
        </div>
        <div className="md:col-span-8 md:col-start-4 md:pt-4">
          <p className="max-w-xl font-serif text-xl leading-relaxed text-ink/80 md:text-2xl">
            Not because we&rsquo;re out of the market — but because we chose dialogue
            over digital noise. Great property isn&rsquo;t discovered by endless
            scrolling. It&rsquo;s found through conversation, local trust, and radical
            transparency.
          </p>
          <a
            href="#enquiry"
            className="mt-12 inline-flex items-center gap-3 font-sans text-[11px] font-[600] uppercase tracking-[0.28em] text-ink transition-colors hover:text-earth"
          >
            Scroll to begin
            <svg viewBox="0 0 24 24" className="h-6 w-6 animate-bounce" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M12 4v16M6 14l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        </div>
      </section>

      {/* 2 — Manifesto */}
      <section className="border-t border-ink/15">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-24 md:grid-cols-12 md:gap-0 md:px-12 md:py-36">
          <div className="md:col-span-5">
            <h2 className="font-display text-4xl font-[800] uppercase leading-[1.02] tracking-[-0.01em] md:text-6xl">
              Relationships<br />over<br />Algorithms.
            </h2>
          </div>
          <div className="hidden md:col-span-1 md:col-start-6 md:block">
            <div className="mx-auto h-full w-px bg-ink/20" />
          </div>
          <div className="space-y-6 md:col-span-6 md:col-start-7">
            <p className="font-serif text-xl leading-relaxed text-ink/85 md:text-[1.6rem] md:leading-[1.6]">
              We aren&rsquo;t here to impress a property portal or fill a page with
              endless case studies. We are here to connect, advise, and close with
              conviction.
            </p>
            <p className="font-serif text-lg leading-relaxed text-ink/70">
              Our best work lives in the plots we&rsquo;ve walked across the Konkan
              coast, the flats we&rsquo;ve handed over in Pune, and the families
              who call us first — long after the paperwork is signed.
            </p>
          </div>
        </div>
      </section>

      {/* 3 — How We Work */}
      <section className="border-t border-ink/15">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
          <div className="mb-16 md:flex md:items-end md:justify-between">
            <h2 className="max-w-2xl font-display text-4xl font-[800] uppercase leading-[1.05] tracking-[-0.01em] md:text-5xl">
              How We Work.
            </h2>
            <p className="mt-4 font-sans text-[11px] font-[600] uppercase tracking-[0.28em] text-ink/55 md:mt-0">
              Three principles / no exceptions
            </p>
          </div>
          <div className="grid grid-cols-1 gap-0 border-t border-ink/15 md:grid-cols-3">
            {cards.map((card, i) => (
              <article
                key={card.title}
                className={`group flex flex-col gap-8 border-ink/15 py-12 transition-colors duration-300 hover:bg-mist/60 md:px-10 ${
                  i > 0 ? 'border-t md:border-t-0 md:border-l' : ''
                }`}
              >
                <div className="flex items-center justify-between text-forest">
                  {card.icon}
                  <span className="font-sans text-xs font-[600] tracking-[0.2em] text-ink/35">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-[700] uppercase leading-tight tracking-[-0.01em]">
                  {card.title}
                </h3>
                <p className="font-serif text-base leading-relaxed text-ink/70">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3b — What We Handle (property types) */}
      <section className="border-t border-ink/15">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
          <div className="mb-16 md:flex md:items-end md:justify-between">
            <h2 className="max-w-2xl font-display text-4xl font-[800] uppercase leading-[1.05] tracking-[-0.01em] md:text-5xl">
              What We Handle.
            </h2>
            <p className="mt-4 max-w-xs font-sans text-[11px] font-[600] uppercase tracking-[0.28em] text-ink/55 md:mt-0">
              Six categories / one standard of care
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {propertyTypes.map((p, i) => (
              <button
                key={p.title}
                type="button"
                aria-pressed={selectedType === p.title}
                onClick={() => handlePropertyClick(p.title)}
                className={`group flex aspect-[5/4] w-full cursor-pointer flex-col justify-between p-7 text-left transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest md:p-8 ${p.tile} ${selectedType === p.title ? 'ring-2 ring-inset ring-forest' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[11px] font-[600] tracking-[0.22em] opacity-50">
                    0{i + 1}
                  </span>
                  <span className="font-sans text-[10px] font-[600] uppercase tracking-[0.2em] opacity-0 transition-opacity duration-200 group-hover:opacity-70">
                    Enquire →
                  </span>
                </div>
                <div className="flex flex-1 items-center justify-center py-4 transition-transform duration-300 group-hover:scale-[1.04]">
                  {p.art}
                </div>
                <div>
                  <h3 className="font-display text-lg font-[700] uppercase leading-tight tracking-[-0.01em] md:text-xl">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 font-sans text-[11px] font-[500] uppercase tracking-[0.2em] opacity-60">
                    {p.note}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Enquiry Form */}
      <section id="enquiry" className="bg-mist">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-6 py-24 md:grid-cols-12 md:px-12 md:py-36">
          <div className="md:col-span-5">
            <h2 className="font-display text-4xl font-[800] uppercase leading-[1.02] tracking-[-0.01em] md:text-6xl">
              Tell Us<br />What<br />You Have<br />in Mind.
            </h2>
            <p className="mt-8 max-w-md font-serif text-lg leading-relaxed text-ink/70">
              You aren&rsquo;t looking for a listing agency — you&rsquo;re looking
              for a partner. Drop your details and tell us about the land, the home,
              or the property on your mind.
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            {submitted ? (
              <div className="flex h-full min-h-64 flex-col justify-center border-l-2 border-forest pl-8">
                <p className="font-display text-2xl font-[700] uppercase tracking-[-0.01em]">
                  The conversation has started.
                </p>
                <p className="mt-4 font-serif text-lg text-ink/70">
                  Thank you. A member of our core team will reach out within one
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <input type="hidden" name="propertyType" value={selectedType ?? ''} />
                {/* Property type selector */}
                <fieldset>
                  <legend className="mb-4 block font-sans text-[11px] font-[600] uppercase tracking-[0.28em] text-ink/55">
                    I&rsquo;m interested in
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {PROPERTY_LABELS.map((label) => {
                      const active = selectedType === label
                      return (
                        <button
                          key={label}
                          type="button"
                          aria-pressed={active}
                          onClick={() => setSelectedType(active ? null : label)}
                          className={`border px-4 py-2 font-sans text-[11px] font-[600] uppercase tracking-[0.2em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest ${
                            active
                              ? 'border-forest bg-forest text-paper'
                              : 'border-ink/25 bg-transparent text-ink/70 hover:border-forest hover:text-forest'
                          }`}
                        >
                          {label}
                        </button>
                      )
                    })}
                  </div>
                </fieldset>
                <Field label="Your Name / Organization" id="name" required placeholder="e.g. Kulkarni Family" />
                <Field label="Email Address" id="email" type="email" required placeholder="you@example.com" />
                <Field
                  label="Tell us more about what you need"
                  id="message"
                  multiline
                  placeholder="A sea-facing plot near Guhagar, a 3BHK in Baner, property management for a portfolio…"
                />
                <button
                  type="submit"
                  className="w-full bg-forest px-8 py-5 font-sans text-[12px] font-[700] uppercase tracking-[0.24em] text-paper transition-colors duration-300 hover:bg-ink md:w-auto"
                >
                  Submit &amp; Start the Conversation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5 — Direct Channels */}
      <section className="border-t border-ink/15">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 py-24 md:grid-cols-12 md:px-12 md:py-32">
          <div className="md:col-span-6">
            <h2 className="font-display text-4xl font-[800] uppercase leading-[1.05] tracking-[-0.01em] md:text-5xl">
              Skip the Form.<br />Connect Directly.
            </h2>
            <dl className="mt-14 divide-y divide-ink/15 border-y border-ink/15">
              {[
                { k: 'Mobile', v: '+91 98220 41100', href: 'tel:+919822041100' },
                { k: 'Email', v: 'hello@brokerandmanager.in', href: 'mailto:hello@brokerandmanager.in' },
                { k: 'LinkedIn', v: '/broker-and-manager', href: '#' },
              ].map((row) => (
                <a
                  key={row.k}
                  href={row.href}
                  className="group flex items-center justify-between py-6 transition-colors hover:text-earth"
                >
                  <dt className="font-sans text-[11px] font-[600] uppercase tracking-[0.28em] text-ink/55">
                    {row.k}
                  </dt>
                  <dd className="font-serif text-lg md:text-xl">{row.v}</dd>
                </a>
              ))}
            </dl>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <div className="border-2 border-ink/20 p-8">
              <p className="mb-6 font-serif text-lg leading-relaxed text-ink/70">
                Scan to chat instantly with our core team on WhatsApp.
              </p>
              <div
                className="mx-auto flex aspect-square w-full max-w-72 items-center justify-center border border-ink/20 bg-paper"
                aria-label="WhatsApp QR code placeholder"
              >
                <svg viewBox="0 0 100 100" className="h-4/5 w-4/5 text-ink/25" fill="currentColor">
                  <path d="M10 10h25v25H10zM15 15v15h15V15zM65 10h25v25H65zM70 15v15h15V15zM10 65h25v25H10zM15 70v15h15V70zM45 10h10v10H45zM45 25h10v20H45zM45 50h10v10H45zM60 45h10v10H60zM75 45h15v10H75zM60 60h10v30H60zM75 60h15v10H75zM75 80h15v10H75zM45 75h10v15H45z" />
                </svg>
              </div>
              <p className="mt-6 text-center font-sans text-[11px] font-[600] uppercase tracking-[0.28em] text-ink/45">
                [ WhatsApp QR Code ]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 — Footer */}
      <footer className="border-t border-ink/15 bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-6 py-14 text-center md:px-12">
          <p className="font-serif text-base italic text-paper/80 md:text-lg">
            <span className="font-display text-sm font-[700] not-italic uppercase tracking-[0.18em]">
              Broker&nbsp;&amp;&nbsp;Manager
            </span>
            &nbsp;— Brokerage, Management &amp; Advisory. Since {YEAR} ©
          </p>
        </div>
      </footer>
    </div>
  )
}
