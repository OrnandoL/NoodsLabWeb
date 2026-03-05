export function buildWhatsAppLink(rawNumber: string, message: string): string {
  const fallback = "6280000000000";
  const digits = rawNumber.replace(/\D/g, "");

  const normalized = (() => {
    if (!digits) return fallback;
    if (digits.startsWith("62")) return digits;
    if (digits.startsWith("0")) return `62${digits.slice(1)}`;
    return `62${digits}`;
  })();

  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}
