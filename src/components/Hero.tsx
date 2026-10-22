import { getGenericWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section id="inicio" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center md:py-24">
        <h1 className="text-3xl font-bold leading-tight md:text-5xl">
          Textiles para tu hogar, hechos para abrigarte
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-gray-600 md:text-lg">
          Cobijas, mantas, cojines y ropa de cama desde Bogotá para toda
          Colombia.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="#catalogo"
            className="rounded-lg bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-dark"
          >
            Ver catálogo
          </a>
          <a
            href={getGenericWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-accent px-6 py-3 font-semibold text-accent hover:bg-white"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
