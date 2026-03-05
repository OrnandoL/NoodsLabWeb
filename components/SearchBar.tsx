type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Cari menu, contoh: tonkotsu"
      className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none ring-moss/20 placeholder:text-zinc-400 focus:ring sm:max-w-sm"
      aria-label="Cari menu"
    />
  );
}
