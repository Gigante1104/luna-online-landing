const testimonials = [
  {
    nombre: "María Fernanda R.",
    ciudad: "Bogotá",
    texto: "La cobija bordada con el nombre de mi hija quedó hermosa y es suavísima.",
  },
  {
    nombre: "Andrés C.",
    ciudad: "Medellín",
    texto: "Muy buena atención por WhatsApp y los cojines estampados quedaron igual al diseño que envié.",
  },
  {
    nombre: "Laura y Camilo",
    ciudad: "Cali",
    texto: "Pedimos buzos para toda la familia y la calidad es excelente.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center text-2xl font-bold md:text-3xl">
        Lo que dicen nuestros clientes
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.nombre}
            className="rounded-xl border border-gray-200 bg-white p-6"
          >
            <blockquote className="text-gray-700">“{t.texto}”</blockquote>
            <figcaption className="mt-4 text-sm font-semibold">
              {t.nombre}
              <span className="font-normal text-gray-500"> · {t.ciudad}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
