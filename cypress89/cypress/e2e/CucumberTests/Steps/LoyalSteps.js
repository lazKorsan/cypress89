import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginToWebsite } from "../../Methods/LoyalMethods";

// DUPLICATE STEP UYARISI:
// "Kullanıcı {string} sitesine gider" adımı DemoqaSteps.js içinde zaten tanımlı olabilir.
// Eğer "Multiple step definitions" hatası alırsanız, aşağıdaki Given bloğunu silin veya yorum satırına alın.
/*
Given("Kullanıcı {string} sitesine gider", (url) => {
  cy.visit(url);
});
*/

Then("Kullanici gercek verilerle siteye giris yapar", () => {
  // LoyalMethods.js dosyasındaki hazır metodu kullanıyoruz
  loginToWebsite();
});

Then("Kullanici siteden cıkıs yapar", () => {
  // Çıkış butonuna tıkla (Logout)
  // Seçiciyi sitenize göre güncelledim, genellikle dropdown içinde veya navbar'da olur

  cy.get('#top_menu a[href="https://qa.loyalfriendcare.com/en/logout"]').click();

});
