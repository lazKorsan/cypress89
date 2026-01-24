/// <reference types="cypress" />

// Uygulama hatalarını yoksay
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

// Varsayılan kullanıcı bilgileri
const defaultEmail = 'lazKorsan240120262147@gmail.com';
const defaultPassword = 'Query.2026';

// Fonksiyonu export ediyoruz. Parametre verilmezse varsayılanları kullanır.
export const loginToWebsite = (email = defaultEmail, password = defaultPassword) => {
  cy.visit('https://qa.loyalfriendcare.com/en');

  cy.get('#top_menu a[href="https://qa.loyalfriendcare.com/en/login"]').click();
  cy.get('[name="email"]').click().type(email);
  cy.get('[name="password"]').click().type(password);
  cy.get('button.btn').click();
};
