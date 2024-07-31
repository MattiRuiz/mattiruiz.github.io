/* eslint-disable react/no-unescaped-entities */
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiBootstrap,
  SiNodedotjs,
  SiTailwindcss,
  SiWordpress,
  SiNextdotjs,
  SiGithub,
  SiMysql,
  SiPrisma,
  SiFigma,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAdobepremierepro,
} from "react-icons/si";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import Proyectos from "../components/Proyectos";
import BloqueContacto from "../components/BloqueContacto";

import tutesin from "../img/tutesin.jpg";

export default function Home() {
  return (
    <main>
      <div className="inline-block md:flex flex-row gap-10 items-center justify-center pb-10">
        <div className="w-1/2 mx-auto md:mx-0 md:basis-1/5 mb-5">
          <Image src={tutesin} alt="" className="rounded-full" />
        </div>
        <div className="text-center md:text-left">
          <h5 className="mb-0 text-xl tracking-wide">
            Hola, soy <strong>Matias Ruiz</strong>
          </h5>
          <h1 className="text-5xl text-slate-400 tracking-tight font-semibold">Lic. en Diseño Gráfico</h1>
          <h1 className="text-5xl text-slate-600 tracking-tight font-semibold">Tec. en Programación</h1>
          <Link href="/#contacto" className="mt-5 inline-block">
            <button>Contacto</button>
          </Link>
        </div>
      </div>
      <div className=" text-center py-5  bg-slate-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 divide-y md:divide-x md:divide-y-0 divide-dotted divide-slate-500">
          <div className="px-6 py-4">
            <p className="text-xl font-bold mb-2">Diseño de interfaces</p>
            <p className="mb-0">Creación de maquetas, análisis de webs, modificaciones, adaptaciones.</p>
          </div>
          <div className="px-6 py-4">
            <p className="text-xl font-bold mb-2">Diseño de comunicación visual</p>
            <p className="mb-0">Comunicación institucional, diseño editorial, diseño de plantillas.</p>
          </div>
          <div className="px-6 py-4">
            <p className="text-xl font-bold mb-2">Programación</p>
            <p className="mb-0">Con conocimientos en varios lenguajes y facilidad de aprendizaje.</p>
          </div>
        </div>
      </div>
      <div className="pb-3 pt-6 text-center w-full md:w-3/4 mx-auto" id="sobre-mi">
        <h2 className="mb-4">Sobre mi</h2>
        <p>
          ¡Hola! Me llamo Matias, tengo 33 años y vivo en Rosario, Argentina. En el año 2019 me recibí de Licenciado en
          Diseño Gráfico en la Universidad Abierta Interamericana y en el 2023 de Técnico Universitario en Programación
          en la Universidad Tecnológica de Rosario. A partir de recibirme de Diseñador he tenido variados tipos de
          trabajos, la mayoría de manera Freelance, los cuales se encuentran expuestos en la sección de abajo los más
          actuales y en{" "}
          <a href="#" className="font-bold">
            Behance
          </a>{" "}
          los mas antiguos. Actualmente me encuentro trabajando de profesor de la materia "Tipografía y entorno digital"
          en la Universidad del Gran Rosario.
        </p>
      </div>
      <div className="my-3 text-center">
        <h2 className="text-center mb-2">Mis habilidades</h2>
        <h3 className="mb-2">Programación</h3>
        <h5 className="mb-2 font-normal">Avanzado</h5>
        <div className="flex gap-2 justify-center">
          <div className="bg-slate-700 rounded-md w-28 h-28 p-2 flex flex-col items-center justify-center">
            <SiHtml5 className="text-4xl text-orange-500 mb-0.5" />
            <p className="font-semibold mb-0">HTML</p>
          </div>
          <div className="bg-slate-700 rounded-md w-28 h-28 p-2 flex flex-col items-center justify-center">
            <SiCss3 className="text-4xl text-blue-500 mb-0.5" />
            <p className="font-semibold mb-0">CSS</p>
          </div>
          <div className="bg-slate-700 rounded-md w-28 h-28 p-2 flex flex-col items-center justify-center">
            <SiReact className="text-4xl text-sky-500 mb-0.5" />
            <p className="font-semibold mb-0">React.js</p>
          </div>
          <div className="bg-slate-700 rounded-md w-28 h-28 p-2 flex flex-col items-center justify-center">
            <SiBootstrap className="text-4xl text-purple-500 mb-0.5" />
            <p className="font-semibold mb-0">Bootstrap</p>
          </div>
          <div className="bg-slate-700 rounded-md w-28 h-28 p-2 flex flex-col items-center justify-center">
            <SiWordpress className="text-4xl text-blue-500 mb-0.5" />
            <p className="font-semibold mb-0">Wordpress</p>
          </div>
        </div>
        <h5 className="mt-3 mb-2 font-normal">Intermedio</h5>
        <div className="flex gap-2 justify-center">
          <div className="bg-slate-700 rounded-md w-28 h-28 p-2 flex flex-col items-center justify-center">
            <SiNodedotjs className="text-4xl text-green-500 mb-0.5" />
            <p className="font-semibold mb-0">Node.js</p>
          </div>
          <div className="bg-slate-700 rounded-md w-28 h-28 p-2 flex flex-col items-center justify-center">
            <SiNextdotjs className="text-4xl text-gray-400 mb-0.5" />
            <p className="font-semibold mb-0">Next.js</p>
          </div>
          <div className="bg-slate-700 rounded-md w-28 h-28 p-2 flex flex-col items-center justify-center">
            <SiTailwindcss className="text-4xl text-sky-500 mb-0.5" />
            <p className="font-semibold mb-0">Tailwindcss</p>
          </div>
          <div className="bg-slate-700 rounded-md w-28 h-28 p-2 flex flex-col items-center justify-center">
            <SiMysql className="text-4xl text-orange-500 mb-0.5" />
            <p className="font-semibold mb-0">MySQL</p>
          </div>
          <div className="bg-slate-700 rounded-md w-28 h-28 p-2 flex flex-col items-center justify-center">
            <SiPrisma className="text-4xl text-blue-500 mb-0.5" />
            <p className="font-semibold mb-0">Prisma</p>
          </div>
          <div className="bg-slate-700 rounded-md w-28 h-28 p-2 flex flex-col items-center justify-center">
            <SiGithub className="text-4xl text-gray-300 mb-0.5" />
            <p className="font-semibold mb-0">Github</p>
          </div>
        </div>
        <h3 className="mb-2 mt-6">Diseño</h3>
        <div className="flex gap-2 justify-center">
          <div className="bg-slate-700 rounded-md w-28 h-28 p-2 flex flex-col items-center justify-center">
            <SiFigma className="text-4xl text-red-500 mb-0.5" />
            <p className="font-semibold mb-0">Figma</p>
          </div>
          <div className="bg-slate-700 rounded-md w-28 h-28 p-2 flex flex-col items-center justify-center">
            <SiAdobeillustrator className="text-4xl text-yellow-400 mb-0.5" />
            <p className="font-semibold mb-0">Illustrator</p>
          </div>
          <div className="bg-slate-700 rounded-md w-28 h-28 p-2 flex flex-col items-center justify-center">
            <SiAdobephotoshop className="text-4xl text-blue-500 mb-0.5" />
            <p className="font-semibold mb-0">Photoshop</p>
          </div>
          <div className="bg-slate-700 rounded-md w-28 h-28 p-2 flex flex-col items-center justify-center">
            <SiAdobeindesign className="text-4xl text-fuchsia-400 mb-0.5" />
            <p className="font-semibold mb-0">Indesign</p>
          </div>
          <div className="bg-slate-700 rounded-md w-28 h-28 p-2 flex flex-col items-center justify-center">
            <SiAdobepremierepro className="text-4xl text-red-400 mb-0.5" />
            <p className="font-semibold mb-0">Premiere</p>
          </div>
        </div>
      </div>
      <div className="pt-3">
        <div className="w-full md:w-2/3 mx-auto">
          <p className="text-center">
            <strong>Otras habilidades:</strong> Comerciales (12 años en atención al cliente), enseñanza (1,5 años de
            profesor universitario), Inglés (nivel intermedio). Implementación de metodologías ágiles. Especialización
            en Tipografía y Ortotipografía.
          </p>
        </div>
      </div>

      <div className="py-6" id="mis-proyectos">
        <h2 className="mb-4 text-center">Mis proyectos</h2>
        <Proyectos />
      </div>
    </main>
  );
}
