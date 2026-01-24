// /<reference types="cypress" />

describe('CheckBox testi', () => {
  it('HerokuApp CheckBox testi', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes("Cannot read properties of undefined (reading 'toLowerCase')")) {
        return false;
      }
      return true;
    });

    // Belirli bir URL'yi yoksay
    cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204 }).as('ignoreOptimizely');

    cy.visit('https://the-internet.herokuapp.com/checkboxes');

    // Yoksayma işleminin çalıştığını kontrol etmek için bekleyebilirsiniz
    cy.wait('@ignoreOptimizely');

    // Checkbox'ları kontrol etme
    cy.get('input[type="checkbox"]').each(($checkbox) => {
      cy.wrap($checkbox).check(); // Tüm checkbox'ları işaretle
    });
  });
});
