/// <reference types="Cypress" />

const {baseUrl, envTag} = Cypress.config();

describe('Conditional Testing', () => {
    it("Should visit the homepage", () => {
        
        cy.visit('')

        cy.url().should('eq',baseUrl)

        switch(true) {

            case envTag === "cypressQA":

                cy.get('h1').contains('Kitchen Sink').should('be.visible')
                break;
            case envTag === "cypressPROD":
                {
                    cy.get('h1').contains('Test. Automate. Accelerate.').should('be.visible')
                    break;
                }
        }
    })

    it("should run this test only on Cypress QA end", () => {

        cy.onlyOn( envTag == ("cypressQA") );
        cy.log('running test on qa env')

        cy.visit('')
        cy.url().should('eq', baseUrl)
        cy.get('.navbar').contains('Utilities').click();

        cy.url().should('contain','/utilities')
        cy.get('h1').contains('Utilities').should('be.visible')
    })
        })
      
   