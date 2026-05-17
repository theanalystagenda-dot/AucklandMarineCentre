# Auckland Marine Centre Website

Premium static site for Auckland Marine Centre — NZ's largest marine dealership.

**Stack:** Next.js 16 · Tailwind CSS v4 · TypeScript · GitHub Pages

---

## Local Development

```bash
# Install dependencies
bun install   # or: npm install

# Start dev server
bun dev       # or: npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Build

```bash
bun run build   # or: npm run build
```

Static output is written to `./out`. Open `out/index.html` locally or deploy the `out` folder.

---

## Deployment (GitHub Pages)

1. Push to the `main` branch
2. GitHub Actions runs the build and deploys to the `gh-pages` branch automatically
3. In your repo settings: **Settings → Pages → Source → Deploy from branch → gh-pages / root**

The site will be live at `https://theanalystagenda-dot.github.io/AucklandMarineCentre/`

---

## Formspree Setup

Contact and finance forms use [Formspree](https://formspree.io). The placeholder ID `PLACEHOLDER_ID` appears in:

- `components/ContactForm.tsx`
- `app/finance/page.tsx`
- `app/service/page.tsx`

**To activate forms:**

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form — copy the Form ID (e.g. `xpwzabcd`)
3. Replace every `PLACEHOLDER_ID` with your Form ID

---

## Site Structure

```
/                    Homepage
/boats/new           New boat brands grid
/boats/new/[slug]    Individual brand page
/boats/used          Used boat inventory (filtered)
/boats/inflatables   Inflatable RIBs
/trailers            Trailer range & specs
/outboards/mercury   Mercury outboards (tabbed)
/outboards/mercury/mercruiser  MerCruiser range
/outboards/suzuki    Suzuki outboards (tabbed)
/outboards/used      Used outboard inventory
/jet-skis            Kawasaki Jet Ski range
/service             Service & Parts + booking form
/specials            Current deals (tabbed)
/finance             Finance application (quick + full)
/insurance           Marine insurance info
/about               Company history & team
/contact             Map + contact form
```

---

## Data Files

All inventory and product data lives in `data/`:

| File | Contents |
|------|----------|
| `brands.json` | Boat brand info and slugs |
| `used-boats.json` | Used boat listings |
| `used-outboards.json` | Used outboard listings |
| `specials.json` | Current deals |
| `outboard-ranges.json` | Mercury & Suzuki model ranges |

TypeScript interfaces for all data are in `types/index.ts`.

---

## Contact Details

- **Address:** 321 Ti Rakau Drive, Burswood, Auckland 2013
- **Phone:** 09 271 1575
- **Sales:** sales@aucklandmarine.co.nz
- **Service:** service@aucklandmarine.co.nz (Andrew Hilliar, ext 4)
- **Hours:** Mon–Fri 8am–5:30pm | Sat 8am–4pm | Sun 10am–3pm
