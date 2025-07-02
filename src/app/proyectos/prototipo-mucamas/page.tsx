/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import LayoutProyecto from "../LayoutProyecto";
import { HeaderProyecto } from "@/components/ui";

function PrototipoMucamas() {
  return (
    <LayoutProyecto>
      <HeaderProyecto
        herramientas="Figma, Notion"
        titulo="Prototipo Interactivo de la aplicación: Mucamas Hoy"
        estado="Prototipo de Figma"
        color="green"
        link="https://www.figma.com/proto/Ulou9CcsJbiKS3nTZiriMO/mucamashoy?node-id=2-2192&t=jftJ1I0W4qHPhFiw-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2192"
      >
        <Image
          src="/imagenes/mucamas-miniatura.jpg"
          alt=""
          width={300}
          height={700}
        />
      </HeaderProyecto>
      <p>
        A mediados de 2023, junto a mi amigo y colega{" "}
        <a href="https://faacuromano.github.io/">
          Facundo Romano (faacuromano.github.io)
        </a>
        , desarrollamos un prototipo interactivo para una aplicación móvil
        orientada a la contratación de mucamas a demanda. El proyecto comenzó
        con una etapa de investigación en la que analizamos la competencia y
        distintos casos de uso, con el objetivo de identificar las entidades,
        variables y relaciones clave del sistema. A partir de estos datos,
        construimos un modelo de usuarios y organizamos toda la documentación en
        una base en Notion:{" "}
        <a href="https://dashing-oval-6c5.notion.site/Documentaci-n-Mucamas-Hoy-f1c4247fd59247ffa2c753583907d53f?pvs=74">
          {" "}
          Documentación - Mucamas Hoy
        </a>
        .
      </p>
      <p>
        Con el modelo definido, procedimos al diseño del prototipo en Figma,
        priorizando la funcionalidad y la usabilidad sobre los aspectos
        puramente estéticos. El resultado fue una interfaz minimalista, con una
        paleta de grises sobria, y el uso de la tipografía Roboto, seleccionada
        por su geometría clara y su buena legibilidad tanto en titulares como en
        textos de sistema.
      </p>
      <p>
        El flujo de navegación fue cuidadosamente estructurado para garantizar
        una experiencia de usuario sencilla e intuitiva, alineada con los
        requerimientos funcionales relevados en la etapa de análisis.
      </p>
      <Image
        src="/imagenes/ejemplo-prototipo.jpg"
        alt=""
        width={1000}
        height={500}
        className="my-8 mx-auto"
      />
    </LayoutProyecto>
  );
}

export default PrototipoMucamas;
