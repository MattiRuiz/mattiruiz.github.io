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
        En 2022, a través de la plataforma Upwork, inicié una relación comercial con la empresa importadora{" "}
        <strong>ShopyLibre</strong> de Chile. A partir de entonces, me encargaron varios proyectos de packaging, siendo
        el primero de ellos la <strong>RollerShaver</strong>.
      </p>
      <p>
        Al ser mi primer trabajo profesional de packaging, supuso un gran desafío y una valiosa oportunidad de
        aprendizaje. Afortunadamente, la buena onda y excelente comunicación con la empresa permitieron que el diseño se
        desarrolle de manera orgánica y en un corto período de tiempo.
      </p>
      <Image src="/imagenes/rollerShaver02.png" alt="" width={1200} height={900} className="mt-6" />
    </LayoutProyecto>
  );
}

export default PackagingRollerShaver;
