/// <reference types="cypress" />

// yeni window açılmasını engelleyen kod parçası
// cy.get('.example > a').invoke('removeAttr', 'target').click();

describe('MultipleWindows', () => {
  it('Attiribute Remove', () => {
    cy.visit('https://the-internet.herokuapp.com/windows');
    
    cy.get('.example > a').invoke('removeAttr', 'target').click();

    cy.get('h3').should('have.text', 'New Window');


  })
})