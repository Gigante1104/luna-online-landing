import { getGenericWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center">
        <p className="text-lg font-bold text-accent">Luna Online</p>
        <ul className="mt-4 flex flex-col gap-2 text-gray-600 sm:flex-row sm:justify-center sm:gap-8">
          <li>
            <a
              href="https://instagram.com/lunaonline"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href={getGenericWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              WhatsApp
            </a>
          </li>
          <li>
            <a href="mailto:hola@lunaonline.co" className="hover:text-accent">
              hola@lunaonline.co
            </a>
          </li>
        </ul>
        <p className="mt-6 text-sm text-gray-500">
          © Luna Online. Bogotá, Colombia.
        </p>
      </div>
    </footer>
  );
}
