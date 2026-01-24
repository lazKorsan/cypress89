describe('Loyal Friend Login Method Hazırlığı', () => {
  it('LoyakFriend lOGİN Testi', () => {
    // Visit the registration page
    cy.visit('https://qa.loyalfriendcare.com/en');
    
    // lazKorsan11250@gmail.com
    // password : Loyal!2026
    
    
    cy.get('#top_menu a[href="https://qa.loyalfriendcare.com/en/login"]').click();
    cy.get('[name="email"]').click();
    cy.get('[name="email"]').type('lazKorsan11250@gmail.com');
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').type('Loyal!2026');
    cy.get('label[for="checkbox1"]').click();
    cy.get('[name="remember"]').check();
    cy.get('button.btn').click();
    cy.get('#top_menu li:nth-child(1) a.btn_add').should('have.text', ' lazKorsan');


  });
});
