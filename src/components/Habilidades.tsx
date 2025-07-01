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
  SiTypescript,
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
        <h6 className="italic font-light">
          Avanzado:
        </h6>
        <div className="mx-auto mt-3 mb-3 grid grid-cols-4 items-center gap-x-6 gap-y-6 sm:grid-cols-6 sm:gap-x-6 lg:mx-0 lg:grid-cols-6">
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
          <CardHabilidad nombre="WordPress">
            <SiWordpress className="text-4xl text-blue-500 mb-0.5" />
          </CardHabilidad>
        </div>
      </div>
      <div className="mx-auto">
        <h6 className="italic font-light">
          Intermedio:
        </h6>
        <div className="mx-auto mt-3 mb-6 grid grid-cols-4 items-center gap-x-6 gap-y-6 sm:grid-cols-6 sm:gap-x-6 lg:mx-0 lg:grid-cols-6">
          <CardHabilidad nombre="Node.js">
            <SiNodedotjs className="text-4xl text-green-500 mb-0.5" />
          </CardHabilidad>
          <CardHabilidad nombre="Next.js">
            <SiNextdotjs className="text-4xl text-gray-400 mb-0.5" />
          </CardHabilidad>
          <CardHabilidad nombre="Tailwind CSS">
            <SiTailwindcss className="text-4xl text-sky-500 mb-0.5" />
          </CardHabilidad>
          <CardHabilidad nombre="MySQL">
            <SiMysql className="text-4xl text-orange-500 mb-0.5" />
          </CardHabilidad>
          <CardHabilidad nombre="TypeScript">
            <SiTypescript className="text-4xl text-blue-500 mb-0.5" />
          </CardHabilidad>
          <CardHabilidad nombre="GitHub">
            <SiGithub className="text-4xl text-gray-300 mb-0.5" />
          </CardHabilidad>
        </div>
      </div>
      <div className="mx-auto">
        <h4 className="font-bold">Diseño y Herramientas Visuales</h4>
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
        <h4 className="font-bold">Otras competencias</h4>
        <ul>
          <li className="mb-2"><strong>Experiencia comercial:</strong> 12 años como empleado de comercio, con funciones de atención al cliente y gestión como encargado.</li>
          <li className="mb-2"><strong>Docencia:</strong> Profesor universitario titular desde 2023. Ayudante de cátedra de la materia Tipografía durante dos años (UAI, 2018-2019).</li>
          <li className="mb-2"><strong>Inglés:</strong> Buen nivel de comprensión auditiva y lectora. Expresión escrita y conversacional en nivel intermedio.</li>
          <li className="mb-2"><strong>Tipografía:</strong> Conocimientos avanzados en tipografía y ortotipografía, tanto en su aplicación tradicional como en entornos digitales.</li>
          <li className="mb-2"><strong>Metodologías de trabajo:</strong> Experiencia en metodologías ágiles, adaptabilidad a equipos interdisciplinarios.</li>
        </ul>
      </div>
    </div>
  );
}
