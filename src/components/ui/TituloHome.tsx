interface TituloProps {
  children: string;
}

export function TituloHome({ children }: TituloProps) {
  return (
    <div className="flex items-center justify-center mb-3">
      <div className="w-1/4 h-0.5 bg-white opacity-75"></div>
      <h3 className="mb-0 mx-4 text-center leading-tight">{children}</h3>
      <div className="w-1/4 h-0.5 bg-white opacity-75"></div>
    </div>
  );
}
