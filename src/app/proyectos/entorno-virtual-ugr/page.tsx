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
        estado="Activo (se requiere acceso)"
        color="green"
        link="https://virtual.ugr.edu.ar/"
      >
        <Image src="/imagenes/ugr-celular.jpg" alt="" width={400} height={700} />
      </HeaderProyecto>
      <p>
        La{" "}
        <Link href="https://ugr.edu.ar/" target="_blank">
          Universidad del Gran Rosario
        </Link>
        , con sede central en Corrientes 1254, Rosario - Santa Fe, utiliza un entorno virtual basado en Moodle. Esta
        plataforma es empleada tanto para impartir clases online, de manera sincrónica y asincrónica, a estudiantes de
        Argentina y Ecuador, como para proporcionar material adicional a las clases presenciales.
      </p>
      <p>
        Durante el receso de verano de 2024, se llevó a cabo un proceso de rediseño de la interfaz de Moodle, que se
        extendió por tres meses. En esta fase, se realizó una investigación exhaustiva para identificar las falencias y
        problemáticas de la interfaz actual. Posteriormente, se propuso un nuevo diseño centrado en el usuario
        principal: el alumno. Una vez aprobado, se implementaron los cambios utilizando únicamente CSS, estandarizando
        los espaciados y los estilos de los componentes, respetando las limitaciones del propio Moodle.
      </p>
      <p>
        Dado que no puedo proporcionar acceso directo sin una cuenta de alumno, voy a incluir varias imagenes para
        explicar algunas de los decisiones visuales aplicadas. Estas imágenes mostrarán las mejoras en la navegación, la
        legibilidad y la estética general de la plataforma.
      </p>
      <div className="mt-8">
        <TituloHome>Antes y después</TituloHome>
      </div>
      <h5>Header</h5>
      <p>
        El logo del header no respondía a la imagen institucional, por lo que se creó una variable adaptada al entorno
        virtual.
      </p>
      <p>
        Se unificaron las barras de navegación de 3 a 2, dejando únicamente los accesos y las funcionalidades relevantes
        tanto para alumnos como para profesores.
      </p>
      <Image src="/imagenes/ugr-header-antes.jpg" alt="" width={1000} height={500} className="w-full mb-2" />
      <Image src="/imagenes/ugr-header-despues.jpg" alt="" width={1000} height={500} className="w-full mb-2" />

      <h5 className="mt-8">Footer</h5>
      <p>
        Se agregó el logo con un atajo a la página de inicio. Se administraron mejor los espacios entre elementos,
        dándoles jerarquías claras para organizar mejor la información y se utilizaron íconos para facilitar su lectura
        rápida.
      </p>
      <p>
        Además, se implementó un diseño responsivo para que el footer se muestre adecuadamente en dispositivos móviles,
        ya que anteriormente lo ocultaban.
      </p>
      <div className="inline md:flex gap-x-4 flex-row">
        <div className="basis-1/2">
          <Image src="/imagenes/ugr-footer-antes.jpg" alt="" width={1000} height={500} className="w-full mb-2" />
        </div>
        <div className="basis-1/2">
          <Image src="/imagenes/ugr-footer-despues.jpg" alt="" width={1000} height={500} className="w-full mb-2" />
        </div>
      </div>

      <h5 className="mt-8">Portada</h5>
      <p>
        Se eliminaron accesos directos que solo servían para administradores y moderadores. Los accesos generales se
        colocaron en un menú desplegable y las imagenes publicitarias se limitaron a un carrusel (anteriormente se
        utilizaban las mismas imágenes que en Instagram). Se dio prioridad a los accesos a las aulas matriculadas.
      </p>
      <div className="inline md:flex gap-x-4 flex-row">
        <div className="basis-1/2">
          <Image src="/imagenes/ugr-portada-antes.png" alt="" width={1000} height={500} className="w-full mb-2" />
        </div>
        <div className="basis-1/2">
          <Image src="/imagenes/ugr-portada-despues.png" alt="" width={1000} height={500} className="w-full mb-2" />
        </div>
      </div>
      <h5 className="mt-8">Chat</h5>
      <p>
        Se unificaron los criterios visuales con la paleta de estilo. En el chat general se pudo colocar el input de
        búsqueda y las otras opciones en una sola línea. En el interior del mensaje se eliminó el nombre y el avatar de
        cada mensaje para evitar la redundancia de información.
      </p>
      <div className="flex gap-x-4 flex-row">
        <div className="basis-1/4">
          <Image src="/imagenes/ugr-chat-general-antes.jpg" alt="" width={1000} height={500} className="w-full mb-2" />
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
            src="/imagenes/ugr-chat-individual-antes.jpg"
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
