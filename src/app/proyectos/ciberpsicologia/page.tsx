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
        A comienzos de 2021, un grupo de Licenciados en Psicología me encargó el diseño y desarrollo de un sitio web dedicado a la Ciberpsicología, una disciplina que estudia la relación del ser humano con los dispositivos digitales.
      </p>
      <Image src="/imagenes/ciberpsicologia-inicio.jpg" alt="" width={1200} height={500} className="w-full my-6" />
      <p>
        El sitio incluía una página de inicio, una sección “Quiénes somos”, un formulario de contacto y una biblioteca de artículos organizada en categorías temáticas como: Adicciones, Ciberacoso, E-sports, Glosario, Libros, Películas, Realidad Virtual, Redes Sociales, Teleterapia y Videojuegos. Cada categoría contaba con artículos seleccionados y redactados por los profesionales a cargo.
      </p>
      <Image src="/imagenes/ciberpsicologia-categoria.jpg" alt="" width={1200} height={500} className="w-full my-6" />
      <p>
        La estética buscaba transmitir una identidad tecnológica: fondo oscuro, imágenes con transparencias y efectos difuminados, y una paleta de alto contraste (blanco y amarillo institucional). Se utilizó la familia tipográfica <em>Lato</em> (Google Fonts), por su excelente legibilidad y su buena diferenciación entre redonda e itálica.
      </p>
      <Image src="/imagenes/ciberpsicologia-articulo.png" alt="" width={1200} height={500} className="w-full my-6" />
      <p>
        Este fue mi primer proyecto de diseño web, y por eso le tengo un aprecio especial. Con el tiempo, reconocí que una de las limitaciones principales fue la ausencia de un sistema de gestión de contenidos, lo cual dificultaba la actualización del sitio por parte del equipo. La solución se construyó únicamente con HTML, CSS y Bootstrap, sin una capa administrativa o base de datos. Hoy en día, abordaría un proyecto similar integrando una API REST o utilizando WordPress como CMS.
      </p>
      <p>Aun así, considero que el diseño ha envejecido bien. La estructura sigue siendo clara y el sitio es completamente responsivo, adaptándose a diferentes tamaños de pantalla sin inconvenientes.</p>
      <div className=" mt-6 flex justify-center">
        <Link href="https://www.behance.net/gallery/120371511/Pagina-web-Ciberpsicologia" target="_blank">
          <button className="flex items-center rounded-md px-3 py-2 leading-tight bg-slate-200 text-slate-800 hover:bg-slate-300">
            <SiBehance className="me-2 text-2xl " />
            Ver más las capturas de desktop y mobile
          </button>
        </Link>
      </div>
    </LayoutProyecto>
  );
}

export default CiberPsicologia;
