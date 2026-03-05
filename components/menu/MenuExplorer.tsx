"use client";

import { useMemo, useState } from "react";
import type { MenuItem } from "@/types/menu";
import { getMenuCategories, searchAndFilterMenu } from "@/lib/menu-utils";
import { CategoryFilter } from "@/components/CategoryFilter";
import { SearchBar } from "@/components/SearchBar";
import { MenuCard } from "@/components/MenuCard";

type MenuExplorerProps = {
  items: MenuItem[];
};

export function MenuExplorer({ items }: MenuExplorerProps) {
  const categories = getMenuCategories(items);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredItems = useMemo(
    () => searchAndFilterMenu(items, query, activeCategory),
    [items, query, activeCategory]
  );

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar value={query} onChange={setQuery} />
        <p className="text-sm text-zinc-600">{filteredItems.length} menu ditemukan</p>
      </div>

      <CategoryFilter
        categories={["Semua", ...categories]}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="mt-8 rounded-xl border border-dashed border-zinc-300 bg-white p-6 text-center text-sm text-zinc-600">
          Menu tidak ditemukan. Coba kata kunci atau kategori lain.
        </div>
      )}
    </div>
  );
}
