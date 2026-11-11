# The Cozy Corner

A manga recommendation site built with Next.js 16 and Tailwind CSS 4.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Adding manga

Edit `app/data/books.js` and add an entry. To use a real cover, put the image in
`public/images/` and set `image: "/images/your-file.png"`. Without an `image`,
a designed cover is generated from the `colors` pair.

## Design tokens

Colors and fonts live in `app/globals.css` (`--coral`, `--gold`, `--teal`,
`--violet`, `--plum`, `--cream`). Fonts (Playfair Display + Nunito) are
self-hosted through `@fontsource-variable`.
