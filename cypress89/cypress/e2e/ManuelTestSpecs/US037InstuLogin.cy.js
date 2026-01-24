/// <reference types="cypress" />

// TestData.js dosyasından LoyalData'yı import et
import { InstuData } from '../../../TestData';


Cypress.on('uncaught:exception', (err, runnable) => {

  return false;
});

describe('preCondition Login Methods ', () => {
  it('Login Methods preparation ', () => {
    cy.visit('https://qa.instulearn.com/login');
    
    cy.get('[name="email"]').click();
    cy.get('[name="email"]').type(InstuData.email);
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').type(InstuData.password);
    cy.get('#app button.btn-block').click();




  });
});
