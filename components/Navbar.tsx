import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || "6280000000000";

export function Navbar() {
  const orderLink = buildWhatsAppLink(waNumber, "Halo Noods Lab, saya mau order ramen.");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-amber-100/20 bg-[#0f241d]/92 backdrop-blur">
      <nav className="container-app flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-display text-3xl leading-none tracking-[0.12em] text-amber-100">
          Noods Lab
        </Link>

        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-amber-50 sm:gap-5 sm:text-sm">
          <Link href="/" className="hover:text-amber-200">Home</Link>
          <Link href="/menu" className="hover:text-amber-200">Menu</Link>
          <Link href="/contact" className="hover:text-amber-200">Contact</Link>
          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-amber-100 bg-amber-100 px-3 py-2 text-zinc-900 hover:bg-white"
          >
            Order
          </a>
        </div>
      </nav>
    </header>
  );
}
