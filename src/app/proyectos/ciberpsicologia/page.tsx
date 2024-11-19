/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

import LayoutProyecto from "../LayoutProyecto";
import { HeaderProyecto } from "@/components/ui";

import { SiBehance } from "react-icons/si";

function CiberPsicologia() {
  return (
    <LayoutProyecto>
      <HeaderProyecto
        herramientas="HTML, Bootstrap"
        titulo="Sitio Web: Ciberpsicología en español"
        estado="Offline - Hosteado en Github a modo de muestra"
        color="red"
        link="https://mattiruiz.github.io/webCiberpsicologia/index.html"
      >
        <Image src="/imagenes/ciberpsicologia-miniatura.jpg" alt="" width={300} height={700} />
      </HeaderProyecto>
      <p>
        A comienzos de 2021, un grupo de Licenciados en Psicología me encargó la creación de un sitio web especializado
        en CiberPsicología, una rama de la psicología que estudia la relación del ser humano con los dispositivos
        digitales.
      </p>
      <Image src="/imagenes/ciberpsicologia-inicio.jpg" alt="" width={1200} height={500} className="w-full my-6" />
      <p>
        El sitio incluía una página de inicio, una sección de "Quiénes Somos", un formulario de contacto y una
        biblioteca organizada en diversas categorías temáticas. Estas categorías abarcaban temas como Adicciones,
        Ciberacoso, E-sports, Glosario, Libros, Películas, Realidad Virtual, Redes Sociales, Teleterapia y Videojuegos,
        cada una con artículos especializados en la materia.
      </p>
      <Image src="/imagenes/ciberpsicologia-categoria.jpg" alt="" width={1200} height={500} className="w-full my-6" />
      <p>
        Para lograr una estética que evocara la tecnología, se empleó un fondo oscuro que interactuaba con imágenes a
        través de transparencias y difuminados, contrastando con el texto en color blanco o un amarillo institucional.
        La tipografía seleccionada fue la familia <strong>"Lato",</strong> disponible en <em>Google Fonts</em>, por su
        buena legibilidad y la clara diferenciación entre las versiones redonda e itálica/cursiva.
      </p>
      <Image src="/imagenes/ciberpsicologia-articulo.png" alt="" width={1200} height={500} className="w-full my-6" />
      <p>
        Este proyecto fue mi primera experiencia en diseño web, por lo que le tengo un gran aprecio. Con el tiempo, he
        llegado a la conclusión de que uno de los motivos por los cuales el sitio no subsistió fue la falta de un
        sistema de administración que permitiera a los profesionales agregar nuevos artículos, ya que el sitio solo
        usaba <strong>HTML, CSS y Bootstrap.</strong> Hoy en día, me sería más sencillo implementar una{" "}
        <strong>API REST</strong> con base de datos o utilizar <strong>WordPress</strong> para mejorar la funcionalidad.
        A pesar de esto, considero que el diseño envejeció bien y aún se ve moderno, con un diseño responsivo que
        funciona adecuadamente en todos los tamaños de pantalla.
      </p>
      <div className=" mt-6 flex justify-center">
        <Link href="https://www.behance.net/gallery/120371511/Pagina-web-Ciberpsicologia" target="_blank">
          <button className="flex items-center rounded-md px-3 py-2 leading-tight bg-slate-200 text-slate-800 hover:bg-slate-300">
            <SiBehance className="me-2 text-2xl " />
            Ver todas las capturas de desktop y mobile
          </button>
        </Link>
      </div>
    </LayoutProyecto>
  );
}

export default CiberPsicologia;
