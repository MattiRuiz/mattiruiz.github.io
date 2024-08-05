import { CardHabilidad } from "../components/ui";

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

export function Habilidades() {
  return (
    <div className="">
      <div className="mx-auto">
        <h4 className="font-bold">
          Programación: <span className="font-normal">Avanzado</span>
        </h4>
        <div className="mx-auto mt-3 mb-6 grid grid-cols-4 items-center gap-x-6 gap-y-6 sm:grid-cols-6 sm:gap-x-6 lg:mx-0 lg:grid-cols-6">
          <CardHabilidad nombre="HTML">
            <SiHtml5 className="text-4xl text-orange-500 mb-0.5" />
          </CardHabilidad>
          <CardHabilidad nombre="CSS">
            <SiCss3 className="text-4xl text-blue-500 mb-0.5" />
          </CardHabilidad>
          <CardHabilidad nombre="React.js">
            <SiReact className="text-4xl text-sky-500 mb-0.5" />
          </CardHabilidad>
          <CardHabilidad nombre="Bootstrap">
            <SiBootstrap className="text-4xl text-purple-500 mb-0.5" />
          </CardHabilidad>
          <CardHabilidad nombre="Wordpress">
            <SiWordpress className="text-4xl text-blue-500 mb-0.5" />
          </CardHabilidad>
        </div>
      </div>
      <div className="mx-auto">
        <h4 className="font-bold">
          Programación: <span className="font-normal">Intermedio</span>
        </h4>
        <div className="mx-auto mt-3 mb-6 grid grid-cols-4 items-center gap-x-6 gap-y-6 sm:grid-cols-6 sm:gap-x-6 lg:mx-0 lg:grid-cols-6">
          <CardHabilidad nombre="Node.js">
            <SiNodedotjs className="text-4xl text-green-500 mb-0.5" />
          </CardHabilidad>
          <CardHabilidad nombre="Next.js">
            <SiNextdotjs className="text-4xl text-gray-400 mb-0.5" />
          </CardHabilidad>
          <CardHabilidad nombre="Tailwindcss">
            <SiTailwindcss className="text-4xl text-sky-500 mb-0.5" />
          </CardHabilidad>
          <CardHabilidad nombre="MySQL">
            <SiMysql className="text-4xl text-orange-500 mb-0.5" />
          </CardHabilidad>
          <CardHabilidad nombre="Prisma">
            <SiPrisma className="text-4xl text-blue-500 mb-0.5" />
          </CardHabilidad>
          <CardHabilidad nombre="Github">
            <SiGithub className="text-4xl text-gray-300 mb-0.5" />
          </CardHabilidad>
        </div>
      </div>
      <div className="mx-auto">
        <h4 className="font-bold">Diseño:</h4>
        <div className="mx-auto mt-3 mb-6 grid grid-cols-4 items-center gap-x-6 gap-y-6 sm:grid-cols-6 sm:gap-x-6 lg:mx-0 lg:grid-cols-6">
          <CardHabilidad nombre="Figma">
            <SiFigma className="text-4xl text-red-500 mb-0.5" />
          </CardHabilidad>
          <CardHabilidad nombre="Illustrator">
            <SiAdobeillustrator className="text-4xl text-yellow-400 mb-0.5" />
          </CardHabilidad>
          <CardHabilidad nombre="Photoshop">
            <SiAdobephotoshop className="text-4xl text-blue-500 mb-0.5" />
          </CardHabilidad>
          <CardHabilidad nombre="Indesign">
            <SiAdobeindesign className="text-4xl text-fuchsia-400 mb-0.5" />
          </CardHabilidad>
          <CardHabilidad nombre="Premiere">
            <SiAdobepremierepro className="text-4xl text-red-400 mb-0.5" />
          </CardHabilidad>
        </div>
      </div>
      <div className="w-full mx-auto">
        <h4 className="font-bold">Otras habilidades:</h4>
        <p>
          <strong>Comerciales:</strong> 12 años como empleado de comercio / encargado. <strong>Enseñanza:</strong> 1,5
          año como profesor universitario y 2 años como ayudante de cátedra. <strong>Inglés:</strong> Nivel intermedio.{" "}
          <strong>Tipografía:</strong> Conocimientos avanzados en Tipografía y Ortotipografía.{" "}
          <strong>Metodologías de trabajo:</strong> Experiencia en Metodologías Ágiles.
        </p>
      </div>
    </div>
  );
}
