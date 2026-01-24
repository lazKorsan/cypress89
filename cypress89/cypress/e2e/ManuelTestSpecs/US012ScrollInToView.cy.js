describe('Scroll to element testi  Testi', () => {
  it('LoyalFriend Scrool to element testi Testi', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes("Cannot read properties of undefined (reading 'toLowerCase')")) {
        return false;
      }
      return true;
    });
    
    cy.visit('https://qa.loyalfriendcare.com/en');
    
    
    cy.get('#collapse_ft_2 a[href="https://qa.loyalfriendcare.com/Departments/wellness"]').click();
  });
});