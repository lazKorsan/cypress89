describe('Scroll to element testi', () => {
  it('LoyalFriend Scroll to element testi', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes("Cannot read properties of undefined (reading 'toLowerCase')")) {
        return false;
      }
      return true;
    });

    cy.visit('https://qa.loyalfriendcare.com/en');

    // Sayfanın sonuna scroll yap
    cy.scrollTo('bottom');

    // Belirli bir elemana scroll yap
    //cy.get('selector').scrollIntoView(); // 'selector' kısmını hedeflediğiniz elementin seçici ile değiştirin

    // İsterseniz burada elementle ilgili diğer testleri de ekleyebilirsiniz
  });
});
