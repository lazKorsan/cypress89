/// <reference types="cypress" />


Cypress.on('uncaught:exception', (err, runnable) => {

  return false;
});

describe('CustomCommands', () => {
  it('Custom Commands Example Test', () => {
    cy.visit('https://qa.loyalfriendcare.com/en');
    
    
    
    
    cy.get('#top_menu a[href="https://qa.loyalfriendcare.com/en/login"]').click();
    cy.get('[name="email"]').click();
    cy.get('[name="email"]').type('lazKorsan240120262147@gmail.com');
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').type('Query.2026');
    cy.get('button.btn').click();




  });
});
