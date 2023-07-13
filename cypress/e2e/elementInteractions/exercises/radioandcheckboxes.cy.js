/// <reference types="Cypress" />

describe('check ui elements', () =>{

   /* it("checking radio buttons", () =>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation/")

        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')


    })*/

    it("checking radio buttons", () =>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation/")

        cy.get("input#monday").should('be.visible').check().should('be.checked')
        cy.get("input#monday").should('be.visible').uncheck().should('not.be.checked')

        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')

        })



})