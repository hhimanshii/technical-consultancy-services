import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  BarChart3,
  Building2,
  ChevronDown,
  ClipboardCheck,
  DraftingCompass,
  HardHat,
  Menu,
  MapPinned,
  Route,
  Scale,
  ShieldCheck,
  Target,
  TrainFront,
  Waves,
} from "lucide-react"

import { ContactForm } from "@/components/contact-form"
import { clients } from "@/lib/clients"
import { services } from "@/lib/services"

const navItems = [
  { label: "Home", href: "#home" },
  {
    label: "Sectors",
    href: "#sectors",
    items: [
      "Railway",
      "Highways & Roads",
      "Bridges & Structures",
      "Traffic & Transportation",
      "Water Resources",
      "Urban & Regional",
    ],
  },
  {
    label: "Services",
    href: "#services",
    items: services.map((service) => service.title),
  },
  {
    label: "Clients",
    href: "#clients",
    items: clients.map((client) => client.name),
  },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

const heroVideos = [
  "/hero-slide-1.mp4",
  "/hero-slide-2.mp4",
  "/hero-slide-3.mp4",
]

const clientRows = [
  clients.slice(0, 4),
  clients.slice(4),
]

const serviceScope = [
  "Civil & Infrastructure Consultancy: feasibility studies, design reviews, BOQs, and value engineering.",
  "Geotechnical & Foundation Engineering: soil interpretation, foundation recommendations, and stability analysis.",
  "Transportation & Highway Engineering: road design, DPRs, traffic studies, and quality control advisory.",
  "Project Planning & Execution Support: scheduling, monitoring, supervision, and risk mitigation.",
  "Compliance & Documentation: tenders, approvals, reports, audits, and as-built documentation.",
]

const whyChooseUs = [
  {
    title: "Expert-led consultancy",
    description:
      "Guidance from senior technical leadership with deep project exposure.",
    icon: Award,
  },
  {
    title: "Premium quality standards",
    description:
      "Clear documentation, disciplined review, and reliable engineering judgement.",
    icon: ShieldCheck,
  },
  {
    title: "Execution-focused solutions",
    description:
      "Recommendations shaped around site realities, timelines, and delivery risk.",
    icon: Target,
  },
  {
    title: "Pan-India capability",
    description:
      "Support for public and private infrastructure assignments across India.",
    icon: MapPinned,
  },
  {
    title: "Transparent ethical practices",
    description:
      "Straightforward communication, accountable methods, and practical reporting.",
    icon: Scale,
  },
]

const sectors = [
  {
    title: "Railway",
    description:
      "FLS support, corridor review, survey coordination, and rail infrastructure advisory.",
    image: "/sector-railway.png",
    icon: TrainFront,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Highways & Roads",
    description:
      "DPRs, traffic studies, road design review, and quality control advisory.",
    image: "/sector-highways-roads.png",
    icon: Route,
    className: "md:col-span-1",
  },
  {
    title: "Bridges & Structures",
    description:
      "Structural review, condition notes, rehabilitation support, and constructability input.",
    image: "/sector-bridges-structures.png",
    icon: DraftingCompass,
    className: "md:col-span-1",
  },
  {
    title: "Traffic & Transportation",
    description:
      "Movement studies, safety assessment, and transport planning recommendations.",
    image: "/sector-traffic-transportation.png",
    icon: BarChart3,
    className: "md:col-span-1",
  },
  {
    title: "Water Resources",
    description:
      "Hydrology-aware planning, field interpretation, drainage inputs, and risk review.",
    image: "/sector-water-resources.png",
    icon: Waves,
    className: "md:col-span-1",
  },
  {
    title: "Urban & Regional",
    description:
      "Public works, institutional infrastructure, urban assets, and execution support.",
    image: "/sector-urban-regional.png",
    icon: Building2,
    className: "md:col-span-2",
  },
]

const serviceIcons = {
  chart: BarChart3,
  clipboard: ClipboardCheck,
  drafting: DraftingCompass,
  hardhat: HardHat,
  route: Route,
  shield: ShieldCheck,
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between rounded-xl border border-white/70 bg-white/95 px-4 shadow-xl shadow-brand-navy/10 backdrop-blur-xl sm:px-6">
          <a href="#home" className="flex items-center" aria-label="Home">
            <span className="flex size-12 items-center justify-center rounded-md bg-white">
              <Image
                src="/company-logo.png"
                alt="Company logo"
                width={44}
                height={44}
                priority
                className="size-11 object-contain"
              />
            </span>
          </a>

          <ul className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <li key={item.label} className="group relative">
                <a
                  href={item.href}
                  className="flex items-center gap-1 text-base font-bold text-brand-navy/75 transition-colors hover:text-brand-navy"
                >
                  {item.label}
                  {item.items ? (
                    <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                  ) : null}
                </a>
                {item.items ? (
                  <div className="invisible absolute left-0 top-full pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <ul className="w-72 rounded-lg border border-border bg-white p-2 shadow-2xl shadow-brand-navy/15">
                      {item.items.map((child) => (
                        <li key={child}>
                          <a
                            href={item.href}
                            className="block rounded-md px-4 py-2.5 text-sm font-semibold text-brand-navy/75 transition-colors hover:bg-brand-light hover:text-brand-navy"
                          >
                            {child}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="group hidden h-10 items-center justify-center gap-1.5 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-all hover:bg-brand-blue lg:inline-flex"
          >
            Get in Touch
            <ArrowRight className="transition-transform group-hover:translate-x-1" data-icon="inline-end" />
          </a>
          <details className="group/mobile relative lg:hidden">
            <summary
              className="flex size-10 list-none items-center justify-center rounded-lg text-brand-navy transition-colors hover:bg-brand-light [&::-webkit-details-marker]:hidden"
              aria-label="Open navigation"
            >
              <Menu className="size-5" />
            </summary>
            <div className="absolute right-0 top-12 w-72 rounded-lg border border-border bg-white p-3 text-left shadow-2xl shadow-brand-navy/20">
              {navItems.map((item) =>
                item.items ? (
                  <details key={item.label} className="group/sub">
                    <summary className="flex list-none items-center justify-between rounded-md px-3 py-2.5 text-sm font-semibold text-brand-navy hover:bg-brand-light [&::-webkit-details-marker]:hidden">
                      {item.label}
                      <ChevronDown className="size-3.5 transition-transform group-open/sub:rotate-180" />
                    </summary>
                    <div className="pb-2 pl-3">
                      {item.items.map((child) => (
                        <a
                          key={child}
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-sm text-brand-slate hover:bg-brand-light hover:text-brand-blue"
                        >
                          {child}
                        </a>
                      ))}
                    </div>
                  </details>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block rounded-md px-3 py-2.5 text-sm font-semibold text-brand-navy hover:bg-brand-light hover:text-brand-blue"
                  >
                    {item.label}
                  </a>
                )
              )}
              <a
                href="#contact"
                className="mt-2 flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground hover:bg-brand-blue"
              >
                Get in Touch
              </a>
            </div>
          </details>
        </nav>
      </header>

      <section
        id="home"
        className="relative flex min-h-screen overflow-hidden px-5 pt-28 text-white sm:px-8 lg:px-12"
      >
        <div className="absolute inset-0">
          {heroVideos.map((src, index) => (
            <video
              key={src}
              className={`hero-video-slide hero-video-slide-${index + 1} absolute inset-0 size-full object-cover`}
              autoPlay
              muted
              loop
              playsInline
              preload={index === 0 ? "auto" : "metadata"}
              aria-hidden="true"
            >
              <source src={src} type="video/mp4" />
            </video>
          ))}
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,12,20,0.58)_0%,rgba(8,12,20,0.48)_42%,rgba(8,12,20,0.22)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,12,20,0.24),transparent_38%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-center py-16 text-center">
          <div className="flex max-w-4xl flex-col items-center">
            <p className="inline-flex rounded-full border border-white/25 bg-black/18 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              Premium, Expert-Led Engineering Consultancy | Pan-India
            </p>
            <h1 className="mt-7 max-w-4xl text-balance text-5xl font-bold leading-[1.05] tracking-normal drop-shadow-2xl sm:text-6xl lg:text-7xl">
              Trusted engineering solutions for India&apos;s infrastructure.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Delivering trusted, high-precision engineering solutions across
              India, Technical Consultancy Services is a premium civil and
              infrastructure consultancy firm led by deep technical expertise
              and decades of on-ground experience.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex h-12 items-center justify-center gap-1.5 rounded-lg bg-primary px-8 text-base font-bold text-primary-foreground transition-all hover:bg-brand-blue"
              >
                Plan a Consultation
                <ArrowRight className="transition-transform group-hover:translate-x-1.5" data-icon="inline-end" />
              </a>
              <a
                href="#contact"
                className="group inline-flex h-12 items-center justify-center gap-1.5 rounded-lg border-2 border-white/35 bg-white/8 px-8 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/15 hover:text-white"
              >
                Explore Sectors
                <ArrowRight className="transition-transform group-hover:translate-x-1.5" data-icon="inline-end" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative overflow-hidden bg-brand-light px-6 py-24 sm:px-8 lg:px-12"
      >
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue">
                Services
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-normal text-brand-navy sm:text-5xl">
                Technical support across planning, design, and delivery.
              </h2>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {serviceScope.map((item) => {
                const [label, detail] = item.split(": ")

                return (
                  <div
                    key={item}
                    className="rounded-lg border border-border bg-white p-4 shadow-sm"
                  >
                    <p className="text-sm font-bold text-brand-navy">
                      {label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-brand-slate">
                      {detail}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon =
                serviceIcons[service.icon as keyof typeof serviceIcons]

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="service-card group overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-2xl hover:shadow-brand-navy/12"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="relative h-48 overflow-hidden bg-brand-navy">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/78 via-brand-navy/22 to-transparent" />
                    <div className="absolute inset-x-6 bottom-0 h-px bg-brand-accent/60" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative flex size-20 items-center justify-center overflow-hidden rounded-xl border border-white/45 bg-white/18 text-white shadow-2xl shadow-brand-navy/25 backdrop-blur-xl transition-transform duration-300 before:absolute before:inset-px before:rounded-[calc(var(--radius-xl)-1px)] before:border before:border-white/20 before:content-[''] after:absolute after:-left-8 after:-top-10 after:h-24 after:w-10 after:rotate-12 after:bg-white/28 after:blur-sm after:content-[''] group-hover:scale-105">
                        <Icon className="relative z-10 size-9 drop-shadow-sm" />
                      </div>
                    </div>
                    <div className="absolute bottom-5 left-5">
                      <p className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-brand-accent backdrop-blur-sm">
                        {service.eyebrow}
                      </p>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold text-brand-navy">
                      {service.title}
                    </h3>
                    <p className="mt-3 min-h-20 text-sm leading-6 text-brand-slate">
                      {service.summary}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                      <span className="text-sm font-bold text-brand-navy">
                        View details
                      </span>
                      <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground transition-transform group-hover:translate-x-1">
                        <ArrowRight className="size-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="clients"
        className="overflow-hidden bg-[#f7f8fc] px-6 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue">
              Clients
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-normal text-brand-navy sm:text-5xl">
              Trusted by public infrastructure authorities and transport
              institutions.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-brand-slate">
              We support agencies and infrastructure organizations with clear
              technical documentation, survey insight, design review, and
              delivery support.
            </p>
          </div>

          <div className="clients-marquee-wrap mt-14 w-full space-y-5">
            {clientRows.map((row, rowIndex) => (
              <div key={rowIndex} className="overflow-hidden">
                <div
                  className={`clients-logo-track flex w-max gap-5 ${
                    rowIndex === 1 ? "clients-logo-track-reverse" : ""
                  }`}
                >
                  {[...row, ...row, ...row].map((client, index) => (
                    <div
                      key={`${client.name}-${rowIndex}-${index}`}
                      className="group flex h-36 w-48 shrink-0 flex-col items-center justify-center rounded-lg border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-navy/10"
                    >
                      <div className="relative flex h-16 w-full items-center justify-center">
                        <Image
                          src={client.logo}
                          alt={`${client.name} logo`}
                          fill
                          sizes="192px"
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <p className="mt-4 text-center text-sm font-bold text-brand-navy">
                        {client.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-white px-6 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue">
              About Us
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-normal text-brand-navy sm:text-5xl">
              Built on field experience, technical clarity, and dependable
              advisory.
            </h2>
          </div>
          <div className="rounded-xl border border-border bg-brand-light p-6 shadow-sm">
            <p className="text-lg leading-8 text-brand-slate">
              Technical Consultancy Services is founded on a legacy of extensive
              hands-on experience in civil engineering, infrastructure
              execution, and technical advisory. The firm is led by a senior
              engineering professional with decades of industry exposure across
              highways, buildings, industrial projects, and public sector works
              across India.
            </p>
          </div>
        </div>
      </section>

      <section
        id="sectors"
        className="bg-brand-light px-6 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue">
                Sectors
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-normal text-brand-navy sm:text-5xl">
                Focused expertise across core infrastructure sectors.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-brand-slate">
              A practical sector lens helps us shape recommendations around
              approval needs, field constraints, safety, constructability, and
              long-term asset performance.
            </p>
          </div>

          <div className="mt-12 grid auto-rows-[250px] gap-5 md:grid-cols-4">
            {sectors.map((sector) => {
              const Icon = sector.icon

              return (
                <div
                  key={sector.title}
                  className={`group relative overflow-hidden rounded-lg border border-border bg-neutral-950 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/15 ${sector.className}`}
                >
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-transparent" />
                  <div className="absolute left-5 top-5 flex size-11 items-center justify-center rounded-md border border-white/25 bg-black/18 text-white shadow-xl backdrop-blur-md">
                    <Icon className="size-5" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-2xl font-bold text-white">
                      {sector.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-slate-100">
                      {sector.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="why-choose-us"
        className="bg-brand-navy px-6 py-24 text-white sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-accent">
              Why Choose Us
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-normal sm:text-5xl">
              Expert-led, execution-focused, and transparent from first review
              to final report.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Expert-led consultancy, premium quality standards,
              execution-focused solutions, pan-India capability, and transparent
              ethical practices define our approach.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {whyChooseUs.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="rounded-lg border border-white/12 bg-white/8 p-5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex size-11 items-center justify-center rounded-md bg-brand-accent text-brand-navy">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="bg-brand-light px-6 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue">
              Contact Us
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-normal text-brand-navy sm:text-5xl">
              Share your project requirement with our technical team.
            </h2>
            <p className="mt-5 text-base leading-7 text-brand-slate">
              Use the form to prepare an email draft with your project details.
              You can send it from your preferred email account and edit the
              recipient before sending.
            </p>

            <div className="mt-8 rounded-xl border border-border bg-white p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-brand-accent text-brand-navy">
                  <MapPinned className="size-5" />
                </span>
                <div>
                  <h3 className="font-bold text-brand-navy">
                    Pan-India capability
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-brand-slate">
                    Civil, infrastructure, transportation, geotechnical,
                    documentation, and execution support across India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-white p-5 shadow-xl shadow-brand-navy/8 sm:p-6">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="bg-[#050b1f] px-6 py-12 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/company-logo.png"
              alt="Company logo"
              width={56}
              height={56}
              className="rounded-md bg-white object-contain p-1"
            />
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Premium civil and infrastructure consultancy delivering practical
              engineering guidance, documentation, review, and execution support
              across India.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-accent">
              Navigation
            </h3>
            <div className="mt-5 grid gap-3 text-sm text-slate-300">
              {["Home", "Services", "Clients", "About", "Sectors", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase() === "home" ? "home" : item.toLowerCase()}`}
                    className="transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-accent">
              Core Services
            </h3>
            <div className="mt-5 grid gap-3 text-sm text-slate-300">
              {services.slice(0, 5).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="transition-colors hover:text-white"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Technical Consultancy Services. All rights reserved.</p>
          <p>Premium engineering consultancy across India.</p>
        </div>
      </footer>
    </main>
  )
}
