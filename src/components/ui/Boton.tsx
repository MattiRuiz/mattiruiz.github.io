interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Boton({ children, ...props }: Props) {
  return (
    <button
      className="px-3.5 py-2 bg-slate-700 border border-slate-700 hover:bg-slate-800 disabled:bg-slate-600 text-white rounded-md font-medium"
      {...props}
    >
      {children}
    </button>
  );
}
