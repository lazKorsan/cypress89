describe('template spec', () => {
  it('passes', () => {
    cy.request('GET', 'https://the-internet.herokuapp.com/javascript_alerts')
      .its('status')
      .should('eq', 200);

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    // Window.prompt metodunu stub'la (sahte fonksiyonla değiştir)
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('hello');
    });

    // 3. butona tıkla (prompt butonu)
    cy.get('#content li:nth-child(3) button').click();

    // Sonucun "hello" içerdiğini doğrula
    cy.get('#result').should('contain', 'You entered: hello');
  });
});