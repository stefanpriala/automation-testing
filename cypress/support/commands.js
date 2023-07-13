// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


/// <reference types="Cypress" />   // for Cypress
///reference types="cypress-xpath" />   //for xpath


Cypress.Commands.add("getInputByValue", (selector) => {
    return cy.get(`input[value=${selector}]`)
})



Cypress.Commands.add("getInputByName", (selector)=>{
    return cy.get(`input[name=${selector}]`)
})

Cypress.Commands.add("loginAdmin", (username, password)=>{

    cy.session([username, password],()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get("input[name='username']").type(username)
        cy.get("input[name='password']").type(password)

        cy.get("button[type='submit']").click()

        cy.get('.oxd-userdropdown-tab').should('be.visible')
    })

})

Cypress.Commands.add("userLogin", (email, password)=>{

    cy.session([email, password],()=>{

        cy.visit('https://tutorialsninja.com/demo/')

        cy.get('.caret').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()


        cy.get('#input-email').type(email)
        cy.get('#input-password').type(password)

        cy.get('form > .btn')

        cy.get('#content > :nth-child(1)').should('be.visible')
    })

})