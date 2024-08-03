/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

import { PiArrowCircleLeftDuotone } from "react-icons/pi";

import { HeaderProyecto } from "@/components/ui";

function MedanosPatagonia() {
  return (
    <div className="mx-auto">
      <HeaderProyecto
        herramientas="Wordpress"
        titulo="Rediseño y administración del sitio de booking: Medanos Patagonia"
        estado="Activo"
        color="green"
        link="https://medanospatagonia.com/"
      >
        <Image src="/imagenes/medanos-celular.jpg" alt="" width={420} height={700} className="rounded-s-md" />
      </HeaderProyecto>

      <p>
        El trabajo se realizó entre octubre de 2023 y mayo de 2024. El encargado del sitio se puso en contacto para
        resolver problemas de comunicación que afectaban al sistema: muchos usuarios no lograban completar sus reservas
        y se generaban numerosas consultas en WhatsApp sobre información ya disponible en el sitio.
      </p>
      <p>
        Inicialmente, se llevó a cabo una investigación para identificar las debilidades y problemáticas tanto visuales
        como funcionales. Posteriormente, se realizaron cambios estructurales, visuales y de contenido, dentro de las
        posibilidades que ofrecían WordPress, el tema y los plugins utilizados, logrando así una gran mejora en la
        relación del cliente con el usuario. También se encontraron muchos problemas en la visualización del sitio en
        tamaño celular, por lo que se le aplicó una capa de CSS personalizado con modificaciones del estilo.
      </p>
      <h4 className="mt-6">Seguridad</h4>
      <p>
        A finales de 2023, surgió un problema de seguridad cuando un virus infectó el sitio, reemplazando todos los
        enlaces con accesos a productos de una tienda virtual china y bloqueando el acceso al administrador. Tras una
        reunión con el personal, se decidió que la mejor opción era pagar a la empresa que ofrece el servicio de hosting
        para solucionar el problema, ya que no tenía experiencia en este tipo de trabajo.
      </p>
      <p>
        La empresa de hosting restauró los enlaces y solucionó el problema de acceso al administrador, pero no eliminó
        completamente los virus, lo que provocaba que el sitio se reinfectara cada poco tiempo. Después de negociaciones
        frustrantes con la empresa de hosting, decidí tomar el control del problema.
      </p>
      <p>
        Tras varios intentos fallidos y múltiples reinfecciones en un corto periodo, descubrí que los virus se alojaban
        únicamente en archivos ".js" distribuidos en el tema y en varios plugins. La manera de detectarlos fue comparar
        el peso de los archivos originales con los del sitio infectado. Utilizando FTP, realicé una búsqueda minuciosa
        comparando un servidor local con los plugins instalados y el servidor en línea, aplicando los cambios necesarios
        y erradicando finalmente el problema de virus.
      </p>
      <div className="mt-6">
        <Link href="/" className="flex items-center">
          <PiArrowCircleLeftDuotone className="mt-0.5 text-lg" />
          <p className="mb-0 ms-2">Volver</p>
        </Link>
      </div>
    </div>
  );
}

export default MedanosPatagonia;
