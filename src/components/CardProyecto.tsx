import Image from "next/image";
import Link from "next/link";
import imgDefecto from "../img/placeholder-1024x1024.png";

interface CardProyectoProps {
  nombre: string;
  herramientas: string;
  imagen: string;
  link: string;
}

function CardProyecto({ nombre, herramientas, imagen, link }: CardProyectoProps) {
  return (
    <Link href={link ? link : "#"} className="bg-slate-100  rounded-sm">
      <div className="relative aspect-w-4 aspect-h-3 overflow-hidden shadow rounded-t-sm">
        <Image src={imagen ? imagen : imgDefecto} alt={nombre} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <p className="text-sm mb-0.5 text-slate-100 font-semibold bg-slate-900 inline-block py-1 px-2 rounded-sm">
          {herramientas}
        </p>
        <h5 className="text-slate-950">{nombre}</h5>
      </div>
    </Link>
  );
}

export default CardProyecto;
