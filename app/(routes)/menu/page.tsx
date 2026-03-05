import type { Metadata } from "next";
import menuData from "@/data/menu.json";
import { MenuExplorer } from "@/components/menu/MenuExplorer";
import { Section } from "@/components/Section";
import type { MenuItem } from "@/types/menu";

export const metadata: Metadata = {
  title: "Menu",
  description: "Jelajahi menu ramen, rice bowl, side dish, dan minuman dari Noods Lab.",
};

export default function MenuPage() {
  const menuItems = menuData as MenuItem[];

  return (
    <Section className="pt-28 sm:pt-32" title="Menu Noods Lab" subtitle="Filter berdasarkan kategori atau cari menu favoritmu.">
      <MenuExplorer items={menuItems} />
    </Section>
  );
}
