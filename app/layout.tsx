import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundMusic } from "@/components/BackgroundMusic";
import type { ReactNode } from "react";

const baseUrl = "https://noods-lab.example";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Noods Lab | Ramen Premium Casual",
    template: "%s | Noods Lab",
  },
  description:
    "Noods Lab menyajikan ramen hangat dengan sentuhan modern lab vibe. Cek menu, best seller, lokasi, dan order via WhatsApp.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: baseUrl,
    siteName: "Noods Lab",
    title: "Noods Lab | Ramen Premium Casual",
    description:
      "Ramen lezat, kuah kaya rasa, dan pengalaman makan nyaman. Order cepat via WhatsApp.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noods Lab",
    description: "Ramen modern dengan cita rasa hangat dan bold.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <BackgroundMusic />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
