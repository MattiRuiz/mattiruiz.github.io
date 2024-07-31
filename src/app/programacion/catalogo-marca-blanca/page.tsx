import Link from "next/link";
import Image from "next/image";

import { PiArrowCircleLeftDuotone } from "react-icons/pi";

function CatalogoMarcablanca() {
  return (
    <div className="mx-auto">
      <div className="flex flex-grow mb-6 gap-x-6 items-center border rounded">
        <div>
          <Image src="/imagenes/marcablanca-celular.jpg" alt="" width={300} height={700} />
        </div>
        <div className="p-4">
          <h6>React.js, Bootstrap, Figma</h6>
          <h1 className="mb-6 text-slate-400">
            App Web: <span className="text-white">Catálogo Marca Blanca</span>
          </h1>
          <div className="flex">
            <p>
              <strong>Estado:</strong> En prueba
            </p>
            <div className="bg-yellow-300 w-3 h-3 rounded-xl mt-1 ms-1.5"></div>
          </div>
          <Link href="https://marcablanca-catalog-front.vercel.app/">
            <button>Ir al sitio</button>
          </Link>
        </div>
      </div>
      <p>
        Actualmente en proceso de desarrollo, realizado con mi amigo y colega <strong>Facundo Romano</strong> a cargo de
        su back-end desarrollado en <strong>Node.js (Express, Prisma) y mySql</strong>, mientras que yo estoy en el{" "}
        front realizado con <strong>React.js y React Bootstrap</strong>.
      </p>
      <p>
        Proyecto solicitado por el mayorista textil <strong>Marca Blanca</strong> ubicado en la zona centrica de
        Rosario, consiste en una aplicación web diseñada para reemplazar el catálogo impreso de productos que se publica
        anualmente. Esta aplicación será utilizada por los clientes del mayorista para facilitar sus actividades de
        reventa.
      </p>
      <Image src="/imagenes/marcablanca-home.jpg" alt="" width={1200} height={500} className="w-full mb-2 mt-6" />
      <div className="mt-6">
        <Link href="/" className="flex items-center">
          <PiArrowCircleLeftDuotone className="mt-0.5 text-lg" />
          <p className="mb-0 ms-2">Volver</p>
        </Link>
      </div>
    </div>
  );
}

export default CatalogoMarcablanca;
