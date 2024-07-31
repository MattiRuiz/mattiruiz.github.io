import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import BloqueContacto from "../components/BloqueContacto";

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
      <body className={`${inter.className} container mx-auto px-6`}>
        <div className="container mx-auto py-3 flex flex-row justify-between mb-6">
          <Link href="/">
            <h1 className="text-xl ">
              MRuiz | <span className="text-slate-500 font-semibold">Porfolio</span>
            </h1>
          </Link>
          <div>
            <ul className="flex">
              <li>
                <Link href="/#sobre-mi" className="py-2 ps-6 hover:text-slate-400">
                  Sobre mi
                </Link>
              </li>
              <li>
                <Link href="/#mis-proyectos" className="py-2 ps-6 hover:text-slate-400">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="py-2 ps-6 hover:text-slate-400">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {children}
        <BloqueContacto />
      </body>
    </html>
  );
}
