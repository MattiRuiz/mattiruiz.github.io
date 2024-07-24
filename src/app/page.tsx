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

import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

import Proyectos from "../components/Proyectos";

import tutesin from "../img/tutesin.jpg";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-center py-10">
          <div className="basis-1/5 me-10">
            <Image src={tutesin} alt="" className="rounded-full" />
          </div>
          <div>
            <p className="">Hola, soy</p>
            <h5 className="mb-1 font-semibold text-xl tracking-wide">
              Matias Ruiz
            </h5>
            <h1 className="text-5xl text-slate-400 tracking-tight">
              Lic. en Diseño Gráfico
            </h1>
            <h1 className="text-5xl text-slate-600 tracking-tight ">
              Tec. en Programación
            </h1>
            <button className="mt-5">Contacto</button>
          </div>
        </div>
        <div className=" text-center py-5  bg-slate-700">
          <h2 className="mb-4">Servicios</h2>
          <div className="grid grid-cols-3 gap-4 divide-x divide-dashed">
            <div className="px-10">
              <p className="text-xl font-bold mb-2">Diseño de interfaces</p>
              <p>
                Creación de maquetas, análisis de webs, modificaciones,
                adaptaciones.
              </p>
            </div>
            <div className="px-10">
              <p className="text-xl font-bold mb-2">
                Diseño de comunicación visual
              </p>
              <p>
                Comunicación institucional, diseño editorial, diseño de
                plantillas.
              </p>
            </div>
            <div className="px-10">
              <p className="text-xl font-bold mb-2">Programación front-end</p>
              <p>
                Con conocimientos en HTML/CSS, Reactjs, Nextjs, Bootstrap,
                Tailwindcss.
              </p>
            </div>
          </div>
        </div>
        <div className="pb-3 pt-6 text-center w-2/3 mx-auto">
          <h3 className="mb-4">Sobre mi</h3>
          <p>
            ¡Hola! Me llamo Matias, tengo 33 años y vivo en Rosario, Argentina.
            En el año 2019 me recibí de Licenciado en Diseño Gráfico en la
            Universidad Abierta Interamericana y en el 2023 de Técnico
            Universitario en Programación en la Universidad Tecnológica de
            Rosario. A partir de recibirme de Diseñador he tenido variopintos
            tipos de trabajos, la mayoría de manera Freelance, los cuales se
            encuentran expuestos en la sección de abajo los más actuales y en{" "}
            <a href="#" className="font-bold">
              Behance
            </a>{" "}
            los mas antiguos. Actualmente me encuentro trabajando de profesor de
            la materia "Tipografía y entorno digital" en la Universidad del Gran
            Rosario.
          </p>
        </div>
        <div className="my-3">
          <h3 className="text-center mb-4">Habilidades</h3>
          <div className="mt-4 flex justify-center gap-4">
            <div className="bg-slate-100 rounded shadow text-slate-950 p-5 inline-block">
              <h4>Programación</h4>
              <p className="mb-2">Avanzado</p>
              <div className="flex">
                <div className="flex flex-col items-center mx-2">
                  <SiHtml5 className="text-3xl text-orange-500 mb-0.5" />
                  <p className="text-sm font-bold">HTML</p>
                </div>
                <div className="flex flex-col items-center mx-2">
                  <SiCss3 className="text-3xl text-blue-500 mb-0.5" />
                  <p className="text-sm font-bold">CSS</p>
                </div>
                <div className="flex flex-col items-center mx-2">
                  <SiReact className="text-3xl text-sky-500 mb-0.5" />
                  <p className="text-sm font-bold">React.js</p>
                </div>
                <div className="flex flex-col items-center mx-2">
                  <SiBootstrap className="text-3xl text-purple-500 mb-0.5" />
                  <p className="text-sm font-bold">Bootstrap</p>
                </div>
                <div className="flex flex-col items-center mx-2">
                  <SiWordpress className="text-3xl text-blue-500 mb-0.5" />
                  <p className="text-sm font-bold">Wordpress</p>
                </div>
              </div>
              <p className="mt-3 mb-2">Intermedio</p>
              <div className="flex">
                <div className="flex flex-col items-center mx-2">
                  <SiNodedotjs className="text-3xl text-green-500 mb-0.5" />
                  <p className="text-sm font-bold">Node.js</p>
                </div>
                <div className="flex flex-col items-center mx-2">
                  <SiNextdotjs className="text-3xl text-gray-400 mb-0.5" />
                  <p className="text-sm font-bold">Next.js</p>
                </div>
                <div className="flex flex-col items-center mx-2">
                  <SiTailwindcss className="text-3xl text-sky-500 mb-0.5" />
                  <p className="text-sm font-bold">Tailwindcss</p>
                </div>
                <div className="flex flex-col items-center mx-2">
                  <SiGithub className="text-3xl text-gray-100 mb-0.5" />
                  <p className="text-sm font-bold">Github</p>
                </div>
                <div className="flex flex-col items-center mx-2">
                  <SiMysql className="text-3xl text-orange-500 mb-0.5" />
                  <p className="text-sm font-bold">MySQL</p>
                </div>
                <div className="flex flex-col items-center mx-2">
                  <SiPrisma className="text-3xl text-blue-600 mb-0.5" />
                  <p className="text-sm font-bold">Prisma</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 rounded shadow text-slate-950 p-5 inline-block">
              <h4>Diseño</h4>
              <p className="mb-2">Avanzado</p>
              <div className="flex">
                <div className="flex flex-col items-center mx-2">
                  <SiFigma className="text-3xl text-red-500 mb-0.5" />
                  <p className="text-sm font-bold">Figma</p>
                </div>
                <div className="flex flex-col items-center mx-2">
                  <SiAdobeillustrator className="text-3xl text-yellow-500 mb-0.5" />
                  <p className="text-sm font-bold">Illustrator</p>
                </div>
                <div className="flex flex-col items-center mx-2">
                  <SiAdobephotoshop className="text-3xl text-blue-500 mb-0.5" />
                  <p className="text-sm font-bold">Photoshop</p>
                </div>
                <div className="flex flex-col items-center mx-2">
                  <SiAdobeindesign className="text-3xl text-fuchsia-500 mb-0.5" />
                  <p className="text-sm font-bold">Indesign</p>
                </div>
              </div>
              <p className="mt-3 mb-2">Intemedio</p>
              <div className="flex">
                <div className="flex flex-col items-center mx-2">
                  <SiAdobepremierepro className="text-3xl text-red-500 mb-0.5" />
                  <p className="text-sm font-bold">Premiere</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/3 mx-auto mt-3">
            <p className="text-sm text-center">
              <strong>Otras habilidades:</strong> Comerciales (12 años en
              atención al cliente), enseñanza (1,5 años de profesor
              universitario), Inglés (nivél intermedio). Especialización en
              Tipografía y Ortotipografía.
            </p>
          </div>
        </div>

        <div className="py-10">
          <h3 className="mb-4 text-center">Mis proyectos</h3>
          <Proyectos />
        </div>
        <div className="bg-slate-600 mb-10 px-5 py-10 flex flex-row justify-center">
          <div className="basis-1/2">
            <h2>Trabajemos juntos</h2>
            <p>Envíame un mensaje y responderé a la brevedad</p>
            <button className="flex items-center bg-slate-900 hover:bg-slate-800 py-2 px-3 rounded-full mt-3">
              <FaWhatsapp className="me-1 text-xl" /> Escribime por Whatsapp
            </button>
          </div>
          <form className="basis-1/2 md:basis-1/3 px-5">
            <input
              type="text"
              placeholder="Nombre"
              className="mb-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
            />
            <input
              type="text"
              placeholder="Email"
              className="mb-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
            />
            <button className="px-3 py-2 bg-slate-900 ">Enviar</button>
          </form>
        </div>
      </div>
    </main>
  );
}
