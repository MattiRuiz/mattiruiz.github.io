/* eslint-disable react/no-unescaped-entities */

import { Proyectos, Habilidades, Hero } from "../components";
import { TituloHome } from "../components/ui";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="pb-4 mt-6 text-center w-full md:w-3/4 mx-auto" id="sobre-mi">
        <TituloHome>Sobre mi</TituloHome>
        <p className="text-sm sm:text-base">
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
        <p className="text-sm sm:text-base">
          Actualmente me encuentro trabajando de profesor de la materia "Tipografía y Entorno Digital" en la{" "}
          <em>Universidad del Gran Rosario</em>.
        </p>
        <div className="w-1/4 h-px bg-white opacity-75 mx-auto mt-8 flex justify-center items-center">
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>
      </div>
      <div className=" text-center py-5 mb-6 mt-6 bg-slate-800 border border-slate-700 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 divide-y md:divide-x md:divide-y-0 divide-dotted divide-slate-500">
          <div className="px-6 py-4">
            <p className="text-xl font-bold mb-2">Diseño de Comunicación Visual</p>
            <p className="mb-0">Comunicación institucional, diseño editorial, diseño de plantillas.</p>
          </div>
          <div className="px-6 py-4">
            <p className="text-xl font-bold mb-2">Diseño de Interfaces</p>
            <p className="mb-0">Creación de maquetas, análisis de webs, modificaciones, adaptaciones.</p>
          </div>
          <div className="px-6 py-4">
            <p className="text-xl font-bold mb-2">Programación</p>
            <p className="mb-0">Con conocimientos en varios lenguajes y facilidad de aprendizaje.</p>
          </div>
        </div>
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
