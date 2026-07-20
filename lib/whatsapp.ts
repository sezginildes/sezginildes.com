const phoneNumber = "905388504976";

export function whatsAppUrl(message: string) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
