/// <reference types="cypress" />

// Metodu doğru dosyadan import et
import { loginToInstu } from '../Methods/InstuMethods';

describe('CustomCommands', () => {
  it('Custom Commands Example Test', () => {

    
    // Giriş metodunu parametresiz çağır (TestData'daki varsayılan bilgilerle giriş yapar)
    loginToInstu();
    
    cy.get('#panel-sidebar-scroll a[href="/logout"] span.text-dark-blue').click();

  });
});
