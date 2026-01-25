/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Multiple File Upload Exercises', () => {
  it('Multiple FileUpload', () => {
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
    
    // Yüklenecek dosyaların isimleri (Bu dosyaların cypress/fixtures klasöründe olması gerekir)
    const filePath1 = "a2.png";
    const filePath2 = "a3.png";
    const filePath3 = "a4.png";

    // Modern yöntem: .selectFile() kullanımı
    // Tek dosya yükleme:
    // cy.get('#filesToUpload').selectFile('cypress/fixtures/' + filePath1);

    // Çoklu dosya yükleme (Array içinde verilir):
    cy.get('#filesToUpload').selectFile([
      'cypress/fixtures/' + filePath1,
      'cypress/fixtures/' + filePath2,
      'cypress/fixtures/' + filePath3
    ]);

    // Yüklemenin başarılı olduğunu doğrula
    cy.get('#fileList').should('contain', filePath1);
    cy.get('#fileList').should('contain', filePath2);
  });
});
