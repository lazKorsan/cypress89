/// <reference types="cypress" />

// TestData.js dosyasından LoyalData'yı import et
import { LoyalData } from '../../../TestData';

describe('Value Class Kullanımı', () => {
  it('Value Class verileri ile login testi', () => {

    // Siteye git
    cy.visit('https://qa.loyalfriendcare.com/en');

    // Login sayfasına git
    cy.get('#top_menu a[href="https://qa.loyalfriendcare.com/en/login"]').click();

    // LoyalData içindeki verileri kullan
    cy.get('[name="email"]').type(LoyalData.email);
    cy.get('[name="password"]').type(LoyalData.password);

    // Giriş yap
    cy.get('button.btn').click();

  });
});
