"use client";
import { useState } from "react";
import Link from "next/link";

import CardProyecto from "./CardProyecto";
import { TituloHome } from "@/components/ui";

import { SiGithub, SiBehance } from "react-icons/si";

const data = [
  {
    nombre: "Aplicación Web: Catálogo Digital Marca Blanca",
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
    nombre: "Prototipo Interactivo de la aplicación: Mucamas Hoy",
    herramientas: "Figma",
    imagen: "/imagenes/mucamas-home.jpg",
    link: "/proyectos/prototipo-mucamas",
    especialidad: "disenio",
  },
  {
    nombre: "ShopyLibre: Diseño de packaging de diferentes productos",
    herramientas: "Adobe Illustrator, Adobe Photoshop",
    imagen: "/imagenes/shopylibre-miniatura.jpg",
    link: "/proyectos/shopylibre-otros-trabajos",
    especialidad: "disenio",
  },
  {
    nombre: "ShopyLibre: Packaging para la Afeitadora RollerShaver",
    herramientas: "Adobe Illustrator, Adobe Photoshop",
    imagen: "/imagenes/afeitadora-muckup.png",
    link: "/proyectos/packaging-rollershaver",
    especialidad: "disenio",
  },
  {
    nombre: "Diseño y Maquetación de Presentación Profesional",
    herramientas: "Microsoft Powerpoint",
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
  {
    nombre: "Visitá mi Repositorio de GitHub",
    herramientas: "GitHub",
    imagen: "/imagenes/github-miniatura.jpg",
    link: "https://github.com/MattiRuiz",
    especialidad: "programacion",
  },
  {
    nombre: "Diseños anteriores en Behance",
    herramientas: "Illustrator, Photoshop, Indesign, HTML, CSS, Bootstrap",
    imagen: "/imagenes/behance-miniatura.jpg",
    link: "https://www.behance.net/matias-ruiz",
    especialidad: "disenio",
  }
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

  const getBadgeCount = (lista : ProyectoData[], especialidad: string) : number =>{
    return lista.filter((item) => item.especialidad === especialidad).length;
  }

  return (
    <>
      <div className="mb-4 relative">
        <button
          className="bg-slate-950 border-b-slate-600 disabled:bg-slate-300 disabled:text-slate-950 px-3 py-2 font-semibold rounded-md me-2"
          onClick={() => setCategoria("programacion")}
          disabled={categoria === "programacion"}
        >
          Programación <span className="bg-red-600 text-white text-xs px-1.5 py-0.5 ms-1 rounded-full">{getBadgeCount(proyectos, 'programacion')}</span>
        </button>
        <button
          className="bg-slate-950 border-b-slate-600 disabled:bg-slate-300 disabled:text-slate-950 px-3 py-2 font-semibold rounded-md me-2"
          onClick={() => setCategoria("disenio")}
          disabled={categoria === "disenio"}
        >
          Diseño <span className="bg-red-600 text-white text-xs px-1.5 py-0.5 ms-1 rounded-full">{getBadgeCount(proyectos, 'disenio')}</span>
        </button>
        <div className="w-full h-px bg-white opacity-75 mt-2"></div>
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
      <div className="w-1/3 h-px bg-white opacity-75 mx-auto mt-8 flex justify-center items-center">
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>
    </>
  );
}

export default Proyectos;
