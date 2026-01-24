import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("Kullanıcı {string} sitesine gider", (url) => {
  cy.visit(url);
});
