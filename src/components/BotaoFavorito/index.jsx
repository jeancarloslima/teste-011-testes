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
      className={favoritado ? 'bg-red-500' : 'bg-gray-300'}
    >
      {favoritado ? 'Favoritado' : 'Favoritar'}
    </button>
  );
}