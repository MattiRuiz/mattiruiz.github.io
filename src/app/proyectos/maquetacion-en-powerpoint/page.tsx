import Image from "next/image";

import LayoutProyecto from "../LayoutProyecto";
import { HeaderProyecto, TituloHome } from "@/components/ui";

function Powerpoint() {
  return (
    <LayoutProyecto>
      <HeaderProyecto
        herramientas="Microsoft PowerPoint"
        titulo="Diseño y Maquetación de Presentación Profesional"
        estado="Finalizado"
        color=""
        link=""
      >
        <Image src="/imagenes/presentacion-miniatura.jpg" alt="" width={300} height={700} />
      </HeaderProyecto>

      <p>
        Este proyecto consistió en el diseño y la maquetación de 28 diapositivas para una presentación profesional.
        Realizado a través de la plataforma <strong>Upwork</strong> en marzo de 2022, el objetivo fue utilizar los
        bocetos del cliente para crear una presentación visualmente atractiva y coherente.
      </p>
      <p>
        A continuación de la presentación, elegí varias de las diapositivas para explicar algunas de las decisiones
        visuales tomadas durante el proyecto.
      </p>
      <div className="flex justify-center mt-6">
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vQecwcMr9-eyhUyc3JbajOdfxRze8vtWaObCHpOlMaRlajq3GE_HDECJ1emK9_qMw/embed?start=false&loop=false&delayms=3000"
          width="1000"
          height="585"
          allowFullScreen={true}
        ></iframe>
      </div>
      <div className="mt-10">
        <TituloHome>Descripción</TituloHome>
        <h4 className="mb-1">
          Diapositiva 01: <span className="font-normal">Tipografía</span>
        </h4>
        <p>
          Para lograr un estilo minimalista y limpio, se seleccionaron las fuentes <strong>Roboto</strong> para el texto
          en bloque y <strong>Roboto Slab</strong> para los titulares. En las diapositivas más sencillas o de
          transición, se utilizaron elementos decorativos y cambios de color, junto con la interpolación entre
          diapositivas, para añadir un toque atractivo y mantener el interés visual.
        </p>
        <div className="inline md:flex gap-x-4 flex-row">
          <div className="basis-1/2">
            <Image src="/imagenes/01-antes.jpg" alt="" width={500} height={500} className="w-full mb-2" />
          </div>
          <div className="basis-1/2">
            <Image src="/imagenes/01-despues.jpg" alt="" width={500} height={500} className="w-full mb-2" />
          </div>
        </div>

        <h4 className="mb-1 mt-10">
          Diapositiva 02: <span className="font-normal">Colores</span>
        </h4>
        <p>
          Para maximizar la legibilidad se utilizó un fondo blanco con texto en gris oscuro. Además se eligió una paleta
          de varios colores que permitió adecuarse a los diferentes tipos de gráficos y cuadros requeridos.
        </p>
        <div className="inline md:flex gap-x-4 flex-row">
          <div className="basis-1/2">
            <Image src="/imagenes/02-antes.jpg" alt="" width={500} height={500} className="w-full mb-2" />
          </div>
          <div className="basis-1/2">
            <Image src="/imagenes/02-despues.jpg" alt="" width={500} height={500} className="w-full mb-2" />
          </div>
        </div>

        <h4 className="mb-1 mt-10">
          Diapositiva 03: <span className="font-normal">Recursos</span>
        </h4>
        <p>
          Se incorporaron diversos componentes visuales para apoyar y reforzar el mensaje que se quería comunicar. Esto
          incluyó iconografía, imágenes y diagramas que complementan el contenido textual y mejoran la comprensión del
          mensaje.
        </p>
        <div className="inline md:flex gap-x-4 flex-row">
          <div className="basis-1/2">
            <Image src="/imagenes/03-antes.jpg" alt="" width={500} height={500} className="w-full mb-2" />
          </div>
          <div className="basis-1/2">
            <Image src="/imagenes/03-despues.jpg" alt="" width={500} height={500} className="w-full mb-2" />
          </div>
        </div>

        <h4 className="mb-1 mt-10">
          Diapositiva 04: <span className="font-normal">Simplificación</span>
        </h4>
        <p>
          Se modificaron los recursos visuales para que el mensaje fuera claro y entendible. Esto incluyó la eliminación
          de elementos innecesarios y la simplificación de gráficos y textos para garantizar una comunicación efectiva y
          directa.
        </p>
        <div className="inline md:flex gap-x-4 flex-row">
          <div className="basis-1/2">
            <Image src="/imagenes/04-antes.jpg" alt="" width={500} height={500} className="w-full mb-2" />
          </div>
          <div className="basis-1/2">
            <Image src="/imagenes/04-despues.jpg" alt="" width={500} height={500} className="w-full mb-2" />
          </div>
        </div>

        <h4 className="mb-1 mt-10">
          Diapositiva 05: <span className="font-normal">Adaptación</span>
        </h4>
        <p>
          Se adaptaron los gráficos requeridos a la paleta de colores y las tipografías seleccionadas, asegurando que
          todos los elementos visuales mantuvieran una coherencia estilística y fueran fácilmente identificables dentro
          del diseño general de la presentación.
        </p>
        <div className="inline md:flex gap-x-4 flex-row">
          <div className="basis-1/2">
            <Image src="/imagenes/05-antes.jpg" alt="" width={500} height={500} className="w-full mb-2" />
          </div>
          <div className="basis-1/2">
            <Image src="/imagenes/05-despues.jpg" alt="" width={500} height={500} className="w-full mb-2" />
          </div>
        </div>

        <h4 className="mb-1 mt-10">
          Otras diapositivas: <span className="font-normal">Destacadas</span>
        </h4>
        <p>
          Algunas diapositivas seleccionadas, como las que contienen ejercicios, se diseñaron con un fondo gris. Este
          fondo se utilizó para aprovechar el contraste con el blanco, generando recuadros destacados que dirigen la
          atención del espectador hacia los elementos importantes.
        </p>
        <div className="inline md:flex gap-x-4 flex-row">
          <div className="basis-1/2">
            <Image src="/imagenes/23.jpg" alt="" width={500} height={500} className="w-full mb-2" />
          </div>
          <div className="basis-1/2">
            <Image src="/imagenes/27.jpg" alt="" width={500} height={500} className="w-full mb-2" />
          </div>
          <div className="basis-1/2">
            <Image src="/imagenes/30.jpg" alt="" width={500} height={500} className="w-full mb-2" />
          </div>
        </div>
      </div>
    </LayoutProyecto>
  );
}

export default Powerpoint;
