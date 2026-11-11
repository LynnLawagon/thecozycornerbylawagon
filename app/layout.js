import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const playfair = localFont({
  src: "../node_modules/@fontsource-variable/playfair-display/files/playfair-display-latin-wght-normal.woff2",
  variable: "--font-playfair",
  weight: "400 900",
  display: "swap",
});

const nunito = localFont({
  src: "../node_modules/@fontsource-variable/nunito/files/nunito-latin-wght-normal.woff2",
  variable: "--font-nunito",
  weight: "200 1000",
  display: "swap",
});

const siteUrl = "https://thecozycornerbylawagon.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Cozy Corner — Manga Recommendations",
    template: "%s · The Cozy Corner",
  },
  description:
    "An online haven for manga and comic enthusiasts to discover their next favorite read.",
  openGraph: {
    title: "The Cozy Corner",
    description:
      "An online haven for manga and comic enthusiasts to discover their next favorite read.",
    url: siteUrl,
    siteName: "The Cozy Corner",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${nunito.variable} flex min-h-screen flex-col antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
