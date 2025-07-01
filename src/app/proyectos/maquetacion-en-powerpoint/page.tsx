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
        <Image
          src="/imagenes/presentacion-miniatura.jpg"
          alt=""
          width={300}
          height={700}
        />
      </HeaderProyecto>

      <p>
        Este proyecto consistió en el diseño y maquetación de una presentación
        profesional de 28 diapositivas, encargada a través de la plataforma
        <em>Upwork</em> en marzo de 2022. El objetivo fue transformar los
        bocetos enviados por el cliente en una presentación visualmente
        atractiva, clara y coherente, optimizada para su uso en contextos
        formales.
      </p>
      <p>
        A continuación se encuentra la presentación final y por debajo una breve
        descripción de las decisiones de diseño más relevantes, ilustradas con
        ejemplos de bocetos y del resultado final.
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
        <h4 className="mt-6">Tipografía</h4>
        <p>
          Desde el inicio se buscó un estilo{" "}
          <strong>minimalista y limpio</strong>. Para ello se eligió la familia
          tipográfica <em>Roboto</em> para los textos corridos, y{" "}
          <em>Roboto Slab</em> para los títulos, logrando un contraste
          jerárquico claro sin perder cohesión visual. En las diapositivas más
          simples o de transición, se utilizaron sutiles elementos decorativos,
          variaciones de color y transiciones animadas que aportan dinamismo y
          atractivo visual.
        </p>
        <div className="inline md:flex gap-x-4 flex-row pt-4">
          <div className="basis-1/2">
            <Image
              src="/imagenes/01-antes.jpg"
              alt=""
              width={500}
              height={500}
              className="w-full mb-2"
            />
          </div>
          <div className="basis-1/2">
            <Image
              src="/imagenes/01-despues.jpg"
              alt=""
              width={500}
              height={500}
              className="w-full mb-2"
            />
          </div>
        </div>

        <h4 className="mt-6">Colores</h4>
        <p>
          Se trabajó con un fondo{" "}
          <strong>blanco y texto en gris oscuro,</strong> priorizando la
          legibilidad. A esta base neutra se le sumó una paleta amplia de
          colores complementarios, pensada para adaptarse con facilidad a
          distintos tipos de gráficos, tablas y visualizaciones de datos.
        </p>
        <div className="inline md:flex gap-x-4 flex-row">
          <div className="basis-1/2">
            <Image
              src="/imagenes/02-antes.jpg"
              alt=""
              width={500}
              height={500}
              className="w-full mb-2"
            />
          </div>
          <div className="basis-1/2">
            <Image
              src="/imagenes/02-despues.jpg"
              alt=""
              width={500}
              height={500}
              className="w-full mb-2"
            />
          </div>
        </div>

        <h4 className="mt-6">Recursos visuales</h4>
        <p>
          Para reforzar el contenido y facilitar su comprensión, se incorporaron
          iconografía, imágenes, diagramas y elementos gráficos que acompañan el
          texto. Estos recursos no solo enriquecen la estética, sino que también
          ayudan a mantener la atención y guiar la mirada del espectador.
        </p>
        <div className="inline md:flex gap-x-4 flex-row">
          <div className="basis-1/2">
            <Image
              src="/imagenes/03-antes.jpg"
              alt=""
              width={500}
              height={500}
              className="w-full mb-2"
            />
          </div>
          <div className="basis-1/2">
            <Image
              src="/imagenes/03-despues.jpg"
              alt=""
              width={500}
              height={500}
              className="w-full mb-2"
            />
          </div>
        </div>

        <h4 className="mt-6">Simplificación</h4>
        <p>
          Se modificaron los recursos visuales para que el mensaje fuera claro y
          entendible. Se depuraron los gráficos y textos eliminando elementos
          innecesarios, logrando una comunicación directa y clara. Este criterio
          se aplicó de forma transversal en toda la presentación.
        </p>
        <div className="inline md:flex gap-x-4 flex-row">
          <div className="basis-1/2">
            <Image
              src="/imagenes/04-antes.jpg"
              alt=""
              width={500}
              height={500}
              className="w-full mb-2"
            />
          </div>
          <div className="basis-1/2">
            <Image
              src="/imagenes/04-despues.jpg"
              alt=""
              width={500}
              height={500}
              className="w-full mb-2"
            />
          </div>
        </div>

        <h4 className="mt-6">Adaptación gráfica</h4>
        <p>
          Los gráficos provistos por el cliente fueron reestilizados para
          integrarse visualmente al sistema gráfico general. Se adaptaron a la
          paleta de colores seleccionada y a las tipografías definidas, logrando{" "}
          <strong>consistencia estética</strong> en toda la presentación.
        </p>
        <div className="inline md:flex gap-x-4 flex-row">
          <div className="basis-1/2">
            <Image
              src="/imagenes/05-antes.jpg"
              alt=""
              width={500}
              height={500}
              className="w-full mb-2"
            />
          </div>
          <div className="basis-1/2">
            <Image
              src="/imagenes/05-despues.jpg"
              alt=""
              width={500}
              height={500}
              className="w-full mb-2"
            />
          </div>
        </div>

        <h4 className="mt-6">Diapositivas destacadas</h4>
        <p>
          En algunas diapositivas, como aquellas con ejercicios o llamadas de
          atención, se utilizó un fondo gris claro. Esta decisión buscó generar
          contraste con el resto de las pantallas.
        </p>
        <div className="inline md:flex gap-x-4 flex-row">
          <div className="basis-1/2">
            <Image
              src="/imagenes/23.jpg"
              alt=""
              width={500}
              height={500}
              className="w-full mb-2"
            />
          </div>
          <div className="basis-1/2">
            <Image
              src="/imagenes/27.jpg"
              alt=""
              width={500}
              height={500}
              className="w-full mb-2"
            />
          </div>
          <div className="basis-1/2">
            <Image
              src="/imagenes/30.jpg"
              alt=""
              width={500}
              height={500}
              className="w-full mb-2"
            />
          </div>
        </div>
      </div>
    </LayoutProyecto>
  );
}

export default Powerpoint;
