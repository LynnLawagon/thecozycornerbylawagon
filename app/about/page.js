export const metadata = {
  title: "About",
  description:
    "Learn about The Cozy Corner and our mission to recommend the best manga and comics.",
};

const pillars = [
  {
    title: "Discover",
    text: "Find new series that match your mood, from epic battles to quiet afternoons.",
    color: "bg-coral",
  },
  {
    title: "Connect",
    text: "Share the stories you love with fellow fans who get the hype.",
    color: "bg-teal",
  },
  {
    title: "Stay curious",
    text: "We keep growing the shelves, so there is always something new to read.",
    color: "bg-violet",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="hero-bg text-white">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:py-24">
          <p className="fade-up text-xs font-bold uppercase tracking-[0.3em] text-gold">Our story</p>
          <h1 className="fade-up mt-3 text-4xl font-bold sm:text-6xl">
            About The Cozy <span className="gradient-text">Corner</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
          <p>
            Welcome, ComicSIR! This is the place where we recommend the best
            manga and comics to dive into. Whether you&apos;re a seasoned
            reader or just starting your journey, we&apos;ve got something
            special for you.
          </p>
          <p>
            The Cozy Corner is a haven for manga and comic enthusiasts. We make
            exploring your favorite shonen adventures, romances and everyday
            stories effortless.
          </p>
          <p>
            We help you discover new series, connect with fellow fans, and keep
            up with what&apos;s worth reading next.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="card-lift rounded-2xl bg-white p-7 shadow-md ring-1 ring-ink/5">
              <span className={`block h-1.5 w-12 rounded-full ${p.color}`} />
              <h2 className="mt-5 text-2xl font-bold">{p.title}</h2>
              <p className="mt-2 leading-relaxed text-ink-soft">{p.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
