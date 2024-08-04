import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import { BloqueContacto, Header } from "../components";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "M. Ruiz | Programador y diseñador gráfico",
  description: "Matias E. Ruiz - Licenciado en Diseño Gráfico y Técnico en Programación.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} container mx-auto px-4 sm:px-6`}>
        <Header />
        {children}
        <BloqueContacto />
      </body>
    </html>
  );
}
