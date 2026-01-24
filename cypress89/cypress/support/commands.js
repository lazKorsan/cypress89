// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

/**
 * Custom command for logging in.
 * @example cy.login('myuser', 'mypassword')
 */
Cypress.Commands.add('login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/login'); // Login sayfanızın URL'si
    cy.get('#username').type(username); // Kullanıcı adı input'unuzun seçicisi
    cy.get('#password').type(password); // Şifre input'unuzun seçicisi
    cy.get('#login-btn').click(); // Login butonunuzun seçicisi
    cy.url().should('not.include', '/login'); // Login sonrası yönlendirmeyi doğrula
  });
});

/**
 * Custom command for selecting an option from a custom dropdown (click to open).
 * @param {string} triggerSelector - Dropdown'ı açan elementin seçicisi
 * @param {string} optionText - Seçilecek seçeneğin metni
 * @example cy.selectDropdown('#dropdown-menu', 'Option 1')
 */
Cypress.Commands.add('selectDropdown', (triggerSelector, optionText) => {
  cy.get(triggerSelector).click(); // Dropdown'ı aç
  cy.contains(optionText).click(); // Seçeneği bul ve tıkla
});

/**
 * Custom command for selecting an option from a standard HTML <select> element.
 * @param {string} selector - The selector for the <select> element
 * @param {string} valueOrText - The value or text to select
 * @example cy.selectOption('#cars', 'volvo')
 */
Cypress.Commands.add('selectOption', (selector, valueOrText) => {
  cy.get(selector).select(valueOrText);
});

/**
 * Custom command for hovering over an element using real events.
 * Requires cypress-real-events plugin.
 * @example cy.get('.menu-item').hover()
 */
Cypress.Commands.add('hover', { prevSubject: true }, (subject) => {
  cy.wrap(subject).realHover();
});

/**
 * Custom command to hover over an element and then click a sub-element (useful for hover menus).
 * @param {string} hoverSelector - The selector to hover over
 * @param {string} clickSelector - The selector to click after hovering (e.g., a submenu item)
 * @example cy.hoverAndClick('.menu-item', '.submenu-item')
 */
Cypress.Commands.add('hoverAndClick', (hoverSelector, clickSelector) => {
  cy.get(hoverSelector).realHover();
  cy.get(clickSelector).should('be.visible').click();
});
