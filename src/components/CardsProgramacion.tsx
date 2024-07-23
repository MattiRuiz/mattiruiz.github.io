import Image from "next/image";

import imgDefecto from "../img/placeholder-1024x1024.png";

function CardsProgramacion() {
  return (
    <>
      <h4>Hola, Programación</h4>
      <div className="w-1/3">
        <Image src={imgDefecto} alt="" />
        <div className="py-2">
          <h5 className="text-xl font-semibold mb-0.5">Catálogo Marca Blanca</h5>
          <p className="text-sm">Reactjs, Bootstrap, diseño de interfaces</p>
        </div>
      </div>
    </>
  );
}

export default CardsProgramacion;
