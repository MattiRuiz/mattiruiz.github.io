import Image from "next/image";

import LayoutProyecto from "../LayoutProyecto";
import { HeaderProyecto } from "@/components/ui";

function CatalogoMarcablanca() {
  return (
    <LayoutProyecto>
      <HeaderProyecto
        herramientas="React.js, Bootstrap, Figma"
        titulo="App Web: Catálogo Marca Blanca"
        estado="En prueba"
        color="yellow"
        link="https://marcablanca-catalog-front.vercel.app/"
      >
        <Image src="/imagenes/marcablanca-celular.jpg" alt="" width={300} height={700} />
      </HeaderProyecto>

      <p>
        Actualmente en proceso de desarrollo, realizado en colaboración con mi amigo y colega{" "}
        <strong>Facundo Romano</strong> (<a href="https://faacuromano.github.io/">https://faacuromano.github.io/</a>).
        Él está a cargo del <em>back-end</em>, desarrollado con <strong>Node.js (Express, Prisma) y mySql</strong>,
        mientras que yo me ocupo del <em>front-end</em> realizado con <strong>React.js y React Bootstrap</strong>.
      </p>
      <p>
        Este proyecto fue solicitado por el mayorista textil <strong>Marca Blanca</strong> ubicado en la zona centro de
        Rosario. La aplicación web que estamos desarrollando está diseñada para reemplazar el catálogo impreso de
        productos que se publica anualmente y facilitar el acceso y la actualización de precios. Esta aplicación será
        utilizada por los clientes del mayorista para facilitar sus actividades de reventa.
      </p>
      <Image src="/imagenes/marcablanca-home.jpg" alt="" width={1200} height={500} className="w-full mb-2 mt-6" />
    </LayoutProyecto>
  );
}

export default CatalogoMarcablanca;
