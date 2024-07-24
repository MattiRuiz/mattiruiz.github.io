import Image from "next/image";

function Powerpoint() {
  return (
    <div className="w-2/3 mx-auto">
      <h1 className="mb-6 text-slate-400">Maquetación de Powerpoint</h1>
      <p className="mb-6">
        En este trabajo se realizó el diseño y maquetación de 31 diapositivas
        para una presentación profesional. Trabajo gestionado por la aplicación
        Upwork, se realizó entre los días 4 y 6 de marzo del 2022. Siguiendo el
        pedido de un trabajo minimalista y despojado, se eligió una familia
        tipográfica y su variable de forma: Roboto y Roboto Slab. Una vez tomada
        esas decisiones se empezó a maquetar toda la pieza. También se eligió
        una paleta de colores acordes a todos los diferentes tipos de cuadros
        que requería el trabajo. Dejo ejemplos del look de las diapositivas
        antes y después de mi diseño. Un ítem a destacar y que no se va a poder
        apreciar en este artículo son las transiciones realizadas, las cuales
        fueron elegidas para suavizar todo movimiento en cada diapositiva. Si
        estas interesado y quieres verlo no dudes en escribirme pidiendo el
        archivo.
      </p>
      <div className="flex gap-4 flex-row mb-4">
        <div className="basis-1/2">
          <Image
            src="/imagenes/05-antes.jpg"
            alt=""
            width={500}
            height={500}
            className="w-full mb-2"
          />
          <p className="text-sm italic">
            <strong>Diapositiva 05 - antes:</strong> el concepto de la idea
            aportada por la cliente.
          </p>
        </div>
        <div className="basis-1/2">
          <Image
            src="/imagenes/05-despues.jpg"
            alt=""
            width={500}
            height={500}
            className="w-full mb-2"
          />
          <p className="text-sm italic">
            <strong>Diapositiva 05 - después:</strong> adaptación de la idea a
            las desiciones visuales.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Powerpoint;
