"use client";
import { useState } from "react";

import CardProyecto from "./CardProyecto";

const data = [
  {
    nombre: "App Web: Catálogo Marca Blanca",
    herramientas: "React.js, Bootstrap, Figma",
    imagen: "/imagenes/catalogo.jpg",
    link: "/programacion/catalogo-marca-blanca",
    especialidad: "programacion",
  },
  {
    nombre: "Rediseño del Entorno Virtual de la Universidad del Gran Rosario",
    herramientas: "Moodle, CSS, Figma",
    imagen: "/imagenes/UGR-entornovirtual.jpg",
    link: "/programacion/entorno-virtual-ugr",
    especialidad: "programacion",
  },
  {
    nombre: "Rediseño y administración del sitio de booking: Medanos Patagonia",
    herramientas: "Wordpress, CSS",
    imagen: "/imagenes/medanos-patagonia.jpg",
    link: "/programacion/medanos-patagonia",
    especialidad: "programacion",
  },
  {
    nombre: "ShopyLibre: otros trabajos",
    herramientas: "Adobe Illustrator, Adobe Photoshop",
    imagen: "/imagenes/shopylibre-miniatura.jpg",
    link: "/disenio/shopylibre-otros-trabajos",
    especialidad: "disenio",
  },
  {
    nombre: "Packaging para la Afeitadora RollerShaver",
    herramientas: "Adobe Illustrator, Adobe Photoshop",
    imagen: "/imagenes/afeitadora-muckup.png",
    link: "/disenio/packaging-rollershaver",
    especialidad: "disenio",
  },
  {
    nombre: "Diseño y Maquetación de Presentación Profesional",
    herramientas: "Powerpoint",
    imagen: "/imagenes/05-despues.jpg",
    link: "/disenio/maquetacion-en-powerpoint",
    especialidad: "disenio",
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </>
  );
}

export default Proyectos;
