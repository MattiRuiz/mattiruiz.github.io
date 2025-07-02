import Image from "next/image";

import LayoutProyecto from "../LayoutProyecto";
import { HeaderProyecto } from "@/components/ui";

function PackagingRollerShaver() {
  return (
    <LayoutProyecto>
      <HeaderProyecto
        herramientas="Adobe Illustrator, Adobe Photoshop"
        titulo="ShopyLibre: Packaging para la Afeitadora RollerShaver"
        estado="Finalizado"
        color=""
        link=""
      >
        <Image
          src="/imagenes/afeitadora-muckup.png"
          alt=""
          width={300}
          height={700}
        />
      </HeaderProyecto>

      <p>
        En 2022, a través de la plataforma Upwork, comencé una relación
        comercial con la empresa importadora ShopyLibre de Chile. Uno de los
        primeros encargos fue el diseño de packaging para la afeitadora
        eléctrica RollerShaver, dirigida a un público unisex.
      </p>
      <p>
        El cliente proporcionó algunas referencias visuales, que fueron
        reinterpretadas para desarrollar una nueva composición visual. Se diseñó
        una caja con un relato gráfico distribuido en cada una de sus caras,
        buscando comunicar tanto los atributos técnicos del producto como su
        diferencial estético. El objetivo fue combinar modernidad, funcionalidad
        y atractivo visual en un espacio reducido y bien organizado.
      </p>
      <Image
        src="/imagenes/rollerShaver02.png"
        alt=""
        width={1200}
        height={900}
        className="my-8"
      />
      <p>
        Se emplearon Adobe Illustrator y Photoshop como herramientas
        principales, y se definió una paleta cromática sobria con detalles en
        naranja dorado para resaltar funciones clave del producto. En cuanto a
        tipografía, se utilizó <strong>Helvetica Neue</strong> en sus variantes{" "}
        <em>Roman</em> para los bloques de texto y <em>Condensed Light</em> para
        titulares de primera jerarquía, logrando buena legibilidad y presencia
        de marca.El diseño también contempló los requerimientos de impresión y
        troquelado, así como la correcta adaptación a su formato físico.
      </p>
      <p>
        Gracias a una excelente comunicación con el cliente y a un proceso de
        validación ágil, el diseño fue aprobado rápidamente y enviado a
        producción en menos de dos semanas.
      </p>
      <Image
        src="/imagenes/muckup1.png"
        alt=""
        width={888}
        height={911}
        className="my-8"
      />
    </LayoutProyecto>
  );
}

export default PackagingRollerShaver;
