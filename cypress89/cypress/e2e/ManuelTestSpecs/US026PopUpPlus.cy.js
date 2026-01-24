// tum Hatları görmezden gel

describe('template spec', () => {
  beforeEach(() => {
    // Konsol hatalarını görmezden gel
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Optimizely hatalarını görmezden gel
      if (err.message.includes('optimizely') || err.message.includes('Optimizely')) {
        return false; // Testi durdurmaz
      }
      return true; // Diğer hatalarda testi durdur
    });
  });

  it('passes', () => {
    // Tüm XHR isteklerindeki hataları görmezden gel
    cy.intercept('**', (req) => {
      if (req.url.includes('optimizely.com')) {
        req.reply({}); // Boş yanıt döndür
      }
    });

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('hello');
    });

    cy.get('#content li:nth-child(3) button').click();
    cy.get('#result').should('contain', 'You entered: hello');
  });
});