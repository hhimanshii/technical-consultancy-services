import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  DraftingCompass,
  HardHat,
  Route,
  ShieldCheck,
} from "lucide-react"

import { services } from "@/lib/services"

const serviceIcons = {
  chart: BarChart3,
  clipboard: ClipboardCheck,
  drafting: DraftingCompass,
  hardhat: HardHat,
  route: Route,
  shield: ShieldCheck,
}

type ServicePageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return {
      title: "Service",
    }
  }

  return {
    title: `${service.title} | Technical Consultancy Services`,
    description: service.summary,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    notFound()
  }

  const Icon = serviceIcons[service.icon as keyof typeof serviceIcons]

  return (
    <main className="min-h-screen bg-brand-light text-foreground">
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-md bg-white">
              <Image
                src="/company-logo.png"
                alt="Company logo"
                width={44}
                height={44}
                className="size-11 object-contain"
              />
            </span>
          </Link>
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-4 py-2 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-light"
          >
            <ArrowLeft className="size-4" />
            Back to services
          </Link>
        </div>
      </header>

      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-white shadow-2xl shadow-brand-navy/10">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/64 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 flex size-14 items-center justify-center rounded-lg bg-white text-brand-navy shadow-xl">
              <Icon className="size-7" />
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue">
              {service.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-normal text-brand-navy sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-slate">
              {service.description}
            </p>

            <div className="mt-8 grid gap-3">
              {service.points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-lg border border-border bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-blue" />
                  <p className="text-sm font-medium leading-6 text-brand-navy">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/#contact"
              className="group mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-blue"
            >
              Discuss this service
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
