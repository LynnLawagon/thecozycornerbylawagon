import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-plum text-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold text-white">
            The Cozy <span className="text-gold">Corner</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            A warm little nook for manga lovers. Find your next favorite series
            and get lost in the story.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gold">
            Explore
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:text-white" href="/books">Browse books</Link></li>
            <li><Link className="hover:text-white" href="/about">About us</Link></li>
            <li><Link className="hover:text-white" href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gold">
            Heads up
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            All manga titles and cover art belong to their respective creators
            and publishers. The Cozy Corner is a fan-made recommendation site.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © 2026 The Cozy Corner by Lawagon. Made with ♥ for readers.
      </div>
    </footer>
  );
}
