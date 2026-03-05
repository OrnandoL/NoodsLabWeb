import Image from "next/image";
import type { MenuItem } from "@/types/menu";
import { formatPriceIDR } from "@/lib/format-price";

type MenuCardProps = {
  item: MenuItem;
};

export function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="overflow-hidden rounded-sm border border-zinc-300 bg-white shadow-soft">
      <div className="relative h-44 w-full bg-zinc-100">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-zinc-800">{item.name}</h3>
          <span className="text-sm font-semibold text-ramen">{formatPriceIDR(item.price)}</span>
        </div>
        <p className="text-sm text-zinc-600">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={`${item.id}-${tag}`} className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-600">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
