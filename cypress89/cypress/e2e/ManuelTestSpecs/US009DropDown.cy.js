describe('DropDown Menu Testi', () => {
  it('Amazon DropDown Testi - Hover Yapmadan', () => {
    cy.visit('https://www.amazon.com/');

    // Dropdown menüsünü açmak için gerekli öğeye tıklayın
    cy.get('#nav-link-accountList').click(); // Örneğin, hesap menüsü

    // Dropdown menüsündeki öğeyi kontrol edin
    cy.get('.nav-dropdown').should('be.visible'); // Dropdown menüsünün görünür olduğunu kontrol et
  });
});
