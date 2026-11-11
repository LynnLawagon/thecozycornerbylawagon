import BooksExplorer from "../components/BooksExplorer";
import { books } from "../data/books";

export const metadata = {
  title: "Books",
  description:
    "Browse our hand-picked manga recommendations: action, romance, fantasy, slice of life and more.",
};

export default function BooksPage() {
  return (
    <>
      <section className="hero-bg text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <p className="fade-up text-xs font-bold uppercase tracking-[0.3em] text-gold">
            The Library
          </p>
          <h1 className="fade-up mt-3 text-4xl font-bold sm:text-6xl">
            Manga <span className="gradient-text">Recommendations</span>
          </h1>
          <p className="fade-up mt-4 max-w-xl text-lg text-white/80">
            {books.length} hand-picked series, from legendary shonen to gentle
            slice-of-life. Search or filter to find your next obsession.
          </p>
        </div>
      </section>

      <section className="mx-auto -mt-8 max-w-6xl px-5 pb-20">
        <BooksExplorer />
      </section>
    </>
  );
}
