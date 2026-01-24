/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('preCondition Cucumber Scenarioi Outline', () => {
  it('Tekrar eden arama testi ve ürün sayısı bulma', () => {
    cy.visit('https://qa.loyalfriendcare.com/en');

    // Arama kutusuna tıkla ve yaz (force: true ile kayma sorununu aşıyoruz)
    cy.get('#hero_video [name="search"]').click({force: true});
    cy.get('#hero_video [name="search"]').type('ri{enter}');

    // Ürünlerin listelenmesini bekle (URL değişimi veya bir elementin görünmesi)
    cy.url().should('include', 'search');

    // Ürün sayısını bul ve yazdır
    // Not: '.strip' class'ı her bir ürün kartını temsil ediyorsa:
    cy.get('.strip').should('have.length.gt', 0) // En az 1 ürün geldiğini doğrula
      .then(($products) => {
        const productCount = $products.length;
        cy.log('Bulunan Ürün Sayısı: ' + productCount);

        // İsterseniz terminale de yazdırabilirsiniz
        console.log('Bulunan Ürün Sayısı: ' + productCount);
      });

    // Alternatif: Eğer '.strip' çalışmazsa, h3 başlıklarını sayabiliriz
    /*
    cy.get('.wrapper > h3 > a').then(($links) => {
       cy.log('Bulunan Başlık Sayısı: ' + $links.length);
    });
    */
  });
});
