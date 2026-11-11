"use client";

import { useMemo, useState } from "react";
import BookCard from "./BookCard";
import { books, genres } from "../data/books";

export default function BooksExplorer() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return books.filter((b) => {
      const inGenre = genre === "All" || b.genres.includes(genre);
      const inQuery =
        !q ||
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q);
      return inGenre && inQuery;
    });
  }, [query, genre]);

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-3xl bg-white p-4 shadow-md ring-1 ring-ink/5 sm:p-5">
        <label className="relative block">
          <span className="sr-only">Search by title or author</span>
          <svg
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft"
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="9" cy="9" r="6" />
            <path d="M14 14l4 4" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title or author…"
            className="w-full rounded-full border border-ink/10 bg-cream py-3 pl-11 pr-4 text-sm outline-none transition focus:border-violet focus:ring-4 focus:ring-violet/15"
          />
        </label>

        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter by genre"
        >
          {["All", ...genres].map((g) => {
            const active = g === genre;
            return (
              <button
                key={g}
                type="button"
                aria-pressed={active}
                onClick={() => setGenre(g)}
                className={`rounded-full px-4 py-1.5 text-sm font-bold transition ${
                  active
                    ? "bg-plum text-white shadow"
                    : "bg-cream-deep text-ink-soft hover:bg-gold/40 hover:text-ink"
                }`}
              >
                {g}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-6 text-sm font-semibold text-ink-soft" aria-live="polite">
        Showing {results.length} of {books.length} titles
      </p>

      {results.length > 0 ? (
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {results.map((book, i) => (
            <BookCard key={book.slug} book={book} priority={i < 4} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-3xl border-2 border-dashed border-ink/15 bg-white/60 p-12 text-center">
          <p className="font-display text-2xl font-bold">Nothing on this shelf yet</p>
          <p className="mt-2 text-ink-soft">
            Try another genre or a different search.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setGenre("All");
            }}
            className="mt-5 rounded-full bg-coral px-6 py-2.5 font-bold text-white hover:brightness-110"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
