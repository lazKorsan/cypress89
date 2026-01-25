
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

import LoyalHomePage from '../Pages/LoyalHomePage.cy';
import LoyalPages from '../Pages/LoyalPages.cy';

const loyalHomePage = new LoyalHomePage();
const loyalPages = new LoyalPages();

describe('PAGES Class Kullanimi', () => {
  it('US046 TEST01', () => {

    loyalHomePage.visitHomePage();
    loyalPages.getURLLogin();
    loyalPages.getUserMail();
    loyalPages.getUserPassword();
    loyalPages.getSignInButton();
    loyalPages.getLogoutButton();

  });
});
