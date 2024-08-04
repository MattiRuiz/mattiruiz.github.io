"use client";
import { useState } from "react";
import Link from "next/link";

import { PiList } from "react-icons/pi";

export function Header() {
  const [estadoMenu, setEstadoMenu] = useState<string>("hidden");

  const handleMenu = () => {
    if (estadoMenu === "hidden") {
      setEstadoMenu("flex");
    } else {
      setEstadoMenu("hidden");
    }
  };

  return (
    <div className="container mx-auto py-3 mb-2 grid grid-cols-2">
      <Link href="/">
        <h1 className="text-xl text-slate-100 hover:text-slate-300 tracking-normal">
          MRuiz | <span className="text-slate-500 font-semibold ">Porfolio</span>
        </h1>
      </Link>
      <div className="md:hidden flex justify-end">
        <button onClick={() => handleMenu()}>
          <PiList className="text-2xl" />
        </button>
      </div>
      <div className="col-span-2 md:col-span-1">
        <ul className={`${estadoMenu} md:flex gap-x-5 gap-y-3 mt-3 md:mt-0 justify-end flex-col md:flex-row items-end`}>
          <li>
            <Link href="/#sobre-mi" className="py-2 text-white hover:text-slate-300 font-semibold tracking-normal">
              Sobre mi
            </Link>
          </li>
          <li>
            <Link href="/#mis-proyectos" className="py-2 text-white hover:text-slate-300 font-semibold tracking-normal">
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="/#contacto" className="py-2 text-white hover:text-slate-300 font-semibold tracking-normal">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
