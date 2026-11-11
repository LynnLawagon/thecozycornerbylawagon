import Image from "next/image";
import Link from "next/link";
import BookCard from "./components/BookCard";
import { books, genres } from "./data/books";

const featured = books.filter((b) => b.featured).slice(0, 4);

const genreTiles = [
  { name: "Action", color: "from-coral to-[#b3213f]" },
  { name: "Fantasy", color: "from-violet to-plum" },
  { name: "Romance", color: "from-[#f06fa8] to-coral" },
  { name: "Slice of Life", color: "from-teal to-[#0a7a67]" },
];

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero-bg overflow-hidden text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div className="fade-up">
            <p className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-gold ring-1 ring-white/20">
              Manga &amp; comics, curated
            </p>
            <h1 className="mt-5 text-5xl font-bold leading-[1.05] sm:text-6xl">
              Find your next{" "}
              <span className="gradient-text">favorite read</span> in a cozy
              corner.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
              An online haven for manga and comic enthusiasts. Hand-picked
              series, from heart-pounding shonen to gentle slice of life.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/books"
                className="rounded-full bg-gold px-7 py-3.5 font-extrabold text-ink shadow-lg shadow-gold/30 transition hover:-translate-y-0.5 hover:brightness-105"
              >
                Browse Books
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-white/30 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>

            <dl className="mt-10 flex gap-10">
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-white/60">Titles</dt>
                <dd className="font-display text-3xl font-bold">{books.length}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-white/60">Genres</dt>
                <dd className="font-display text-3xl font-bold">{genres.length}</dd>
              </div>
            </dl>
          </div>

          {/* Fanned covers */}
          <div className="relative mx-auto hidden h-[420px] w-full max-w-md md:block" aria-hidden>
            {[
              { src: "/images/aot.png", cls: "left-0 top-10 -rotate-12", z: "z-10" },
              { src: "/images/spyxfam.png", cls: "left-1/2 top-0 -translate-x-1/2 rotate-0", z: "z-30" },
              { src: "/images/mha.png", cls: "right-0 top-10 rotate-12", z: "z-20" },
            ].map(({ src, cls, z }) => (
              <div
                key={src}
                className={`absolute ${cls} ${z} aspect-[2/3] w-44 overflow-hidden rounded-xl shadow-2xl ring-4 ring-white/90`}
              >
                <Image src={src} alt="" fill sizes="180px" className="object-cover" priority />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Featured ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-coral">Staff picks</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Fresh off the shelf</h2>
          </div>
          <Link href="/books" className="font-bold text-violet hover:underline">
            View all {books.length} →
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {featured.map((b) => (
            <BookCard key={b.slug} book={b} />
          ))}
        </div>
      </section>

      {/* ---------- Genres ---------- */}
      <section className="bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-teal">Wander the aisles</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Pick a mood</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {genreTiles.map((g) => (
              <Link
                key={g.name}
                href="/books"
                className={`card-lift flex aspect-[4/3] items-end rounded-2xl bg-gradient-to-br ${g.color} p-5 text-white`}
              >
                <span className="font-display text-xl font-bold sm:text-2xl">{g.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="hero-bg rounded-3xl px-6 py-14 text-center text-white sm:px-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Got a manga we should add?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-white/80">
            Tell us your favorites and we&apos;ll keep the shelves growing.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-block rounded-full bg-coral px-8 py-3.5 font-extrabold text-white shadow-lg shadow-coral/30 transition hover:-translate-y-0.5 hover:brightness-110"
          >
            Suggest a title
          </Link>
        </div>
      </section>
    </>
  );
}
