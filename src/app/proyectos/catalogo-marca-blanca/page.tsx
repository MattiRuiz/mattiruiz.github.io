import Image from "next/image";

import LayoutProyecto from "../LayoutProyecto";
import { HeaderProyecto } from "@/components/ui";

function CatalogoMarcablanca() {
  return (
    <LayoutProyecto>
      <HeaderProyecto
        herramientas="React.js, Bootstrap, Figma"
        titulo="Aplicación Web: Catálogo Digital Marca Blanca"
        estado="Online"
        color="green"
        link="https://www.blanqueriamarcablanca.com/"
      >
        <Image
          src="/imagenes/marcablanca-celular.jpg"
          alt=""
          width={300}
          height={700}
        />
      </HeaderProyecto>

      <p>
        Este proyecto surge por encargo de <strong>Marca Blanca</strong>, un
        mayorista textil ubicado en el centro de Rosario, con el objetivo de
        reemplazar el catálogo impreso de productos que se renueva cada año. El
        nuevo sistema facilita el acceso a la información y permite mantener
        actualizados los precios en tiempo real, brindando una herramienta más
        ágil y moderna tanto para el mayorista como para sus revendedores.
      </p>
      <p>
        La <strong>aplicación web</strong> fue desarrollada en colaboración con
        mi amigo y colega{" "}
        <a href="https://faacuromano.github.io/">
          Facundo Romano (https://faacuromano.github.io/)
        </a>
        . Mientras él se encargó del back-end utilizando Node.js, Express,
        Prisma y una base de datos en MySQL, mi responsabilidad principal fue el
        desarrollo del front-end en React.js con React Bootstrap, trabajando
        también en el diseño de la interfaz con Figma.
      </p>
      <Image
        src="/imagenes/marcablanca-home.jpg"
        alt=""
        width={1200}
        height={500}
        className="w-full mb-2 mt-6"
      />
      <p>
        Desde el diseño, buscamos una estética clara, enfocada en la usabilidad
        y la navegación intuitiva. Se implementaron funcionalidades clave como:
      </p>
      <ul className="mb-4 list-disc list-inside">
        <li className="mb-2">
          <strong>Vista general y por categorías,</strong> con paginación para
          evitar cargas pesadas.
        </li>
        <li className="mb-2">
          Sistema de visualización de precios dual:{" "}
          <strong>precio mayorista</strong> (para el cliente) y{" "}
          <strong>precio de reventa</strong>, configurable según el porcentaje
          de ganancia deseado.
        </li>
        <li className="mb-2">Interfaz responsive para dispositivos móviles.</li>
        <li className="mb-2">
          Posibilidad de ocultar precios, permitiendo que los revendedores
          compartan el catálogo sin mostrar su costo.
        </li>
        <li className="mb-2">Exportación de listas de precios en PDF.</li>
      </ul>
      <p>
        Este proyecto representa no solo una solución práctica para el cliente,
        sino también un primer caso de aplicación web completa en producción en
        mi carrera, involucrando tanto el diseño como la programación y el
        trabajo conjunto entre front y back end. Actualmente se encuentra en
        fase de prueba con un promedio de 22 usuarios diarios utilizando el
        sistema.
      </p>
    </LayoutProyecto>
  );
}

export default CatalogoMarcablanca;
