describe('LoyalFriendCare Testi', () => {
  it('Siteye giriş yap', () => {
    cy.visit('https://qa.loyalfriendcare.com/en')
    
    
    
    
    cy.get('#top_menu a[href="https://qa.loyalfriendcare.com/en/register"]').click();
    cy.get('div:nth-child(2) > label').click();
    cy.get('[name="name"]').click();
    cy.get('[name="name"]').type('lazBakkal');
    cy.get('div:nth-child(3) label').click();
    cy.get('[name="email"]').click();
    cy.get('[name="email"]').type('lazBakkal@gmail.com');
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').type('Query.com2026');
    cy.get('[name="password_confirmation"]').click();
    cy.get('[name="password_confirmation"]').type('Query.com2026');
    cy.get('button.btn').click();




  })
})// npx cypress open --spec "cypress/e2e/1-getting-started/US001.cy.js"