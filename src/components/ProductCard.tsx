import Image from "next/image";
import type { Product } from "@/data/types";
import { formatPrice, getProductWhatsAppLink } from "@/lib/whatsapp";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="relative aspect-square bg-gray-100">
        <Image
          src={product.imagenes[0]}
          alt={product.nombre}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
          {product.categoria}
        </p>
        <h4 className="mt-1 text-lg font-semibold">{product.nombre}</h4>
        <p className="mt-1 text-sm text-gray-600">{product.descripcion}</p>
        {product.precio && (
          <p className="mt-2 font-medium">{formatPrice(product.precio)}</p>
        )}
        {product.personalizacion.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {product.personalizacion.map((tipo) => (
              <li
                key={tipo}
                className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-700"
              >
                {tipo}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto pt-4">
          <a
            href={getProductWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg bg-accent py-2.5 text-center font-semibold text-white hover:bg-accent-dark"
          >
            Lo quiero
          </a>
        </div>
      </div>
    </article>
  );
}
