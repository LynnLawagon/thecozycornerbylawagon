"use client";

import { useState } from "react";

const field =
  "w-full rounded-xl border border-ink/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-violet focus:ring-4 focus:ring-violet/15";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    // No backend is wired up yet; this shows a friendly confirmation.
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <>
      <section className="hero-bg text-white">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:py-20">
          <p className="fade-up text-xs font-bold uppercase tracking-[0.3em] text-gold">Say hello</p>
          <h1 className="fade-up mt-3 text-4xl font-bold sm:text-5xl">Contact Us</h1>
          <p className="fade-up mx-auto mt-4 max-w-lg text-white/80">
            We&apos;d love to hear from you! Fill out the form and we&apos;ll
            get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="mx-auto -mt-8 max-w-xl px-5 pb-20">
        <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-ink/5 sm:p-8">
          {sent ? (
            <div className="py-8 text-center" role="status">
              <p className="text-5xl">💌</p>
              <h2 className="mt-4 text-2xl font-bold">Message sent!</h2>
              <p className="mt-2 text-ink-soft">Thanks for reaching out. We&apos;ll be in touch soon.</p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 rounded-full bg-plum px-6 py-2.5 font-bold text-white hover:brightness-125"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-bold">Name</label>
                <input id="name" name="name" type="text" required placeholder="Your name" className={field} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-bold">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" className={field} />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-bold">Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="Tell us about a manga you love…" className={`${field} resize-y`} />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-coral py-3.5 font-extrabold text-white shadow-lg shadow-coral/30 transition hover:-translate-y-0.5 hover:brightness-110"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
