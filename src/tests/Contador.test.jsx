import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Contador } from "../components/Contador";

describe('Componente Contador', () => {
    it('deve começar com zero e somar +1 ao clicar', () => {
        render(<Contador />);
        
        expect(screen.getByText("O valor é: 0")).toBeInTheDocument();

        const botaoSomar = screen.getByRole('button', { name: /somar/i });
        fireEvent.click(botaoSomar);

        expect(screen.getByText('O valor é: 1')).toBeInTheDocument();
    });
});