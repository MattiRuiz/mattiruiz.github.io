import { ReactNode } from "react";

interface CardProps {
  nombre: string;
  children: ReactNode;
}

export function CardHabilidad({ children, nombre }: CardProps) {
  return (
    <div className="col-span-2 py-8 w-full object-contain lg:col-span-1 bg-slate-800 border border-slate-700 rounded-md">
      <div className="flex flex-col items-center justify-center">
        {children}
        <p className="font-semibold mb-0">{nombre}</p>
      </div>
    </div>
  );
}
