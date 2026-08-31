import { useState } from 'react';

export function BotaoFavorito({ onToggle }) {
  const [favoritado, setFavoritado] = useState(false);

  const handleClick = () => {
    const novoEstado = !favoritado;
    setFavoritado(novoEstado);
    if (onToggle) onToggle(novoEstado);
  };

  return (
    <button 
      onClick={handleClick}
      className={`p-4 rounded-md hover:cursor-pointer duration-300 ${favoritado ? 'bg-red-500 hover:bg-red-400' : 'bg-gray-300 hover:bg-gray-200'}`}
    >
      {favoritado ? 'Favoritado' : 'Favoritar'}
    </button>
  );
}