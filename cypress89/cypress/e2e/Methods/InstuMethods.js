/// <reference types="cypress" />

// Uygulama hatalarını yoksay
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

// TestData.js dosyasından InstuData'yı import et
import { InstuData } from '../../../TestData';

// Fonksiyonu export ediyoruz.
// Eğer parametre verilmezse, TestData içindeki varsayılan değerleri kullanır.
export const loginToInstu = (email = InstuData.email, password = InstuData.password) => {
  cy.visit('https://qa.instulearn.com/login');

  // Parametre olarak gelen email ve password'ü kullanıyoruz
  cy.get('[name="email"]').click().type(email);
  cy.get('[name="password"]').click().type(password);
  cy.get('#app button.btn-block').click();
};
