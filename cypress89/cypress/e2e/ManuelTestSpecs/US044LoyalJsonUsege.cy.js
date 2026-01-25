/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Loyal JSON package kullanımı', () => {
  before(function() {
    // 'Loyal.json' dosyasını yükle
    cy.fixture('Loyal').then((data) => {
      this.data = data; // JSON verisini this.data ile sakla
    });
  });

  it('US044 _ Test01', () => {
    cy.visit('qa.loyalfriendcare.com');

    // JSON verisini kullan
    // Örneğin, bir elemente veri yazdırmak için
   // cy.get('#someElement').type(this.data.someField); // 'someField' JSON içindeki bir alan
  });
});

// 21:27