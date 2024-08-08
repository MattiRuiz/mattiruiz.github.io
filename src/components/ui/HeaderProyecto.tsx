import { ReactNode } from "react";
import Link from "next/link";

import { PiArrowCircleRightDuotone } from "react-icons/pi";

interface Props {
  children: ReactNode;
  herramientas: string;
  titulo: string;
  estado: string;
  color: string;
  link: string;
}

export function HeaderProyecto({ herramientas, titulo, estado, color, link, children }: Props) {
  return (
    <div className="block sm:flex flex-grow mb-6 gap-x-6 items-center border  border-slate-700 rounded-md">
      <div className="max-h-72 sm:max-h-max overflow-hidden rounded-t-md sm:rounded-none lg:rounded-s-md">
        {children}
      </div>
      <div className="p-4">
        <h6 className="text-slate-400 mb-2 font-semibold">{herramientas}</h6>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-3">{titulo}</h1>
        <div className="flex items-center mb-2">
          <p className="mb-0">
            <strong>Estado:</strong> {estado}
          </p>
          <div className={`bg-${color}-300 w-3 h-3 rounded-xl ms-2 mt-0.5`}></div>
        </div>
        {link && (
          <Link href={link} className="flex items-center text-white hover:text-slate-300" target="_blank">
            <PiArrowCircleRightDuotone className="mt-0.5 text-lg" />
            <p className="mb-0 ms-2">Ir al sitio</p>
          </Link>
        )}
      </div>
    </div>
  );
}
