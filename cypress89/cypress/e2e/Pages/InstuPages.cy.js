/// <reference types="cypress" />

class InstuPage {
  getUrlInstu() {
    cy.visit('https://qa.instulearn.com/');
  }


}

export default new InstuPage();
