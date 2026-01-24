///<reference types="cypress" />

describe('Amazon dil değişikliği testi', () => {
  it('dil değişikliğini başarılı bir şekilde yapar', () => {
    // Amazon ana sayfasına git
    cy.visit('https://www.amazon.com/');

    // Dil değiştirme bağlantısını bul ve tıkla
    cy.get('#nav-flyout-icp > .nav-template > #icp-flyout-mkt-change > .nav-text > .icp-mkt-change-lnk')
      .should('be.visible') // Elemanın görünür olduğunu kontrol et
      .click();

    // Dropdown menüsünü aç ve bir dil seç
    cy.get('.a-dropdown-container > .a-button > .a-button-inner > .a-button-text')
      .should('be.visible')
      .click();

    // İlgili dil seçeneğini tıkla (örneğin, Türkçe)
    cy.get('#icp-dropdown_20') // Bu ID'yi güncellediğinizden emin olun
      .should('be.visible')
      .click();

    // Değişiklikleri kaydet
    cy.get('#icp-save-button > .a-button-inner > .a-button-input')
      .should('be.visible')
      .click();

    // Başarılı bir dil değişikliği için bir onay mesajı veya başka bir kontrol ekleyebilirsiniz
  });
});
