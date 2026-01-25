/// <reference types="cypress" />

// Uygulama hatalarını yoksay
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

// TestData.js dosyasından InstuData'yı import et
import { InstuData } from '../../../TestData';

// 1. Siteye Gitme Metodu (Yeni Eklenen)
export const visitInstu = () => {
  cy.visit(InstuData.instuUrl);
};

// 2. Login Metodu
export const loginToInstu = (email = InstuData.email, password = InstuData.password) => {
  // Eğer zaten login sayfasında değilsek login sayfasına git
  cy.url().then(url => {
    if(!url.includes('/login')) {
       cy.visit(InstuData.instuLoginUrl);
    }
  });

  cy.get('[name="email"]').click().type(email);
  cy.get('[name="password"]').click().type(password);
  cy.get('#app button.btn-block').click();
};
