import type { Product } from "@/data/types";

// Número de WhatsApp del negocio (con indicativo de país, sin + ni espacios).
// Es el único lugar donde hay que cambiarlo.
export const WHATSAPP_NUMBER = "573000000000";

export function formatPrice(precio: number): string {
  // 120000 -> "$120.000"
  return `$${new Intl.NumberFormat("es-CO").format(precio)}`;
}

function buildLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Link para un producto: incluye nombre y categoría, y el precio si existe.
export function getProductWhatsAppLink(product: Product): string {
  const price = product.precio ? ` a ${formatPrice(product.precio)} COP` : "";
  const message = `Hola Luna Online, me interesa ${product.nombre} (${product.categoria})${price}. ¿Podrían darme más información?`;
  return buildLink(message);
}

// Link con mensaje genérico (hero y botón flotante).
export function getGenericWhatsAppLink(): string {
  return buildLink("Hola Luna Online, quiero más información sobre sus productos.");
}
