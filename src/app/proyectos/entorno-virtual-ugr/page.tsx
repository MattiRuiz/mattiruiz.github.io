import Link from "next/link";
import Image from "next/image";

import { HeaderProyecto, TituloHome } from "@/components/ui";
import LayoutProyecto from "../LayoutProyecto";

function UGRVirtual() {
  return (
    <LayoutProyecto>
      <HeaderProyecto
        herramientas="Moodle, CSS, Figma"
        titulo="Rediseño del Entorno Virtual de la Universidad del Gran Rosario"
        estado="Activo (requiere acceso institucional)"
        color="green"
        link="https://virtual.ugr.edu.ar/"
      >
        <Image
          src="/imagenes/ugr-celular.jpg"
          alt=""
          width={400}
          height={700}
        />
      </HeaderProyecto>
      <p>
        La{" "}
        <Link href="https://ugr.edu.ar/" target="_blank">
          Universidad del Gran Rosario
        </Link>
        , con sede central en Corrientes 1254 (Rosario, Santa Fe), utiliza una
        plataforma educativa basada en <em>Moodle</em> para impartir clases
        sincrónicas y asincrónicas, tanto a estudiantes de Argentina como de
        Ecuador. Además, funciona como soporte para las clases presenciales,
        brindando acceso a materiales, entregas y recursos académicos
      </p>
      <p>
        Durante el receso de verano de 2024, llevamos a cabo un proceso de
        rediseño completo de la interfaz del entorno virtual. Este trabajo se
        extendió por tres meses e incluyó:
      </p>
      <h4 className="mt-6">Investigación y diagnóstico</h4>
      <p>
        Comenzamos con una auditoría detallada del estado actual de la interfaz,
        identificando problemas de usabilidad, redundancia de elementos, falta
        de jerarquía visual y deficiencias en la experiencia mobile.
      </p>
      <h4 className="mt-6">Propuesta e implementación</h4>
      <p>
        Una vez aprobado el nuevo diseño —centrado en el usuario prin cipal: el
        estudiante—, se implementaron los cambios exclusivamente mediante CSS
        personalizado, debido alas restricciones propias de Moodle. Se
        estandarizaron márgenes, tipografías, botones y otros componentes para
        unificar criterios visuales y mejorar la legibilidad.
      </p>
      <div className="mt-8">
        <TituloHome>Cambios destacados</TituloHome>
      </div>
      <h4 className="mt-6">Header</h4>
      <p>
        Se reemplazó el logotipo por una versión institucional, especialmente
        adaptada para su uso en el entorno virtual. Además, se reorganizó la
        navegación, reduciendo tres barras superpuestas a solo dos, priorizando
        así los accesos realmente útiles tanto para alumnos como para docentes.
      </p>
      <Image
        src="/imagenes/ugr-header-antes.jpg"
        alt=""
        width={1000}
        height={500}
        className="w-full mb-2"
      />
      <Image
        src="/imagenes/ugr-header-despues.jpg"
        alt=""
        width={1000}
        height={500}
        className="w-full mb-2"
      />

      <h4 className="mt-6">Footer</h4>
      <p>
        En el pie de página se incorporó el logo institucional con un acceso
        directo a la página de inicio. Se reorganizó el contenido aplicando
        jerarquías visuales claras y se agregaron íconos que mejoran la lectura
        rápida de los elementos. También se trabajó en su adaptabilidad:
        mientras que anteriormente el footer se ocultaba en dispositivos
        móviles, ahora cuenta con un diseño completamente responsive.
      </p>
      <div className="inline md:flex gap-x-4 flex-row">
        <div className="basis-1/2">
          <Image
            src="/imagenes/ugr-footer-antes.jpg"
            alt=""
            width={1000}
            height={500}
            className="w-full mb-2"
          />
        </div>
        <div className="basis-1/2">
          <Image
            src="/imagenes/ugr-footer-despues.jpg"
            alt=""
            width={1000}
            height={500}
            className="w-full mb-2"
          />
        </div>
      </div>

      <h4 className="mt-6">Página de inicio</h4>
      <p>
        En la página de inicio se eliminaron accesos que solo eran relevantes
        para administradores y moderadores. Los accesos generales se organizaron
        en un menú desplegable, y las imágenes publicitarias —que anteriormente
        replicaban contenido de Instagram— fueron reemplazadas por un carrusel
        institucional más sobrio. Se priorizó el acceso directo a las aulas en
        las que el usuario está matriculado, mejorando la eficiencia de la
        navegación.
      </p>
      <div className="inline md:flex gap-x-4 flex-row">
        <div className="basis-1/2">
          <Image
            src="/imagenes/ugr-portada-antes.png"
            alt=""
            width={1000}
            height={500}
            className="w-full mb-2"
          />
        </div>
        <div className="basis-1/2">
          <Image
            src="/imagenes/ugr-portada-despues.png"
            alt=""
            width={1000}
            height={500}
            className="w-full mb-2"
          />
        </div>
      </div>
      <h4 className="mt-6">Chat</h4>
      <p>
        Se aplicó la nueva paleta de estilos para unificar visualmente el
        entorno. Dentro del chat general, se reorganizaron el buscador y las
        opciones para ubicarlos en una sola línea, optimizando el espacio. En la
        vista de conversación, se eliminó la repetición de nombres y avatares en
        cada mensaje, reduciendo la saturación visual y mejorando la legibilidad
        general
      </p>
      <div className="flex gap-x-4 flex-row">
        <div className="basis-1/4">
          <Image
            src="/imagenes/ugr-chat-general-antes.jpg"
            alt=""
            width={1000}
            height={500}
            className="w-full mb-2"
          />
        </div>

        <div className="basis-1/4">
          <Image
            src="/imagenes/ugr-chat-individual-antes.jpg"
            alt=""
            width={1000}
            height={500}
            className="w-full mb-2"
          />
        </div>
        <div className="basis-1/4">
          <Image
            src="/imagenes/ugr-chat-general-despues.jpg"
            alt=""
            width={1000}
            height={500}
            className="w-full mb-2"
          />
        </div>
        <div className="basis-1/4">
          <Image
            src="/imagenes/ugr-chat-individual-despues.jpg"
            alt=""
            width={1000}
            height={500}
            className="w-full mb-2"
          />
        </div>
      </div>
    </LayoutProyecto>
  );
}

export default UGRVirtual;
