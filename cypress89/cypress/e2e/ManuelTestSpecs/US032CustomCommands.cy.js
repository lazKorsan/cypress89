/// <reference types="cypress" />

// Uygulama hatalarını yoksay (Uncaught Exceptions)
Cypress.on('uncaught:exception', (err, runnable) => {
  // Hatanın testin başarısız olmasına neden olmasını engellemek için false döndür
  return false;
});

describe('Custom Commands Test', () => {
  it('New Sample Minİ Sciptisicaitions', () => {
    cy.visit('https://the-internet.herokuapp.com/windows');


  });
});
