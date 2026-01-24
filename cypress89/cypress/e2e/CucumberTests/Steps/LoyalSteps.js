import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
// LoyalSearchMethod'u da import listesine ekliyoruz
import { loginToWebsite, LoyalSearchMethod } from "../../Methods/LoyalMethods";

// DUPLICATE STEP UYARISI:
// "Kullanıcı {string} sitesine gider" adımı DemoqaSteps.js içinde zaten tanımlı olabilir.
/*
Given("Kullanıcı {string} sitesine gider", (url) => {
  cy.visit(url);
});
*/

Then("Kullanici gercek verilerle siteye giris yapar", () => {
  loginToWebsite();
});

Then("Kullanici siteden cıkıs yapar", () => {
  cy.get('#top_menu a[href="https://qa.loyalfriendcare.com/en/logout"]').click();
});

// Yeni eklenen arama adımı
// {string} ifadesi, feature dosyasındaki "re" gibi tırnak içindeki değerleri yakalar
Then("Loyal Kullanicisi arama kutusunda {string} aratir", (aranacakKelime) => {
  LoyalSearchMethod(aranacakKelime);
});
