import Image from "next/image";

const genreStyles = {
  Action: "bg-coral/15 text-[#b3213f]",
  Adventure: "bg-sky/15 text-[#1a6a99]",
  Fantasy: "bg-violet/15 text-violet",
  Romance: "bg-[#f06fa8]/20 text-[#a12a62]",
  Comedy: "bg-gold/25 text-[#8a5a00]",
  Mystery: "bg-ink/10 text-ink",
  "Slice of Life": "bg-teal/15 text-[#0a7a67]",
  Sports: "bg-[#ff8a00]/20 text-[#9a4f00]",
  Dark: "bg-plum/15 text-plum",
};

function GeneratedCover({ title, author, colors }) {
  const [a, b] = colors;
  return (
    <div
      className="relative flex h-full w-full flex-col justify-between overflow-hidden p-5 text-white"
      style={{ background: `linear-gradient(155deg, ${a} 0%, ${b} 100%)` }}
      role="img"
      aria-label={`${title} by ${author}`}
    >
      {/* decorative shapes */}
      <span
        aria-hidden
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15"
      />
      <span
        aria-hidden
        className="absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-black/15"
      />
      <span
        aria-hidden
        className="absolute inset-3 rounded-lg border border-white/30"
      />
      {/* spine */}
      <span aria-hidden className="absolute inset-y-0 left-0 w-2 bg-black/25" />

      <span className="relative z-10 mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
        Manga
      </span>
      <div className="relative z-10 pb-2">
        <p className="font-display text-2xl font-bold leading-tight drop-shadow-sm">
          {title}
        </p>
        <p className="mt-2 text-xs font-semibold text-white/85">{author}</p>
      </div>
    </div>
  );
}

export default function BookCard({ book, priority = false }) {
  return (
    <article className="card-lift group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-ink/5">
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-cream-deep">
        {book.image ? (
          <Image
            src={book.image}
            alt={`${book.title} cover`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <GeneratedCover
            title={book.title}
            author={book.author}
            colors={book.colors}
          />
        )}
        {book.isNew && (
          <span className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-ink shadow">
            New
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg font-bold leading-snug">
          {book.title}
        </h3>
        <p className="mt-0.5 text-sm font-semibold text-ink-soft">
          {book.author}
        </p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-soft">
          {book.blurb}
        </p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {book.genres.map((g) => (
            <li
              key={g}
              className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${genreStyles[g] ?? "bg-ink/10"}`}
            >
              {g}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
