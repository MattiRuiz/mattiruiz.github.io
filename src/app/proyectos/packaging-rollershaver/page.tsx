import Image from "next/image";

import LayoutProyecto from "../LayoutProyecto";
import { HeaderProyecto } from "@/components/ui";

function PackagingRollerShaver() {
  return (
    <LayoutProyecto>
      <HeaderProyecto
        herramientas="Adobe Illustrator, Adobe Photoshop"
        titulo="Packaging: Afeitadora RollerShaver"
        estado="Finalizado"
        color=""
        link=""
      >
        <Image src="/imagenes/afeitadora-muckup.png" alt="" width={300} height={700} />
      </HeaderProyecto>

      <p>
        Mediante la plataforma Upwork en el año 2022 comenzamos una relación comercial con la empresa importadora{" "}
        <strong>ShopyLibre</strong> de Chile quienes me fueron solicitando varios trabajos de packaging. El primero de
        estos fue esta afeitadora: la <strong>RollerShaver</strong>.
      </p>
      <p>
        Al ser mi primer trabajo profesional de packaging fue todo una pendiente de aprendizaje pero por suerte la buena
        onda y excelente comunicación de la empresa permitió que el diseño salga de manera orgánica y en poco tiempo.
      </p>
      <Image src="/imagenes/rollerShaver02.png" alt="" width={1200} height={900} className="mt-6" />
    </LayoutProyecto>
  );
}

export default PackagingRollerShaver;
