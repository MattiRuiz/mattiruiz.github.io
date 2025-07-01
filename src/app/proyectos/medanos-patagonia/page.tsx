/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import LayoutProyecto from "../LayoutProyecto";
import { HeaderProyecto } from "@/components/ui";

function MedanosPatagonia() {
  return (
    <LayoutProyecto>
      <HeaderProyecto
        herramientas="Wordpress"
        titulo="Rediseño y administración del sitio de booking: Medanos Patagonia"
        estado="Activo"
        color="green"
        link="https://medanospatagonia.com/"
      >
        <Image src="/imagenes/medanos-celular.jpg" alt="" width={420} height={700} />
      </HeaderProyecto>

      <p>
        Entre octubre de 2023 y mayo de 2024 llevé adelante el rediseño y mantenimiento del sitio de reservas <em>Médanos Patagonia</em>. El cliente me contactó para resolver una serie de problemas que afectaban directamente la conversión: muchos usuarios no lograban concretar su reserva y se generaban numerosas consultas por WhatsApp sobre información ya publicada en el sitio.
      </p>
      <h4 className="mt-6">Auditoría y rediseño</h4>
      <p>
        Como primer paso, realicé una investigación para detectar fallas tanto visuales como funcionales. A partir de ese diagnóstico, propuse y ejecuté una serie de mejoras dentro de las posibilidades que ofrecían WordPress, el tema y los plugins existentes. Se reestructuraron contenidos, se mejoró la jerarquía visual, y se adaptó la interfaz para una mejor comprensión por parte del usuario.
      </p>
      <p>Uno de los mayores problemas detectados fue la visualización deficiente del sitio en dispositivos móviles. Para resolverlo, implementé una capa de CSS personalizado que corrigió estilos heredados del tema y mejoró significativamente la experiencia responsive.</p>
      <h4 className="mt-6">Incidente de seguridad</h4>
      <p>
        A fines de 2023, el sitio fue comprometido por un virus que reemplazó los enlaces con accesos a una tienda virtual china y bloqueó el acceso al panel de administración. Tras una reunión con el cliente, se optó inicialmente por contratar al servicio técnico del hosting para restaurar el sitio.
      </p>
      <p>
        Aunque lograron restaurar el acceso, el malware persistía. Ante la falta de soluciones definitivas y luego de varias negociaciones frustradas con la empresa de hosting, decidí hacerme cargo personalmente de la limpieza del sitio.
      </p>
      <p>
        Tras varios intentos fallidos y nuevas reinfecciones, descubrí que los archivos infectados eran principalmente archivos .js presentes en el tema y algunos plugins. Para identificarlos, comparé el peso y contenido de los archivos originales con los del sitio infectado. Utilizando FTP y un entorno local de respaldo, realicé una limpieza manual y selectiva de los archivos, logrando finalmente erradicar el malware de forma definitiva.
      </p>
    </LayoutProyecto>
  );
}

export default MedanosPatagonia;
