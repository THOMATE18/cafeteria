type CoffeeCardProps = {
  nombre: string;
  cantidad: number;
  onPedir: () => void;
};

export default function CoffeeCard({ nombre, cantidad, onPedir }: CoffeeCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-amber-300 bg-amber-50 p-4 shadow-sm">
      <div>
        <h2 className="text-lg font-semibold text-amber-900">{nombre}</h2>
        <p className="text-sm text-amber-700">Pedidos: {cantidad}</p>
      </div>
      <button
        onClick={onPedir}
        className="rounded-md bg-amber-600 px-4 py-2 text-white hover:bg-amber-700"
      >
        Pedir
      </button>
    </div>
  );
}