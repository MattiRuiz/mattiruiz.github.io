import { ReactNode } from "react";

interface Props {
  nombre: string;
  descripcion: string;
  children: ReactNode;
}

export function CardEspecialidades({ children, nombre, descripcion }: Props) {
  return (
    <div className="p-6 rounded border border-slate-700 flex gap-x-4">
      <div className="w-10 flex justify-center text-4xl text-slate-400">{children}</div>
      <div>
        <p className="text-lg font-bold mb-2 leading-tight">{nombre}</p>
        <p className="mb-0 leading-normal">{descripcion}</p>
      </div>
    </div>
  );
}
