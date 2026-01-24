import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginToInstu } from "../../Methods/InstuMethods";

// NOT: "Given Kullanıcı {string} sitesine gider" adımı
// DemoqaSteps.js dosyasında tanımlı olduğu için buraya eklemiyoruz.

Then("Instu Kullanicisi gercek verilerle siteye giris yapar", () => {
  // InstuMethods.js dosyasındaki hazır metodu kullanıyoruz
  loginToInstu();
});

// Feature dosyasında "And" yazsa bile burada "Then" kullanabiliriz.
// Cucumber bunu otomatik olarak eşleştirir.
Then("Instu Kullanicisi sistemden cikis yapar", () => {
  cy.get('#panel-sidebar-scroll a[href="/logout"] span.text-dark-blue').click();
});
