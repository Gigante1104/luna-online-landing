import Image from "next/image";
import type { Product } from "@/data/types";
import { formatPrice, getProductWhatsAppLink } from "@/lib/whatsapp";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="relative aspect-square bg-gray-100">
        <Image
          src={product.imagenes[0]}
          alt={product.nombre}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
          {product.categoria}
        </p>
        <h3 className="mt-1 text-lg font-semibold">{product.nombre}</h3>
        <p className="mt-1 text-gray-600">{formatPrice(product.precio)}</p>
        <a
          href={getProductWhatsAppLink(product)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block rounded-lg bg-accent py-2.5 text-center font-semibold text-white hover:bg-accent-dark"
        >
          Lo quiero
        </a>
      </div>
    </article>
  );
}
