/// <reference types="cypress" />

// Uygulama hatalarını yoksay (Uncaught Exceptions)
Cypress.on('uncaught:exception', (err, runnable) => {
  // Hatanın testin başarısız olmasına neden olmasını engellemek için false döndür
  return false;
});

describe('Custom Commands Test', () => {
  it('New Sample Minİ Sciptisicaitions', () => {
    cy.visit('https://qa.loyalfriendcare.com/en');
    
    
    cy.get('#top_menu a[href="https://qa.loyalfriendcare.com/en/register"]').click();
    cy.get('[name="name"]').click();
    cy.get('[name="name"]').type('lazKorsan');
    cy.get('[name="email"]').click();
    cy.get('[name="email"]').type('lazKorsan240120262147@gmail.com');
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').type('Query.2026');
    cy.get('[name="password_confirmation"]').click();
    cy.get('[name="password_confirmation"]').type('Query.2026');
    cy.get('button.btn').click();
    
    
  });
});
