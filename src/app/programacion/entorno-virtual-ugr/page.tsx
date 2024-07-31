import Link from "next/link";
import Image from "next/image";

import { PiArrowCircleLeftDuotone } from "react-icons/pi";

function UGRVirtual() {
  return (
    <div className="mx-auto">
      <div className="flex flex-grow mb-6 gap-x-6 items-center border rounded">
        <div>
          <Image src="/imagenes/ugr-celular.jpg" alt="" width={400} height={700} />
        </div>
        <div className="p-4">
          <h6>Moodle, CSS, Figma</h6>
          <h1 className="mb-6 text-slate-400">
            Rediseño del Entorno Virtual de la <span className="text-white">Universidad del Gran Rosario</span>
          </h1>
          <div className="flex">
            <p>
              <strong>Estado:</strong> Activo <span className="italic text-sm">(se requiere acceso)</span>
            </p>
            <div className="bg-green-500 w-3 h-3 rounded-xl mt-1 ms-1.5"></div>
          </div>
          <Link href="https://virtual.ugr.edu.ar/">
            <button>Ir al sitio</button>
          </Link>
        </div>
      </div>
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
        Al no poder ingresar sin tener una cuenta de alumno voy a incluir varias imagenes para explicar algunas de los
        cambios gráficos aplicados.
      </p>
      <div className="bg-slate-200 p-6 text-slate-950 rounded my-6">
        <h4 className="mb-3">Antes y después</h4>
        <h6>Header</h6>
        <p className="text-sm">
          Se creó un logo más vinculado a la imagen institucional actual. A su vez se unificaron las barras (de 3 a 2) y
          se dejaron unicamente los accesos que tienen una utilidad para los alumnos y los profesores.
        </p>
        <Image src="/imagenes/ugr-header-antes.jpg" alt="" width={1000} height={500} className="w-full mb-2" />
        <Image src="/imagenes/ugr-header-despues.jpg" alt="" width={1000} height={500} className="w-full mb-2" />

        <h6 className="mt-6">Footer</h6>
        <p className="text-sm">
          En el footer se agregó un logo con un atajo a la home, y se administraron mejor los espacios entre elementos y
          dandoles jerarquías para organizar mejor la información. También se utilizaron iconografía en los elementos de
          lista para facilitar su lectura. A su vez se le aplicó diseño responsivo ya que en dispositivos celulares este
          footer no se mostraba.
        </p>
        <div className="inline md:flex gap-x-4 flex-row">
          <div className="basis-1/2">
            <Image src="/imagenes/ugr-footer-antes.jpg" alt="" width={1000} height={500} className="w-full mb-2" />
          </div>
          <div className="basis-1/2">
            <Image src="/imagenes/ugr-footer-despues.jpg" alt="" width={1000} height={500} className="w-full mb-2" />
          </div>
        </div>

        <h6 className="mt-6">Portada</h6>
        <p className="text-sm">
          Se quitaron accesos directos que sólo servían para administradores y moderadores. Los accesos generales se
          colocaron en un menú desplegable y las imagenes publicitarias se limitaron a un carrusel (ya que se utilizaba
          las mismas que en Instagram). Se les dió prioridad a los accesos a las aulas matriculadas.
        </p>
        <div className="inline md:flex gap-x-4 flex-row">
          <div className="basis-1/2">
            <Image src="/imagenes/ugr-portada-antes.png" alt="" width={1000} height={500} className="w-full mb-2" />
          </div>
          <div className="basis-1/2">
            <Image src="/imagenes/ugr-portada-despues.png" alt="" width={1000} height={500} className="w-full mb-2" />
          </div>
        </div>
        <h6 className="mt-6">Chat</h6>
        <p className="text-sm">
          Se unificaron los criterios visuales a la paleta de estilo. En el chat general se pudo colocar el input de
          busqueda y las otras opciones en una sola línea. En cuanto al interior del mensaje se quitó el nombre y el
          avatar de cada mensaje para evitar la redundancia.
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
      </div>
      <div className="mt-6">
        <Link href="/" className="flex items-center">
          <PiArrowCircleLeftDuotone className="mt-0.5 text-lg" />
          <p className="mb-0 ms-2">Volver</p>
        </Link>
      </div>
    </div>
  );
}

export default UGRVirtual;
