/* eslint-disable react/no-unescaped-entities */

import { Proyectos, Habilidades, Hero } from "../components";
import { TituloHome, CardEspecialidades } from "../components/ui";

import {
  PiBezierCurveDuotone,
  PiAppWindowDuotone,
  PiBracketsCurlyDuotone,
} from "react-icons/pi";

export default function Home() {
  return (
    <main>
      <Hero />
      <div
        className="pb-4 mt-6 text-center w-full md:w-3/4 mx-auto"
        id="sobre-mi"
      >
        <TituloHome>Sobre mi</TituloHome>
        <p className="">
          ¡Hola! Soy Matias, tengo 35 años y vivo en Rosario, Argentina. Soy{" "}
          <strong>Licenciado en Diseño Gráfico</strong> (Universidad Abierta
          Interamericana, 2019) y{" "}
          <strong>Técnico Universitario en Programación</strong> (Universidad
          Tecnológica Nacional, 2023). Desde 2020 trabajo en proyectos
          vinculados al diseño y al desarrollo web, tanto de forma independiente
          como en colaboración con otros profesionales. En este portfolio
          comparto una selección de esos trabajos, que también podés ver en mis
          perfiles de{" "}
          <a href="https://www.behance.net/matias-ruiz" target="_blank">
            Behance
          </a>{" "}
          y{" "}
          <a href="https://github.com/MattiRuiz" target="_blank">
            GitHub
          </a>
          .
        </p>
        <p>
          Desde comienzos de 2023 me desempeño como{" "}
          <strong>profesor titular</strong> de la materia{" "}
          <em>Tipografía y Entorno Digital</em> en el CCC de Licenciatura en
          Diseño de Comunicación Visual de la{" "}
          <strong>Universidad del Gran Rosario</strong>. Además, desde agosto de
          2025 soy <strong>profesor</strong> de la materia{" "}
          <em>Programación II</em> en la Tecnicatura Universitaria en
          Programación de la <strong>Universidad Tecnológica Nacional</strong>.
        </p>
        <div className="w-1/3 h-px bg-white opacity-75 mx-auto mt-8 flex justify-center items-center">
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-6">
        <CardEspecialidades
          nombre="Diseño de Comunicación Visual"
          descripcion="Comunicación institucional · Diseño editorial · Desarrollo de plantillas visuales"
        >
          <PiBezierCurveDuotone />
        </CardEspecialidades>
        <CardEspecialidades
          nombre="Diseño de Interfaces"
          descripcion="Prototipado · Análisis visual · Testeo de usabilidad"
        >
          <PiAppWindowDuotone />
        </CardEspecialidades>
        <CardEspecialidades
          nombre="Desarrollador"
          descripcion="Front-end avanzado · Back-end y APIs REST intermedios · Manejo de bases de datos"
        >
          <PiBracketsCurlyDuotone />
        </CardEspecialidades>
      </div>
      <div className="pt-4 pb-5" id="habilidades">
        <h2 className="mb-2">Habilidades</h2>
        <h4>Desarrollo y Programación</h4>
        <Habilidades />
      </div>
      <div className="pt-4" id="mis-proyectos">
        <h2 className="mb-2">Proyectos</h2>
        <Proyectos />
      </div>
    </main>
  );
}
