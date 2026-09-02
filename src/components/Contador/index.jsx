import { useState } from 'react';

export function Contador() {
  const [valor, setValor] = useState(0);

  return (
    <div>
      <h2>O valor é: {valor}</h2>
      <button onClick={() => setValor(valor + 1)}>Somar</button>
      <button onClick={() => setValor(valor - 1)}>Subtrair</button>
    </div>
  );
}