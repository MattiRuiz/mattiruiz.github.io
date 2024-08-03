interface AlertaProps {
  color: string;
  mensaje: string;
}

export function ToastAlerta({ color, mensaje }: AlertaProps) {
  return (
    <>
      <div className="bg-white px-4 py-2 fixed bottom-3 right-6 rounded-md">
        <div className="flex items-center gap-x-2">
          <div className={`w-5 h-5 bg-${color}-500 rounded-full`}></div>
          <p className="mb-0.5 text-slate-950 font-medium">{mensaje}</p>
        </div>
      </div>
    </>
  );
}

export default ToastAlerta;
