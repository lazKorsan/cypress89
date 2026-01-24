describe('template spec', () => {
  beforeEach(() => {
    // Service Worker'ları devre dışı bırak
    if (window.navigator && navigator.serviceWorker) {
      navigator.serviceWorker.getRegistrations()
        .then((registrations) => {
          registrations.forEach((registration) => {
            registration.unregister();
          });
        });
    }
  });

  it('passes', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('hello');
    });

    cy.get('#content li:nth-child(3) button').click();
    cy.get('#result').should('contain', 'You entered: hello');
  });
});