describe('DropDown Menu Testi', () => {
  it('LoyalFriend DropDown Testi', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes("Cannot read properties of undefined (reading 'toLowerCase')")) {
        return false;
      }
      return true;
    });

    cy.visit('https://qa.loyalfriendcare.com/en');

    // 1. Önce hover yap (real-events kullan)
    cy.get(':nth-child(1) > :nth-child(3) > span > a')
      .realHover(); // trigger('mouseover') yerine realHover kullan

    // 2. Hover sonrası dropdown'ın açılmasını bekle
    cy.wait(1000);



    // 4. Dermatoloji bölümüne tıklama
    cy.get('#menu a[href="https://qa.loyalfriendcare.com/Departments/dermatology"]')
      .should('be.visible')
      .click();

    // 5. Sayfanın yüklendiğini doğrula
    cy.url().should('include', '/dermatology');
  });
});