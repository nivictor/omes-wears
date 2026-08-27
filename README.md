# Omes wears

A handmade footwear and bag store built with Next.js. Customers browse by category,
add items (with size and colour) to a basket, and check out. The order opens in
WhatsApp and payment is made by bank transfer. No database and no online payment
gateway, so it hosts anywhere for free.

## Run it on your computer
1. Install Node.js (LTS) from nodejs.org.
2. In this folder, run: `npm install`
3. Start it: `npm run dev`  then open http://localhost:3000

## The things you will edit

### Your details (one file): `lib/config.ts`
- `whatsappNumber` — your number in international form: country code first, no plus,
  no leading zero. Example: 0806 123 4567 becomes 2348061234567.
- `bank` — your real UBA (or other) account name and number for transfers.
- `contact` — your phone, email, Facebook page, and opening hours.

### Your products: `lib/products.ts`
Each product follows the same pattern. Copy an existing one, then change the name,
slug (a short lowercase-with-dashes id, must be unique), price (a plain number in
naira), description, sizes, colours, and whether it is `featured`.

### Your photos: `public/products/`
Replace the sample images, or add new ones and point a product's `image` to the new
file, e.g. `/products/my-photo.jpg`.

> The account number, contact details and product photos included are SAMPLES.
> Replace them with your real ones before going live.

## Deploy free on Netlify (via GitHub)
1. Put this folder in a GitHub repository.
2. On netlify.com: Add new site -> Import an existing project -> pick the repo.
3. Netlify detects Next.js automatically. Deploy. Done.
Every time you push a change to GitHub, Netlify rebuilds and republishes.

## Build check
Run `npm run build` to confirm everything compiles before you deploy.
