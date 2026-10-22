import products from "@/data/products.json";
import type { Product } from "@/data/types";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section id="catalogo" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold md:text-3xl">Catálogo</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {(products as Product[]).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
