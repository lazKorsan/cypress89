describe('JavaScript Alerts Test', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
  });

  it('should handle JS Alert', () => {
    // 1. JS Alert butonuna tıkla
    cy.get('li:nth-child(1) button').click();

    // 2. Uyarıyı kontrol et
    cy.on('window:alert', (text) => {
      expect(text).to.equal('I am a JS Alert');
    });

    // 3. Uyarıyı kapat
    cy.on('window:alert', () => true);
  });

  it('should handle JS Confirm', () => {
    // 1. JS Confirm butonuna tıkla
    cy.get('li:nth-child(2) button').click();

    // 2. Uyarıyı kontrol et
    cy.on('window:confirm', (text) => {
      expect(text).to.equal('I am a JS Confirm');
      return true; // Onayla
    });
  });

  it('should handle JS Prompt', () => {
    // 1. JS Prompt butonuna tıkla
    cy.get('li:nth-child(3) button').click();

    // 2. Uyarıyı kontrol et
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('Cypress Test');
    });

    // 3. Uyarıyı kapat
    cy.on('window:prompt', (text) => {
      expect(text).to.equal('I am a JS prompt');
      return 'Cypress Test'; // Girdi
    });

    // 4. Sonucu kontrol et
    cy.get('#result').should('contain', 'You entered: Cypress Test');
  });
});
