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
        Este proyecto consistió en el diseño y maquetación de 28 diapositivas para una presentación profesional,
        realizado a través de la plataforma <strong>Upwork</strong> entre el 4 y el 6 de marzo de 2022. A continuación
        de la presentación se utilizarán algunas diapositivas para explicar algunas de las desiciones tomadas.
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
          Con la premisa de un estilo minimalista y limpio, se seleccionaron las fuentes <strong>Roboto</strong> para
          texto en bloque y <strong>Roboto Slab</strong> para titulares. Se utilizaron elementos decorativos para las
          diapositivas más sencillas o de transición que el cambio de color junto con la interpolación entre
          diapositivas le da un toque atractivo.
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
          También se eligió una paleta de colores adecuada para los diferentes tipos de gráficos y cuadros requeridos.
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
        <p>Se utilizaron diferentes componentes visuales para apoyar el mensaje que se quiere comunicar.</p>
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
        <p>Se modificaron los recursos para que el mensaje sea claro y entendible.</p>
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
        <p>Adaptación de las gráficos requeridos a las paletas de colores y tipográficas seleccionadas.</p>
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
          Algunas diapositivas seleccionadas, cómo las que contienen ejercicios, tienen un fondo gris para aprovechar el
          contraste con blanco para generar recuadros destacados.
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
