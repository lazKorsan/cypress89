// /<reference types="cypress" />

describe('CheckBox testi', () => {
  beforeEach(() => {
    // Her test öncesinde çalışacak olan kod
    cy.log('Test başlatılıyor...');

    // Belirli bir URL'yi yoksay
    cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204 }).as('ignoreOptimizely');

    cy.visit('https://the-internet.herokuapp.com/checkboxes');
    cy.wait('@ignoreOptimizely');
  });

  it('HerokuApp CheckBox testi', () => {
    cy.log('Checkbox kontrol testi başlıyor...');

    // Checkbox'ları kontrol etme
    cy.get('input[type="checkbox"]').each(($checkbox, index) => {
      cy.wrap($checkbox).check(); // Tüm checkbox'ları işaretle
      cy.log(`Checkbox ${index + 1} işaretlendi.`);
    });

    // Belirli checkbox'ları uncheck etme ve kontrol etme
    cy.get('#checkboxes input:nth-child(1)').uncheck();
    cy.log('Checkbox 1 işareti kaldırıldı.');


    cy.log('Checkbox 2 işareti kaldırıldı.');

    cy.get('#checkboxes input:nth-child(3)').check();
    cy.log('Checkbox 3 işaretlendi.');

    cy.get('#checkboxes input:nth-child(1)').check();
    cy.log('Checkbox 1 tekrar işaretlendi.');

    // Son durum kontrolü
    cy.get('#checkboxes input').each(($checkbox, index) => {
      const checked = $checkbox.checked ? 'işaretli' : 'işaretsiz';
      cy.log(`Checkbox ${index + 1} durumu: ${checked}`);
    });

    cy.log('Checkbox kontrol testi tamamlandı.');
  });
});
