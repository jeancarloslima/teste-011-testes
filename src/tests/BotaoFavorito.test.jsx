import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { BotaoFavorito } from '../components/BotaoFavorito';

describe('Componente BotaoFavorito', () => {
  it('deve renderizar no estado inicial e alternar o texto ao ser clicado', () => {
    const handleToggleMock = vi.fn();

    render(<BotaoFavorito onToggle={handleToggleMock} />);

    const botao = screen.getByRole('button', { name: /favoritar/i });
    expect(botao).toBeInTheDocument();

    fireEvent.click(botao);

    expect(screen.getByRole('button', { name: /favoritado/i })).toBeInTheDocument();
    expect(handleToggleMock).toHaveBeenCalledWith(true);
  });
});