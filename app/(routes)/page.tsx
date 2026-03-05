import Link from "next/link";
import Image from "next/image";
import menuData from "@/data/menu.json";
import { MenuCard } from "@/components/MenuCard";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { getBestSellers } from "@/lib/menu-utils";
import type { MenuItem } from "@/types/menu";

const mapEmbedUrl =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL?.trim() ||
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0412495401947!2d104.0064258109531!3d1.1308328470117495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98900592c43b3%3A0x740a3882402ccbda!2sNoodslab!5e0!3m2!1sen!2sid!4v1772697975382!5m2!1sen!2sid";
const mapsPublicUrl = "https://maps.app.goo.gl/WkTpBuPgrr3VgYwc9";

const whatsappNumber = process.env.NEXT_PUBLIC_WA_NUMBER || "6280000000000";
const waOrderLink = buildWhatsAppLink(whatsappNumber, "Halo Noods Lab, saya mau order ramen hari ini.");

const services = [
  {
    image: "/images/menu/tonkotsu-signature.jpg",
    title: "Ramen Area",
    text: "Signature ramen dengan kuah rich, topping premium, dan plating khas Noods Lab.",
  },
  {
    image: "/images/menu/beef-yakiniku-bowl.jpg",
    title: "Rice Bowl Area",
    text: "Pilihan rice bowl gurih untuk menu cepat, mengenyangkan, dan tetap premium-casual.",
  },
  {
    image: "/images/menu/yuzu-spark.jpg",
    title: "Drinks Area",
    text: "Minuman segar dari ocha hingga yuzu spark untuk pairing menu favoritmu.",
  },
  {
    image: "/images/menu/gyoza-crispy.jpg",
    title: "Special Offers",
    text: "Promo combo dan bundling mingguan untuk dine-in maupun takeaway.",
  },
];

