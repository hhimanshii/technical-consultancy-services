import { ArrowRight } from "lucide-react"

export function ContactForm() {
  return (
    <form
      action="mailto:"
      method="post"
      encType="text/plain"
      className="grid gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-bold text-brand-navy">Name</span>
          <input
            name="name"
            required
            className="h-11 rounded-md border border-input bg-white px-3 text-sm outline-none transition-colors focus:border-brand-blue"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-bold text-brand-navy">Email</span>
          <input
            name="email"
            type="email"
            required
            className="h-11 rounded-md border border-input bg-white px-3 text-sm outline-none transition-colors focus:border-brand-blue"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-bold text-brand-navy">Phone</span>
        <input
          name="phone"
          className="h-11 rounded-md border border-input bg-white px-3 text-sm outline-none transition-colors focus:border-brand-blue"
          placeholder="+91 ..."
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-bold text-brand-navy">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className="resize-none rounded-md border border-input bg-white px-3 py-3 text-sm outline-none transition-colors focus:border-brand-blue"
          placeholder="Tell us about your project, location, scope, or requirement."
        />
      </label>

      <button
        type="submit"
        className="group inline-flex h-12 w-fit items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-blue"
      >
        Contact Us
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
      </button>
    </form>
  )
}
