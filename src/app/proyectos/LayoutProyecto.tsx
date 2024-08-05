import { ReactNode } from "react";
import Link from "next/link";
import { PiArrowCircleLeftDuotone } from "react-icons/pi";

interface Props {
  children: ReactNode;
}

function LayoutProyecto({ children }: Props) {
  return (
    <div className="mx-auto">
      {children}
      <div className="mt-10 flex justify-end">
        <Link href="/" className="flex items-center">
          <PiArrowCircleLeftDuotone className="mt-0.5 text-lg" />
          <p className="mb-0 ms-2">Volver</p>
        </Link>
      </div>
    </div>
  );
}

export default LayoutProyecto;
