const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("I open the Google homepage", () => {
  cy.visit("https://www.google.com");
  // Çerez uyarısı çıkarsa kabul et butonuna basmak gerekebilir, ancak basitlik için şimdilik geçiyoruz.
  // Gerekirse: cy.get('#L2AGLb').click(); gibi bir kod eklenebilir.
});

When("I search for {string}", (keyword) => {
  cy.get("textarea[name='q']").type(keyword + "{enter}");
});

Then("I should see results related to {string}", (keyword) => {
  cy.get("body").should("contain", keyword);
});
