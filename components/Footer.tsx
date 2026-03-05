export function Footer() {
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com";
  const tiktokUrl = process.env.NEXT_PUBLIC_TIKTOK_URL || "https://tiktok.com";

  return (
    <footer className="mt-12 border-t border-moss/40 bg-[#10281f] text-amber-50">
      <div className="container-app grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-3xl leading-none tracking-[0.12em] text-amber-100">Noods Lab</h3>
          <p className="mt-2 text-sm text-amber-50/80">Ramen modern dengan sentuhan premium-casual.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-amber-100">Alamat</h4>
          <p className="mt-2 text-sm text-amber-50/80">Jl. Panglima Polim No. 12, Jakarta Selatan</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-amber-100">Jam Buka</h4>
          <p className="mt-2 text-sm text-amber-50/80">Senin - Jumat: 11.00 - 22.00</p>
          <p className="text-sm text-amber-50/80">Sabtu - Minggu: 10.00 - 23.00</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-amber-100">Sosial Media</h4>
          <div className="mt-2 flex gap-3 text-sm">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-amber-50/80 hover:text-amber-200">
              Instagram
            </a>
            <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="text-amber-50/80 hover:text-amber-200">
              TikTok
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-amber-100/20 py-4 text-center text-xs text-amber-50/70">
        © {new Date().getFullYear()} Noods Lab. All rights reserved.
      </div>
    </footer>
  );
}
