"use client";
import { useState } from "react";
import Link from "next/link";

import CardProyecto from "./CardProyecto";
import { TituloHome } from "@/components/ui";

import { SiGithub, SiBehance } from "react-icons/si";

const data = [
  {
    nombre: "App Web: Catálogo Marca Blanca",
    herramientas: "React.js, Bootstrap, Figma",
    imagen: "/imagenes/catalogo.jpg",
    link: "/proyectos/catalogo-marca-blanca",
    especialidad: "programacion",
  },
  {
    nombre: "Rediseño del Entorno Virtual de la Universidad del Gran Rosario",
    herramientas: "Moodle, CSS, Figma",
    imagen: "/imagenes/UGR-entornovirtual.jpg",
    link: "/proyectos/entorno-virtual-ugr",
    especialidad: "programacion",
  },
  {
    nombre: "Rediseño y administración del sitio de booking: Medanos Patagonia",
    herramientas: "Wordpress, CSS",
    imagen: "/imagenes/medanos-patagonia.jpg",
    link: "/proyectos/medanos-patagonia",
    especialidad: "programacion",
  },
  {
    nombre: "Prototipo de App: Mucamas Hoy",
    herramientas: "Figma",
    imagen: "/imagenes/mucamas-home.jpg",
    link: "/proyectos/prototipo-mucamas",
    especialidad: "disenio",
  },
  {
    nombre: "ShopyLibre: otros trabajos",
    herramientas: "Adobe Illustrator, Adobe Photoshop",
    imagen: "/imagenes/shopylibre-miniatura.jpg",
    link: "/proyectos/shopylibre-otros-trabajos",
    especialidad: "disenio",
  },
  {
    nombre: "Packaging para la Afeitadora RollerShaver",
    herramientas: "Adobe Illustrator, Adobe Photoshop",
    imagen: "/imagenes/afeitadora-muckup.png",
    link: "/proyectos/packaging-rollershaver",
    especialidad: "disenio",
  },
  {
    nombre: "Diseño y Maquetación de Presentación Profesional",
    herramientas: "Powerpoint",
    imagen: "/imagenes/05-despues.jpg",
    link: "/proyectos/maquetacion-en-powerpoint",
    especialidad: "disenio",
  },
  {
    nombre: "Sitio Web: Ciberpsicología en español",
    herramientas: "HTML, Bootstrap",
    imagen: "/imagenes/ciberpsicologia-miniatura.jpg",
    link: "/proyectos/ciberpsicologia",
    especialidad: "programacion",
  },
];

interface ProyectoData {
  nombre: string;
  herramientas: string;
  imagen: string;
  link: string;
  especialidad: string;
}

export function Proyectos() {
  const [categoria, setCategoria] = useState<string>("programacion");
  const [proyectos, setProyectos] = useState<ProyectoData[]>(data);

  return (
    <>
      <div className="mb-4 relative">
        <button
          className="border-b-2 border-b-slate-600 disabled:border-b-slate-300 pe-3 py-2 font-medium"
          onClick={() => setCategoria("programacion")}
          disabled={categoria === "programacion"}
        >
          Programación
        </button>
        <button
          className="border-b-2 border-b-slate-600 disabled:border-b-slate-300 px-3 py-2 font-medium"
          onClick={() => setCategoria("disenio")}
          disabled={categoria === "disenio"}
        >
          Diseño
        </button>
        <div className="w-full h-px bg-white opacity-30 absolute bottom-0 right-0"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {proyectos
          .filter((item) => item.especialidad === categoria)
          .map((item, index) => (
            <CardProyecto
              key={index}
              nombre={item.nombre}
              herramientas={item.herramientas}
              imagen={item.imagen}
              link={item.link}
            />
          ))}
      </div>
      <div className=" mt-4">
        <TituloHome>Para ver más...</TituloHome>
        <div className="flex justify-center gap-4">
          <Link href="https://github.com/MattiRuiz" target="_blank">
            <button className="flex items-center rounded-md px-3 py-2 leading-tight bg-slate-200 text-slate-800 hover:bg-slate-300">
              <SiGithub className="me-2 text-2xl " /> Ir a mis repositorios de GitHub
            </button>
          </Link>
          <Link href="https://www.behance.net/matias-ruiz" target="_blank">
            <button className="flex items-center rounded-md px-3 py-2 leading-tight bg-slate-200 text-slate-800 hover:bg-slate-300">
              <SiBehance className="me-2 text-2xl " />
              Ver diseños anteriores en Behance
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Proyectos;
