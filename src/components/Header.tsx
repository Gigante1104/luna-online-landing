"use client";

import { useState } from "react";

const links = [
  { href: "#sobre-luna", label: "Sobre Luna" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  // En móvil el menú se abre y se cierra con el botón de las tres rayas
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href="#inicio" className="text-lg font-bold text-accent">
          Luna Online
        </a>

        {/* Desktop: enlaces en línea */}
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Móvil: botón de menú */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Móvil: lista de enlaces desplegada */}
      {open && (
        <nav className="border-t border-gray-200 bg-white md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-medium hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
