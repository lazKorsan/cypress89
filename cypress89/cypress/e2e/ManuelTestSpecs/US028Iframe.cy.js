describe('LoyalFriendCare Testi', () => {
  it('Siteye giriş yap', () => {


      // Konsol hatalarını görmezden gel
      Cypress.on('uncaught:exception', (err, runnable) => {
        // Optimizely hatalarını görmezden gel
        if (err.message.includes('optimizely') || err.message.includes('Optimizely')) {
          return false; // Testi durdurmaz
        }
        return true; // Diğer hatalarda testi durdur
      });

    cy.visit('https://the-internet.herokuapp.com/iframe')



    cy.get('div.tox-icon svg').click();

    cy.frameLoaded('#mce_0_ifr');

    cy.iframe().find('p').clear();


    
    
    
    
    
    
    








  })
})// npx cypress open --spec "cypress/e2e/1-getting-started/US001.cy.js"