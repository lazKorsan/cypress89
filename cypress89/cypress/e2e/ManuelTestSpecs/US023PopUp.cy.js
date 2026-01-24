describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    let promptStub;

    cy.window().then((win) => {
      promptStub = cy.stub(win, 'prompt').callsFake((message) => {
        expect(message).to.exist; // Prompt mesajını kontrol et
        return 'hello';
      });
    });

    cy.get('#content li:nth-child(3) button').click()
      .then(() => {
        // Prompt'un çağrıldığını doğrula
        expect(promptStub).to.be.called;
      });

    cy.get('#result').should('have.text', 'You entered: hello');
  });
});