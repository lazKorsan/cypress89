const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("I am on the Google homepage", () => {
  cy.visit("https://www.google.com");
});

When("I search for {string}", (searchTerm) => {
  // Google'ın arama kutusu seçicisi bazen değişebilir ama genellikle 'textarea[name="q"]' veya 'input[name="q"]' dur.
  // Çerez pop-up'ı çıkarsa diye basit bir kontrol ekleyebiliriz veya doğrudan yazmayı deneyebiliriz.
  cy.get('textarea[name="q"], input[name="q"]').type(`${searchTerm}{enter}`);
});

Then("I should see results containing {string}", (searchTerm) => {
  cy.get("body").should("contain", searchTerm);
});