import type { MenuItem } from "@/types/menu";

export function getBestSellers(items: MenuItem[]): MenuItem[] {
  return items.filter((item) => item.isBestSeller);
}

export function getMenuCategories(items: MenuItem[]): string[] {
  return [...new Set(items.map((item) => item.category))];
}

export function searchAndFilterMenu(items: MenuItem[], query: string, category: string): MenuItem[] {
  const normalized = query.trim().toLowerCase();

  return items.filter((item) => {
    const matchCategory = category === "Semua" || item.category === category;
    const searchable = `${item.name} ${item.description} ${item.tags.join(" ")}`.toLowerCase();
    const matchQuery = !normalized || searchable.includes(normalized);
    return matchCategory && matchQuery;
  });
}
