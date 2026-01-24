/// <reference types="cypress" />

// Metodu import et
import { loginToWebsite } from '../Methods/LoyalMethods';

describe('CustomCommands', () => {
  it('Custom Commands Example Test', () => {

    
    // Giriş metodunu parametresiz çağır (Varsayılan bilgilerle giriş yapar)
    loginToWebsite();
    
    cy.get('#top_menu a[href="https://qa.loyalfriendcare.com/en/logout"]').click();

  });
});
