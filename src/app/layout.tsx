import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luna Online",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
