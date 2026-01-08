export const metadata = {
  title: "About",
  description: "Learn about The Cozy Corner and our mission to recommend calming, meaningful books.",
};

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-px)] px-4 py-8">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          About The Cozy Corner
        </h1>

        <div className="text-zinc-700 text-lg text-justify leading-relaxed space-y-6">
          <p>
            Welcome ComicSIR! To the place where we recommend you the best manga and comics to dive into. 
            Whether you're a seasoned reader or just starting your journey, we've got something special for you!
          </p>
          <p>
            The Cozy Corner is the ultimate haven for manga and comic enthusiasts. 
            The Cozy Corner makes exploring the world of their favorite sitcoms and shonen adventures effortless.
          </p>
          <p>
            We help ComicSIR! discover new series, connect with fellow fans, and stay updated on the latest releases.
          </p>
        </div>
      </div>
    </section>
  );
}