import Image from "next/image";
import imgDefecto from "../img/placeholder-1024x1024.png";

interface CardProyectoProps {
  nombre: string;
  herramientas: string;
  imagen: string;
}

function CardProyecto({ nombre, herramientas, imagen }: CardProyectoProps) {
  return (
    <div className="w-1/3">
      <div className="relative aspect-w-4 aspect-h-3 overflow-hidden">
        <Image src={imagen ? imagen : imgDefecto} alt={nombre} layout="fill" objectFit="cover" />
      </div>
      <div className="py-2">
        <h5 className="text-xl font-semibold mb-0.5">{nombre}</h5>
        <p className="text-sm">{herramientas}</p>
      </div>
    </div>
  );
}

export default CardProyecto;
