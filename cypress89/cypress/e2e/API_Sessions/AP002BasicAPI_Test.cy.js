/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

const requestUrl = "https://jsonplaceholder.cypress.io/comments";

describe('Simple API Test', () => {
  it('API001 Test01 - Verify Status 200 and Body', () => {

    // İsteği gönder ve yanıtı (response) yakala
    cy.request(requestUrl).then((response) => {

      // 1. Status Code Kontrolü
      expect(response.status).to.eq(200);

      // 2. Yanıtın içeriğini konsola yazdır (Hata varsa burada görürüz)
      cy.log('Response Body Length: ' + response.body.length);
      console.log(response.body); // Tarayıcı konsoluna detaylı basar

      // 3. Basit bir veri kontrolü (Örnek: İlk yorumun ID'si 1 olmalı)
      if(response.body.length > 0) {
          expect(response.body[0]).to.have.property('id', 111);
      }
    });

  });
});
