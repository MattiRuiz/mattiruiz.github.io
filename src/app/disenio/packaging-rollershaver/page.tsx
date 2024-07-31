import Link from "next/link";
import Image from "next/image";

import { PiArrowCircleLeftDuotone } from "react-icons/pi";

function PackagingRollerShaver() {
  return (
    <div className="mx-auto">
      <div className="flex flex-grow mb-6 gap-x-6 items-center border rounded">
        <div>
          <Image src="/imagenes/afeitadora-muckup.png" alt="" width={300} height={700} />
        </div>
        <div className="p-4">
          <h6>Adobe Illustrator, Adobe Photoshop</h6>
          <h1 className="mb-6 text-slate-400">
            Packaging para la <span className="text-white">Afeitadora RollerShaver</span>
          </h1>
          <ul>
            <li className="mb-1">
              <strong>Cliente:</strong> Shopy Libre (Chile)
            </li>
            <li className="mb-1">
              <strong>Estado:</strong> Finalizado
            </li>
          </ul>
        </div>
      </div>
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
      <div className="mt-6">
        <Link href="/" className="flex items-center">
          <PiArrowCircleLeftDuotone className="mt-0.5 text-lg" />
          <p className="mb-0 ms-2">Volver</p>
        </Link>
      </div>
    </div>
  );
}

export default PackagingRollerShaver;
