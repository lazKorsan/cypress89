describe('template spec', () => {
  it('passes', () => {
    // Optimizely isteklerini engelle
    cy.intercept('GET', '**/log.optimizely.com/**', {
      statusCode: 200,
      body: {}
    }).as('optimizely');

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    // Window.prompt metodunu stub'la
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('hello');
    });

    // 3. butona tıkla (prompt butonu)
    cy.get('#content li:nth-child(3) button').click();

    // Sonucun "hello" içerdiğini doğrula
    cy.get('#result').should('contain', 'You entered: hello');
  });
});