/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import LayoutProyecto from "../LayoutProyecto";
import { HeaderProyecto } from "@/components/ui";

function PrototipoMucamas() {
  return (
    <LayoutProyecto>
      <HeaderProyecto
        herramientas="Figma"
        titulo="Prototipo de App: Mucamas Hoy"
        estado="Prototipo de Figma"
        color="green"
        link="https://www.figma.com/proto/Ulou9CcsJbiKS3nTZiriMO/mucamashoy?node-id=2-2192&t=jftJ1I0W4qHPhFiw-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2192"
      >
        <Image src="/imagenes/mucamas-miniatura.jpg" alt="" width={300} height={700} />
      </HeaderProyecto>
      <p>
        A mediados de 2023, junto a <strong>Facundo Romano</strong>{" "}
        <a href="https://faacuromano.github.io/">(faacuromano.github.io)</a>, trabajamos en la creación de un{" "}
        <em>prototipo interactivo</em> para una aplicación móvil de contratación de mucamas a demanda. Realizamos
        investigaciones de competencia y casos de uso para identificar las entidades y variables clave, lo que nos
        permitió desarrollar un modelo de usuarios. Toda la investigación fue documentada en un Notion:
        <a href="https://dashing-oval-6c5.notion.site/Documentaci-n-Mucamas-Hoy-f1c4247fd59247ffa2c753583907d53f?pvs=74">
          {" "}
          Documentación - Mucamas Hoy
        </a>
        .
      </p>
      <p>
        Con esa información, diseñamos un prototipo interactivo en <em>Figma</em>, donde priorizamos la funcionalidad
        sobre el aspecto visual. El resultado fue un diseño minimalista, utilizando una paleta de grises y la tipografía
        geométrica y de palo seco <strong>"Roboto"</strong>.
      </p>
      <Image src="/imagenes/mucamas-captura.jpg" alt="" width={1000} height={500} className="my-6 mx-auto" />
    </LayoutProyecto>
  );
}

export default PrototipoMucamas;
