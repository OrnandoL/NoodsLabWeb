# Noods Lab - Next.js MVP

Website restoran ramen **Noods Lab** menggunakan Next.js App Router + TypeScript + Tailwind CSS.

## Fitur

- Home, Menu, Contact
- Navbar sticky + CTA Order via WhatsApp
- Best seller dari data lokal
- Menu data-driven dari `data/menu.json`
- Filter kategori + search client-side di halaman menu
- Section lokasi + embed Google Maps
- SEO basic (metadata, OpenGraph, favicon, robots, sitemap)
- Mobile-first, ringan, dan mudah di-maintain

## Struktur Utama

- `app/(routes)/page.tsx` - Home
- `app/(routes)/menu/page.tsx` - Menu
- `app/(routes)/contact/page.tsx` - Contact
- `components/` - Reusable UI components
- `lib/` - Helper utilities
- `data/menu.json` - Sumber data menu
- `public/images/menu/` - Tempat gambar menu

## Environment Variable

Salin `.env.example` menjadi `.env.local` lalu isi sesuai kebutuhan.

```bash
cp .env.example .env.local
```

Variabel:

- `NEXT_PUBLIC_WA_NUMBER` contoh: `6281234567890`
- `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` contoh embed URL Google Maps
- `NEXT_PUBLIC_INSTAGRAM_URL` link Instagram brand
- `NEXT_PUBLIC_TIKTOK_URL` link TikTok brand

Aplikasi tetap jalan walau env kosong (pakai fallback aman).

## Menjalankan Project

1. Install dependencies:

```bash
npm install
```

2. Development:

```bash
npm run dev
```

3. Build production:

```bash
npm run build
```

4. Jalankan hasil build:

```bash
npm run start
```

## Catatan Gambar Menu

Gambar menu tidak wajib ada untuk build berhasil.
Agar tampilan maksimal, unggah file gambar sesuai nama path di `data/menu.json` ke folder `public/images/menu/`.
