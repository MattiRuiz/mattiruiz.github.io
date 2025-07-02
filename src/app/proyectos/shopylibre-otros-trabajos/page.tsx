import Image from "next/image";
import Link from "next/link";

import LayoutProyecto from "../LayoutProyecto";
import { HeaderProyecto, ContenedorProyecto } from "@/components/ui";

function ShopyLibreTrabajos() {
  return (
    <LayoutProyecto>
      <HeaderProyecto
        herramientas="Adobe Illustrator, Adobe Photoshop"
        titulo="ShopyLibre: Diseño de packaging de diferentes productos"
        estado="Finalizado"
        color=""
        link=""
      >
        <Image
          src="/imagenes/shopylibre-foto-balsamo.png"
          alt=""
          width={300}
          height={700}
        />
      </HeaderProyecto>
      <p className="mb-6">
        En 2022, a través de la plataforma Upwork, inicié una relación comercial
        con <strong>ShopyLibre</strong>, una empresa importadora con sede en
        Chile. Desde entonces, me ha solicitado participar de diversos proyectos
        de diseño de packaging para los productos de sus líneas comerciales. A
        continuación, se presentan algunos de los trabajos realizados.
      </p>
      <ContenedorProyecto>
        <h3 className="mb-3">
          Afeitadora myCOCOS:{" "}
          <span className="font-normal">Rediseño de Packaging</span>
        </h3>
        <p>
          La línea myCOCOS, especializada en productos para el cuidado íntimo,
          ya contaba con una estética visual consolidada. Para el rediseño de la
          afeitadora, se realizó un análisis del sitio web oficial y de
          productos relacionados, con el fin de identificar los elementos
          identitarios más relevantes. A partir de esta investigación, y
          siguiendo las indicaciones del cliente, se propuso un diseño sobrio y
          despojado, donde la imagen del producto ocupa un lugar protagónico. Se
          tomaron como referencia modelos anteriores de la línea —como el Pride—
          para mantener coherencia con la marca.
        </p>
        <div className="inline md:flex gap-x-4 flex-row">
          <div className="basis-1/2">
            <h5 className="mt-4 mb-2">Modelo Pride de referencia</h5>
            <Image
              src="/imagenes/shopylibre-afeitadora-antes.jpg"
              alt=""
              width={1000}
              height={500}
              className="w-full mb-2"
            />
          </div>
          <div className="basis-1/2">
            <h5 className="mt-4 mb-2">Diseño entregado</h5>
            <Image
              src="/imagenes/shopylibre-afeitadora-despues.jpg"
              alt=""
              width={1000}
              height={500}
              className="w-full mb-2"
            />
          </div>
        </div>
      </ContenedorProyecto>
      <ContenedorProyecto>
        <h3 className="mb-3">
          Bálsamo After Shave:{" "}
          <span className="font-normal">Tubo de cartón</span>
        </h3>
        <p>
          Se diseñó un pequeño envase de cartón para bálsamo post afeitado,
          manteniendo la coherencia con la estética definida previamente para la
          línea <strong>myCOCOS</strong>. El resultado fue un diseño
          minimalista, donde se prioriza la limpieza visual y la identificación
          del producto. El diseño fue adaptado al troquel final y optimizado
          para impresión.
        </p>
        <div className="inline lg:flex gap-x-4 flex-row">
          <div className="basis-1/2">
            <h5 className="mt-4 mb-2">
              Plano con troquelado y ejemplo de diseño
            </h5>
            <Image
              src="/imagenes/shopylibre-carton-ejemplo.jpg"
              alt=""
              width={1000}
              height={500}
              className="w-full mb-2"
            />
          </div>
          <div className="basis-1/2">
            <h5 className="mt-4 mb-2">Diseño final</h5>
            <Image
              src="/imagenes/shopylibre-carton-final.png"
              alt=""
              width={1000}
              height={500}
              className="w-full mb-2"
            />
          </div>
        </div>
      </ContenedorProyecto>
      <ContenedorProyecto>
        <h3 className="mb-3">
          Espuma para Afeitar y Bálsamo After Shave:{" "}
          <span className="font-normal">Etiquetas frente y dorso</span>
        </h3>
        <p>
          Para estos productos en formato dispensador, se trabajó en el diseño
          de las etiquetas tanto del frente como del dorso. El principal desafío
          fue adaptar la información legal e ingredientes en un espacio reducido
          sin comprometer la legibilidad. Para ello, se utilizó una{" "}
          <strong>tipografía condensada en negrita</strong>, con{" "}
          <strong>gran ojo interno</strong>, ideal para imprimir en fondos
          oscuros sin pérdida de detalle. Se prestó especial atención a la
          jerarquización de la información y a la optimización del diseño para
          producción.
        </p>
        <div className="flex gap-x-4 flex-row">
          <div className="basis-1/2 lg:basis-1/3">
            <h5 className="mt-4 mb-2">Referencia</h5>
            <Image
              src="/imagenes/shopylibre-referencia-aftershave.jpg"
              alt=""
              width={300}
              height={500}
              className="w-full mb-2"
            />
          </div>
          <div className="basis-1/2 lg:basis-1/3">
            <h5 className="mt-4 mb-2">Diseño final</h5>
            <Image
              src="/imagenes/shopylibre-foto-balsamo.png"
              alt=""
              width={300}
              height={500}
              className="w-full mb-2"
            />
          </div>
        </div>
        <div className="flex gap-x-4 flex-row">
          <div className="basis-1/2 lg:basis-1/3">
            <h5 className="mt-4 mb-2">
              After Shave: <span className="font-normal">Frente</span>
            </h5>
            <Image
              src="/imagenes/shopylibre-AfterShave-FRENTE.png"
              alt=""
              width={1000}
              height={500}
              className="w-full mb-2"
            />
          </div>
          <div className="basis-1/2 lg:basis-1/3">
            <h5 className="mt-4 mb-2">
              After Shave: <span className="font-normal">Dorso</span>
            </h5>
            <Image
              src="/imagenes/shopylibre-AfterShave-DORSO.png"
              alt=""
              width={1000}
              height={500}
              className="w-full mb-2"
            />
          </div>
        </div>
        <div className="flex gap-x-4 flex-row">
          <div className="basis-1/2 lg:basis-1/3">
            <h5 className="mt-4 mb-2">
              Espuma de afeitar: <span className="font-normal">Frente</span>
            </h5>
            <Image
              src="/imagenes/shopylibre-Esp.Afeitar-FRENTE_Mesa de trabajo 1.png"
              alt=""
              width={1000}
              height={500}
              className="w-full mb-2"
            />
          </div>
          <div className="basis-1/2 lg:basis-1/3">
            <h5 className="mt-4 mb-2">
              Espuma de afeitar: <span className="font-normal">Dorso</span>
            </h5>
            <Image
              src="/imagenes/shopylibre-Esp.Afeitar-DORSO.png"
              alt=""
              width={1000}
              height={500}
              className="w-full mb-2"
            />
          </div>
        </div>
      </ContenedorProyecto>
      <ContenedorProyecto>
        <h3 className="mb-3">
          MENN EventPlanner:{" "}
          <span className="font-normal">Packaging contenedor</span>
        </h3>
        <p className="mb-6">
          MENN es una línea dirigida a hombres —en especial, a nómadas
          digitales— que busca transmitir una estética funcional y elegante. El
          producto era una agenda estilo EventPlanner, pensada para acompañar el
          trabajo y los viajes. El diseño del packaging consistió en una caja
          negra mate con impresión en laca UV sectorizada, resaltando zonas
          estratégicas del diseño. El resultado fue un empaque sofisticado y
          profesional, coherente con el público objetivo del producto.
        </p>
        <div className="inline md:flex gap-x-4 flex-row">
          <div className="basis-2/3">
            <Image
              src="/imagenes/shopylibre-eventplanner.jpg"
              alt=""
              width={1000}
              height={500}
              className="w-full mb-2"
            />
          </div>
          <div className="w-full aspect-auto sm:aspect-[4/3]">
            <video
              src="/videos/shopylibre-eventplaner-final.mp4"
              controls
              preload="metadata"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </ContenedorProyecto>
    </LayoutProyecto>
  );
}

export default ShopyLibreTrabajos;
