import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function ContenedorProyecto({ children }: Props) {
  return <div className="my-4 border border-slate-700 p-4 md:p-8 rounded-md">{children}</div>;
}
