import Image from "next/image";
import Link from "next/link";
import imgDefecto from "../img/placeholder-1024x1024.png";

interface CardProyectoProps {
  nombre: string;
  herramientas: string;
  imagen: string;
  link: string;
}

export function CardProyecto({ nombre, herramientas, imagen, link }: CardProyectoProps) {
  return (
    <Link href={link ? link : "#"} className="bg-slate-800 border border-slate-700 rounded-md">
      <div className="relative aspect-w-4 aspect-h-3 overflow-hidden shadow rounded-t-md">
        <Image src={imagen ? imagen : imgDefecto} alt={nombre} fill={true} style={{ objectFit: "cover" }} />
      </div>
      <div className="p-4">
        <p className="text-sm mb-2 text-slate-900 font-semibold bg-slate-400 inline-block py-0.5 px-2 rounded-md truncate max-w-full" title={herramientas}>
          {herramientas}
        </p>
        <h5 className="text-white font-medium">{nombre}</h5>
      </div>
    </Link>
  );
}

export default CardProyecto;
