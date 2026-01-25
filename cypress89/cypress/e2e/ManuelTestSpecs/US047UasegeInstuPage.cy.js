/// <reference types="cypress" />

// Metodu import et
import { visitInstu } from '../Methods/InstuMethods';

describe('Method Kullanimi', () => {
  it('US047 TEST01 - Siteye Gitme', () => {

    // Metodu çağır (TestData'daki URL'e gider)
    visitInstu();

  });
});
