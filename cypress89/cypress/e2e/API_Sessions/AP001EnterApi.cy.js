/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Hataları yakalamak için
});

const url = 'https://www.google.com/';

describe('API OO1 Cypress Apı Kullanımı', () => {
  it('APOO1 Test01', () => {
    cy.visit(url);

    const simpleObject = {
      "key1": "deger1",
      "key2": "deger2",
      "key3": "deger3"
    };

    console.log(simpleObject.key1); // "deger1"

    const ArrayValueSet = ["0Ahmet", "1Mehmet", "2Ali", "3Veli", "4Ayşe", "5Fatma", "6Selami"];
    console.log(ArrayValueSet[2] + " " + ArrayValueSet[3] + " " + ArrayValueSet[4]); // "2Ali 3Veli 4Ayşe"

    cy.log("************ " + ArrayValueSet[2] + " " + ArrayValueSet[3] + " " + ArrayValueSet[4] + " ************");
    cy.log(simpleObject.key3); // "deger3"

    console.log("**********************************************************************************");

    const ArrayValueSet2 = [
      {
        "k1": "h",
        "k2": "e",
        "k3": "l",
        "k4": "l",
        "k5": "o",
        "k6": " ",
        "k7": "w",
        "k8": "o",
        "k9": "r",
        "k10": "l",
        "k11": "d",
      },
      {
        "l1": "h",
        "l2": "e",
        "l3": "l",
        "l4": "l",
        "l5": "o",
        "l6": " ",
        "l7": "w",
        "l8": "o",
        "l9": "r",
        "l10": "l",
        "l11": "d",
      },
      {
        "m1": "h",
        "m2": "e",
        "m3": "l",
        "m4": "l",
        "m5": "o",
        "m6": " ",
        "m7": "w",
        "m8": "o",
        "m9": "r",
        "m10": "l",
        "m11": "d",
      },
      {
        "n1": "h",
        "n2": "e",
        "n3": "l",
        "n4": "l",
        "n5": "o",
        "n6": " ",
        "n7": "w",
        "n8": "o",
        "n9": "r",
        "n10": "l",
        "n11": "d",
      }
    ];


    console.log(
      ArrayValueSet2[0].k1 +
      ArrayValueSet2[1].l2 +
      ArrayValueSet2[2].m3 +
      ArrayValueSet2[3].n4 +
      ArrayValueSet2[0].k5 +
      ArrayValueSet2[1].l6 +
      ArrayValueSet2[2].m7 +
      ArrayValueSet2[3].n8 +
      ArrayValueSet2[0].k9 +
      ArrayValueSet2[1].l10 +
      ArrayValueSet2[2].m11 +
      ArrayValueSet2[3].n11
    );

    cy.log(
    ArrayValueSet2[0].k1 +
          ArrayValueSet2[1].l2 +
          ArrayValueSet2[2].m3 +
          ArrayValueSet2[3].n4 +
          ArrayValueSet2[0].k5 +
          ArrayValueSet2[1].l6 +
          ArrayValueSet2[2].m7 +
          ArrayValueSet2[3].n8 +
          ArrayValueSet2[0].k9 +
          ArrayValueSet2[1].l10 +
          ArrayValueSet2[2].m11 +
          ArrayValueSet2[3].n11


    );


        let message = '';

        for (let i = 0; i < ArrayValueSet2.length; i++) {
          const obj = ArrayValueSet2[i];

          message += obj[`k${i + 1}`] || obj[`l${i + 1}`] || obj[`m${i + 1}`] || obj[`n${i + 1}`];
        }

        console.log(message);

        cy.log(message);


       const reQuestBody = {
         student1: {
           firstName: "laz",
           lastName: "Korsan",
           email: "lazKorsan240120262147@gmail.com",
           password: "Query.2026",
           confirmPassword: "Query.2026"
         },
         student2: {
         firstName:"laz",
         lastName:"Bakkal",
         email:"lazBakkal240120262147@gmail.com",
         password:"Query.2026",
         confirmPassword:"Query.2026"
         }
       };

       cy.log(
       reQuestBody.student1.firstName+reQuestBody.student1.lastName
       +reQuestBody.student2.firstName+reQuestBody.student2.lastName
       );
       console.log(
       reQuestBody.student1.firstName+reQuestBody.student1.lastName
       +reQuestBody.student2.firstName+reQuestBody.student2.lastName
       );

      // Dizinin dolu olduğundan ve 2. elemanın var olduğundan emin olalım
      if (reQuestBody && reQuestBody.length > 1) {
          cy.log(`İsim: ${reQuestBody[1].firstName} - Şifre: ${reQuestBody[1].password}`);
      } else {
          cy.log('Dizide yeterli veri yok!');
      };


      // Student 1'in verilerini yazdır
           cy.log(`Öğrenci 1: ${reQuestBody.student1.firstName} ${reQuestBody.student1.lastName}`);
           console.log(`Öğrenci 1: ${reQuestBody.student1.firstName} ${reQuestBody.student1.lastName}`);

           // Student 2'nin verilerini yazdır
           cy.log(`Öğrenci 2: ${reQuestBody.student2.firstName} ${reQuestBody.student2.lastName}`);
           console.log(`Öğrenci 2: ${reQuestBody.student2.firstName} ${reQuestBody.student2.lastName}`);





  });
});
