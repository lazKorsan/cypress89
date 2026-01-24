describe('DropDown Menu Testi', () => {
  it('Amazon DropDown Testi - Hover Yapmadan', () => {
    cy.visit('https://www.amazon.com/');

    // Cookie popup'ı kapat (varsa)
    cy.get('body').then(($body) => {
      if ($body.find('#sp-cc-accept').length > 0) {
        cy.get('#sp-cc-accept').click();
      }
    });

    // 1. YÖNTEM: JavaScript ile CSS değiştir
    cy.get('.icp-nav-link-inner > .nav-line-1').then(($el) => {
      // Dropdown'ı açan parent elementi bul
      const parent = $el.closest('#icp-nav-flyout');

      // CSS ile dropdown'ı görünür yap
      cy.wrap(parent)
        .invoke('css', 'display', 'block')
        .invoke('css', 'opacity', '1')
        .invoke('css', 'visibility', 'visible');

      // Amazon'un hover class'ını ekle
      cy.wrap(parent).invoke('addClass', 'nav-flyout-show');
    });

    // Dropdown içeriğini kontrol et
    cy.get('#nav-flyout-icp', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'English')
      .and('contain', 'USD');
  });
});