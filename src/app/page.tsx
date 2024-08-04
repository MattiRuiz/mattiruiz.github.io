/* eslint-disable react/no-unescaped-entities */

import { Proyectos, Habilidades, Hero } from "../components";
import { TituloHome, CardEspecialidades } from "../components/ui";

import { PiBezierCurveDuotone, PiAppWindowDuotone, PiBracketsCurlyDuotone } from "react-icons/pi";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="pb-4 mt-6 text-center w-full md:w-3/4 mx-auto" id="sobre-mi">
        <TituloHome>Sobre mi</TituloHome>
        <p className="">
          ¡Hola! Me llamo <strong>Matias</strong>, tengo 33 años y vivo en Rosario, Argentina. En el año 2019 me recibí
          de Licenciado en Diseño Gráfico en la <em>Universidad Abierta Interamericana</em> y en el 2023 de Técnico
          Universitario en Programación en la <em>Universidad Tecnológica de Rosario</em>. A partir del 2020 he tenido
          variados tipos de trabajos relacionados al diseño, la mayoría en la modalidad <em>freelance</em>, los cuales
          se encuentran expuestos en la sección de abajo, los más actuales, y en{" "}
          <a href="https://www.behance.net/matias-ruiz" className="font-bold text-white">
            Behance
          </a>{" "}
          los mas antiguos.
        </p>
        <p className="">
          Actualmente me encuentro trabajando de profesor de la materia "Tipografía y Entorno Digital" en la{" "}
          <em>Universidad del Gran Rosario</em>.
        </p>
        <div className="w-1/4 h-px bg-white opacity-75 mx-auto mt-8 flex justify-center items-center">
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-6">
        <CardEspecialidades
          nombre="Diseño de Comunicación Visual"
          descripcion="Comunicación institucional, diseño editorial, diseño de plantillas."
        >
          <PiBezierCurveDuotone />
        </CardEspecialidades>
        <CardEspecialidades
          nombre="Diseño de Interfaces"
          descripcion="Creación de maquetas, análisis visuales, testeo de uso."
        >
          <PiAppWindowDuotone />
        </CardEspecialidades>
        <CardEspecialidades
          nombre="Desarrollador"
          descripcion="Front-end avanzado, Back-end, APIrest y Base de datos intermedio. Facilidad de aprendizaje."
        >
          <PiBracketsCurlyDuotone />
        </CardEspecialidades>
      </div>
      <div className="pt-3">
        <h2 className="mb-2">Mis habilidades</h2>
        <Habilidades />
      </div>
      <div className="pt-10" id="mis-proyectos">
        <h2 className="mb-2">Mis proyectos</h2>
        <Proyectos />
      </div>
    </main>
  );
}
