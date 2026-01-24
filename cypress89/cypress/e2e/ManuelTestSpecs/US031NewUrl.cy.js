/// <reference types="cypress" />

describe('MultipleWindows', () => {
  it('New Url', () => {
    cy.visit('https://the-internet.herokuapp.com/windows');

    // target="_blank" özelliğini kaldırarak linkin aynı sekmede açılmasını sağla
    cy.get('.example > a').invoke('removeAttr', 'target').click();

    // Yeni sayfada olduğumuzu doğrula (URL veya içerik kontrolü)
    cy.url().should('include', '/windows/new');
    cy.get('h3').should('have.text', 'New Window');
  });
});
