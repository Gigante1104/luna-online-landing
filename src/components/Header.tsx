const links = [
  { href: "#sobre-luna", label: "Sobre Luna" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href="#inicio" className="text-lg font-bold text-accent">
          Luna Online
        </a>
        {/* En móvil se ocultan los enlaces para no saturar el header */}
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#catalogo"
          className="text-sm font-medium text-accent md:hidden"
        >
          Catálogo
        </a>
      </div>
    </header>
  );
}
