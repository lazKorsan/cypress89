/// <reference types="cypress" />
import { LoyalData } from '../../../TestData';
import { loginToWebsite } from '../Methods/LoyalMethods';
import LoyalHomePage from '../POM/LoyalHomePage.cy'; // Düzgün içe aktarma

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Test Data ile Url girişi', () => {
  it('US045 Test01', () => {
    const loyalHomePage = new LoyalHomePage(); // Sınıfın örneğini oluştur
    loyalHomePage.visitHomePage(); // Metodu çağır
    loginToWebsite();
  });
});
// 55:05