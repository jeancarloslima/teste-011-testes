describe('Teste E2E do Acoredeão FAQ', () => {
    it('deve expandir a resposta ao clicar na pergunta', () => {
        cy.visit('http://localhost:5173');

        cy.contains('O React Testing Library simula').should('not.exist');

        cy.contains('O que é o React Testing Library?').click();

        cy.contains('O React Testing Library simula').should('be.visible');
    });
});