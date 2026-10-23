import products from "@/data/products.json";
import type { Category, Product } from "@/data/types";
import ProductCard from "./ProductCard";

const categories: Category[] = [
  "Cobijas",
  "Kits",
  "Cojines",
  "Toallas",
  "Ropa",
  "Accesorios",
];

export default function ProductGrid() {
  return (
    <section id="catalogo" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold md:text-3xl">Catálogo</h2>
        {categories.map((categoria) => (
          <div key={categoria} className="mt-10">
            <h3 className="text-xl font-semibold">{categoria}</h3>
            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {(products as Product[])
                .filter((product) => product.categoria === categoria)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
