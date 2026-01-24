describe('DropDown Menu Testi', () => {
  it('Amazon DropDown Testi - Hover Yapmadan', () => {
    cy.visit('https://www.amazon.com/');
    

     cy.get('.icp-nav-link-inner > .nav-line-2')
          .trigger('mouseover');
    
    cy.get('#nav-flyout-icp div.nav-template').click();




  });
});
