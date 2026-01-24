/// <reference types="cypress" />

// Metodu doğru ismiyle import et
import { LoyalSearchMethod } from '../Methods/LoyalMethods';

describe('Search Method', () => {
  it('search method ', () => {

    // Metodu "re" parametresi ile çağır
    LoyalSearchMethod("re");
    LoyalSearchMethod("ra")

  });
});
