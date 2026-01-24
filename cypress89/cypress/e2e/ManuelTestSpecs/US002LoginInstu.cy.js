describe('InstuLearn Register Testi', () => {
  it('InstuLearn Register Testi', () => {
    // Visit the registration page
    cy.visit('https://qa.instulearn.com/');
    
    
    cy.get('#app a.mr-10').click();
    cy.get('[name="email"]').click();
    cy.get('[name="email"]').type('lazKorsan10825@gmail.com');
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').type('Query.2026');
    cy.get('#app button.btn-block').click();




  });
});
