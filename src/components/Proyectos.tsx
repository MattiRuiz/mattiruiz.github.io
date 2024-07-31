"use client";
import { useState, useEffect } from "react";

import CardProyecto from "./CardProyecto";

function Proyectos() {
  const [categoria, setCategoria] = useState<string>("programacion");
  const [data, setData] = useState<{ programacion: any[]; disenio: any[] }>({
    programacion: [],
    disenio: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-center gap-1 mb-2">
        <button
          className="border-b-4 border-b-slate-600 disabled:border-b-slate-300"
          onClick={() => setCategoria("programacion")}
          disabled={categoria === "programacion"}
        >
          Programación
        </button>
        <button
          className="border-b-4 border-b-slate-600 disabled:border-b-slate-300"
          onClick={() => setCategoria("disenio")}
          disabled={categoria === "disenio"}
        >
          Diseño
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categoria === "programacion" &&
          data.programacion.map((item, index) => (
            <CardProyecto
              key={index}
              nombre={item.nombre}
              herramientas={item.herramientas}
              imagen={item.imagen}
              link={item.link}
            />
          ))}
        {categoria === "disenio" &&
          data.disenio.map((item, index) => (
            <CardProyecto
              key={index}
              nombre={item.nombre}
              herramientas={item.herramientas}
              imagen={item.imagen}
              link={item.link}
            />
          ))}
      </div>
    </>
  );
}

export default Proyectos;
