describe('Fluxo do Sucador de País e Clima', () => {
  it('Deve buscar o Japão e exibir as informações e temperatura', () => {
    cy.visit('http://localhost:5173');

    cy.get('input[placeholder="Brazil"]').clear().type('Japan');

    cy.contains('Japan').should('be.visible');
    cy.contains('Capital: Tokyo').should('be.visible');

    cy.contains('Clima em Tokyo').should('be.visible');
  });
});