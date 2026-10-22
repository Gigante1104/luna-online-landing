import { getGenericWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      href={getGenericWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-semibold text-white shadow-lg hover:brightness-95"
    >
      {/* Ícono simple de burbuja de chat */}
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      </svg>
      WhatsApp
    </a>
  );
}
