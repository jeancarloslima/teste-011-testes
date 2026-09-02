import { useState } from 'react';

export function FAQItem() {
  const tpl = 'O React Testing Library simula o comportamento do usuário.';
  const [aberto, setAberto] = useState(false);

  return (
    <div className="p-4 border rounded max-w-md my-4">
      <button 
        onClick={() => setAberto(!aberto)}
        className="font-bold text-left w-full flex justify-between items-center"
      >
        O que é o React Testing Library?
        <span>{aberto ? '-' : '+'}</span>
      </button>

      {aberto && (
        <p className="mt-2 text-gray-600 text-sm">
          {tpl}
        </p>
      )}
    </div>
  );
}