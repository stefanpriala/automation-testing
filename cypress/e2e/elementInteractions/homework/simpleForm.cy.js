/// <reference types="Cypress" />

describe('Contact Us', () =>{
    beforeEach(()=>{

        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")

    })
  
    it("Sends form with invalid email address", () =>{

        cy.get('input[name="first_name"]')
          .should('be.visible')
          .type('Josh')

        cy.get('input[name="last_name"]')
          .should('be.visible')
          .type('Malone') 

        cy.get('input[name="email"]')
          .should('be.visible')
          .type('invalid@')   

        cy.get('textarea[name="message"]')
          .should('be.visible')
          .type('just a message') 

        cy.get('[type="submit"]')
          .should('be.visible')
          .click()

        cy.get('body')
          .contains('Error: Invalid email address')
          
    })


    it("Sends form without required fields", () =>{

        cy.get('input[name="email"]')
          .should('be.visible')
          .type('valid@mail.com')   

        cy.get('[type="submit"]')
          .should('be.visible')
          .click()

        cy.get('body')
          .contains('Error: all fields are required') 

    })

    it("Successfully Sends form with valid data", () =>{

        cy.get('input[name="first_name"]')
          .should('be.visible')
          .type('Josh')

        cy.get('input[name="last_name"]')
          .should('be.visible')
          .type('Malone') 

        cy.get('input[name="email"]')
          .should('be.visible')
          .type('valid@email.com')   

        cy.get('textarea[name="message"]')
          .should('be.visible')
          .type('just a message') 

        cy.get('[type="submit"]')
          .should('be.visible')
          .click()

        cy.url()
          .should('include','/contact-form-thank-you.html')
        cy.url()
          .should('eq','https://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html')

        cy.get('#contact_reply')
          .contains('Thank You for your Message!')

    })





})