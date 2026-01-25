/// <reference types="cypress" />
import { LoyalData } from '../../../TestData';

class LoyalHomePage {
  visitHomePage() {
    return cy.visit(LoyalData.loyalUrl);
  }
}

export default LoyalHomePage;
