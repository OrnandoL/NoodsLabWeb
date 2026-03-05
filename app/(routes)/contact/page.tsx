import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description: "Alamat, jam buka, dan kontak Noods Lab.",
};

const mapEmbedUrl =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL?.trim() ||
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0412495401947!2d104.0064258109531!3d1.1308328470117495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98900592c43b3%3A0x740a3882402ccbda!2sNoodslab!5e0!3m2!1sen!2sid!4v1772697975382!5m2!1sen!2sid";
const mapsPublicUrl = "https://maps.app.goo.gl/WkTpBuPgrr3VgYwc9";

const waLink = buildWhatsAppLink(
  process.env.NEXT_PUBLIC_WA_NUMBER || "6280000000000",
  "Halo Noods Lab, saya ingin reservasi meja."
);

export default function ContactPage() {
  return (
    <Section className="pt-28 sm:pt-32" title="Location & Contact" subtitle="Datang langsung atau hubungi kami untuk order dan reservasi.">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-soft">
          <h2 className="text-lg font-bold">Noods Lab Blok M</h2>
          <p className="mt-2 text-sm text-zinc-700">Jl. Panglima Polim No. 12, Jakarta Selatan</p>
          <div className="mt-5 space-y-2 text-sm text-zinc-700">
            <p>Senin - Jumat: 11.00 - 22.00</p>
            <p>Sabtu - Minggu: 10.00 - 23.00</p>
            <p>WhatsApp: +62 800-0000-000</p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl bg-moss px-5 py-3 text-sm font-semibold text-white hover:bg-moss/90"
          >
            Chat via WhatsApp
          </a>
          <a
            href={mapsPublicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex rounded-xl border border-moss bg-transparent px-5 py-3 text-sm font-semibold text-moss hover:bg-moss hover:text-white"
          >
            Buka Google Maps
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-soft">
          <iframe
            src={mapEmbedUrl}
            className="h-80 w-full"
            loading="lazy"
            title="Peta Noods Lab"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}
