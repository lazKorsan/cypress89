    ///<reference types="cypress" />

describe('InstuLearn Register Testi', () => {
  it('InstuLearn Register Testi', () => {
    // Visit the registration page
    cy.visit('https://qa.instulearn.com/');
    
    // Click on the register link
    cy.get('#app a[href="/register"]').click();
    
    // Select the teacher role
    
    cy.get('#app label[for="role_teacher"]').click();
    //cy.get('#role_teacher').check();
    
    // Fill in the email field
    cy.get('[name="email"]').click();
    cy.get('[name="email"]').type('lazKorsan10825@gmail.com');
    
    // Fill in the full name
    cy.get('#app [name="full_name"]').type('lazKorsan');
    
    // Fill in the password and confirmation
    cy.get('[name="password"]').type('Query.2026');
    cy.get('[name="password_confirmation"]').type('Query.2026');
    
    

    cy.get('#app label.custom-control-label').click();

    cy.get('#app button.btn-block').click();
  });
});
