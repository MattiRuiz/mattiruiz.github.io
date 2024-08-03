interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: Props) {
  return (
    <input
      className="block w-full bg-slate-200 text-slate-900 px-3 py-2 rounded-md text-sm placeholder-slate-600 mb-3"
      {...props}
    />
  );
}
