
// Uygulama hatalarını yoksay
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

// Varsayılan kullanıcı bilgileri
const email = 'lazKorsan240120262147@gmail.com';
const password = 'Query.2026';

class LoyalHomePage {

         getUserMail(){

             return cy.get('[name="email"]').click().type(email);
         }
         getUserPassword(){

             return cy.get('[name="password"]').click().type(password);
         }

         getURLLogin(){
             return cy.visit('https://qa.loyalfriendcare.com/en/login');
         }

         getSignInButton(){
         return cy.get('.btn').click();
         }

         getLogoutButton(){
         return cy.get('#top_menu a[href="https://qa.loyalfriendcare.com/en/logout"]').click();
         }
}

export default LoyalHomePage;

