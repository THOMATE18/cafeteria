import { useState } from "react";
import CoffeeCard from "./CoffeeCard";

type Coffee = {
  id: number;
  nombre: string;
  cantidad: number;
};

export default function App() {
  const [cafes, setCafes] = useState<Coffee[]>([
    { id: 1, nombre: "Capuchino", cantidad: 0 },
    { id: 2, nombre: "Latte", cantidad: 0 },
    { id: 3, nombre: "Espresso", cantidad: 0 },
  ]);

  const pedir = (id: number) => {
    setCafes((prev) =>
      prev.map((c) => (c.id === id ? { ...c, cantidad: c.cantidad + 1 } : c))
    );
  };

  const total = cafes.reduce((suma, c) => suma + c.cantidad, 0);

  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="mb-4 text-2xl font-bold">
        Total de cafés pedidos: {total}
      </h1>
      <div className="flex flex-col gap-3">
        {cafes.map((c) => (
          <CoffeeCard
            key={c.id}
            nombre={c.nombre}
            cantidad={c.cantidad}
            onPedir={() => pedir(c.id)}
          />
        ))}
      </div>
    </div>
  );
}