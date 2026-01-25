/// <reference types="cypress" />

import { LoyalData } from '../../../TestData';

Cypress.on('uncaught:exception', (err, runnable) => {

  return false;
});

describe('Test Data ile Url girisi', () => {
  it('US045 Test01', () => {
    cy.visit(LoyalData.loyalUrl);


  });
});
