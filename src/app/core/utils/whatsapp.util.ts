export function buildWhatsAppUrl(whatsappDigits: string, message: string): string {
  const digits = (whatsappDigits || '').replace(/\D/g, '');
  const text = encodeURIComponent(message || '');
  return `https://wa.me/${digits}?text=${text}`;
}
