describe('Amazon Arama Testi', () => {
  it('Ürün filtreleme testi', () => {
    // Hataları yakalamak için event listener
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes("Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.")) {
        return false; // Bu hatayı yoksay
      }
      return true; // Diğer hataları yakala
    });
    
    // Amazon sayfasına git
    cy.visit('https://www.amazon.com/s?k=dee&crid=DBZA56K94FVZ&sprefix=dee%2Caps%2C251&ref=nb_sb_noss_2');
    
    
      });
    
    
      });
  });
});