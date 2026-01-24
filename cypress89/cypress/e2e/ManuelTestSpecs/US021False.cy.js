describe('template spec', () => {



  it('passes', () => {

  cy.request('GET', 'https://the-internet.herokuapp.com/javascript_alerts')
    .its('status')
    .should('eq', 200); // Beklenen durumu kontrol et




    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    
    
    cy.get('#content li:nth-child(2) button').click();

    cy.log('Alert Butona Basıldı');

      // Intercept the confirm dialog and return false to simulate clicking "Cancel"
        cy.on('window:confirm', () => {
          return false;
        });

        // Check that the result text is as expected
        cy.get('#result').should('have.text', 'You clicked: Cancel');

        cy.log('Test completed successfully');




  });
});