export default function HomePage() {
  const menuItems = menuData as MenuItem[];
  const bestSellers = getBestSellers(menuItems).slice(0, 4);
  const galleryItems = menuItems.slice(0, 6);

  return (
    <>
      <section id="home" className="relative min-h-[90vh] pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(5, 15, 10, 0.68), rgba(5, 15, 10, 0.88)), url('https://images.unsplash.com/photo-1610091824843-52f2f34f98d6?auto=format&fit=crop&w=2000&q=80')",
          }}
        />

        <div className="container-app relative z-10 flex min-h-[84vh] items-center justify-center py-20 text-center text-amber-50">
          <div className="max-w-2xl">
            <p className="mx-auto inline-block border border-amber-100/70 bg-black/25 px-3 py-1 text-[11px] tracking-[0.25em]">
              NOODS LAB
            </p>
            <h1 className="font-display mt-5 text-5xl font-semibold sm:text-7xl">RAMEN HOUSE</h1>
            <p className="mx-auto mt-4 max-w-xl text-sm text-amber-50/90 sm:text-base">
              Modern lab vibe dengan warm appetite appeal. Ramen berkualitas, kuah bold, suasana nyaman.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={waOrderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-amber-100 bg-amber-100 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-white"
              >
                Order via WhatsApp
              </a>
              <Link
                href="/menu"
                className="rounded-sm border border-amber-100/80 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-100 hover:text-zinc-900"
              >
                Lihat Menu
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-y border-amber-100/30 bg-[#11291f]/95">
          <div className="container-app flex h-14 items-center justify-center gap-7 text-xs uppercase tracking-[0.16em] text-amber-100/90 sm:text-sm">
            <Link href="/">Home</Link>
            <Link href="/menu">Our Menu</Link>
            <span className="hidden h-6 w-px bg-amber-100/30 sm:block" />
            <Link href="/contact">Contact</Link>
            <a href={waOrderLink} target="_blank" rel="noopener noreferrer">
              Buy Now
            </a>
          </div>
        </div>
      </section>

      <section className="paper-texture section-pad">
        <div className="container-app">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="plaque-title">BON APPETIT!</h2>
            <p className="mt-4 text-sm text-zinc-600 sm:text-base">
              Nikmati signature ramen, rice bowl, side dish, dan minuman yang diracik dengan standar rasa konsisten.
            </p>
          </div>

          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item, index) => (
              <article key={item.title} className="text-center">
                <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-[5px] border-[#284838] shadow-soft">
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="96px" />
                </div>
                <div className="mx-auto mt-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#284838] text-xs font-semibold text-amber-100">
                  {index + 1}
                </div>
                <h3 className="font-display mt-3 text-3xl leading-none text-[#264334]">{item.title}</h3>
                <p className="mt-3 text-sm text-zinc-600">{item.text}</p>
                <Link href="/menu" className="mt-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-[#264334] hover:underline">
                  View Menu
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#f3f0e9]">
        <div className="container-app grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-5xl leading-none text-[#264334] sm:text-6xl">Traditional Recipes</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-700">
              Kami meracik kuah, tare, dan topping dengan pendekatan terukur agar kualitas rasa selalu stabil. Karakter menu dibuat kaya, hangat, dan tetap bersih di aftertaste.
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-700">
              Konsep premium-casual membuat Noods Lab cocok untuk lunch cepat, dinner santai, maupun kumpul akhir pekan.
            </p>
            <Link href="/menu" className="mt-5 inline-block text-sm font-semibold text-[#264334] hover:underline">
              Read More
            </Link>
          </div>
          <div className="relative mx-auto h-80 w-full max-w-lg">
            <div className="absolute left-3 top-7 h-52 w-44 overflow-hidden border-4 border-white bg-zinc-200 shadow-soft">
              <Image src="/images/menu/chicken-paitan.jpg" alt="Chef plating dish" fill className="object-cover" sizes="220px" />
            </div>
            <div className="absolute right-8 top-0 h-56 w-48 overflow-hidden border-4 border-white bg-zinc-200 shadow-soft">
              <Image src="/images/menu/spicy-tantanmen.jpg" alt="Chef portrait" fill className="object-cover" sizes="220px" />
            </div>
            <div className="absolute bottom-2 left-24 w-64 border border-[#bfae88] bg-[#efe4c8] p-4 shadow-soft">
              <p className="text-xs leading-relaxed text-[#6d5b39]">
                Catatan dapur: waktu perebusan, komposisi tare, dan suhu plating dibuat konsisten agar karakter rasa tetap presisi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-300 bg-white py-2">
        <div className="container-app grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="relative h-24 overflow-hidden sm:h-28">
              <Image src={item.image} alt={item.name} fill className="object-cover" sizes="220px" />
            </div>
          ))}
        </div>
      </section>

      <section className="paper-texture section-pad">
        <div className="container-app">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="plaque-title">COME IN</h2>
            <p className="mt-4 text-2xl font-semibold text-[#264334]">Noods Lab Jakarta</p>
            <p className="mt-1 text-sm text-zinc-600">Jl. Panglima Polim No. 12, Jakarta Selatan</p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl items-center gap-6 text-center md:grid-cols-[1fr_auto_1fr]">
            <div>
              <h3 className="text-xl font-semibold tracking-wide text-[#264334]">CONNECT</h3>
              <p className="mt-2 text-sm text-zinc-600">Instagram, TikTok, dan WhatsApp untuk order cepat.</p>
            </div>
            <div className="mx-auto h-16 w-px bg-[#274838]/35" />
            <div>
              <h3 className="text-xl font-semibold tracking-wide text-[#264334]">OR CALL</h3>
              <p className="mt-2 font-display text-4xl text-[#264334]">+62 800 0000 000</p>
            </div>
          </div>

          <div className="mt-8 overflow-hidden border border-zinc-300 bg-white shadow-soft">
            <iframe
              src={mapEmbedUrl}
              className="h-80 w-full"
              loading="lazy"
              title="Lokasi Noods Lab"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href={mapsPublicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-sm border border-[#264334] bg-[#264334] px-4 py-2 text-sm font-semibold text-amber-50 hover:bg-[#1d3328]"
            >
              Buka Google Maps
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad pt-6">
        <div className="container-app">
          <h2 className="font-display text-5xl text-[#264334]">Best Seller</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
