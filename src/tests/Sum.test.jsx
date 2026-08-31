import { expect, test } from "vitest";
import Sum from "../components/Sum";

test('Adicionar 1 + 2 e resultar em 3', () => {
    expect(Sum(1, 2)).toBe(3);
});