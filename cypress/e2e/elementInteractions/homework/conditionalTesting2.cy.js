/// <reference types="Cypress" />

const {baseUrl, envTag} = Cypress.config();

describe('Conditional Testing', () => {
    it.only("Should visit the homepage", () => {
        
        cy.visit('')
        cy.url()
          .should('eq',baseUrl)

        switch(true) {
            case envTag === "cypressQA":

                    cy.get('h1')
                      .contains('Kitchen Sink')
                      .should('be.visible')
                    cy.get('#navbar > :nth-child(1) > :nth-child(3) > a')  
                      .should('be.visible')
                    cy.get('.pull-right > li > a')  
                      .should('be.visible')

                    break;
            case envTag === "cypressPROD":

                {   cy.viewport('macbook-16')
                    cy.get('h1')
                      .contains('Test. Automate. Accelerate.')
                      .should('be.visible')
                    cy.get('[data-cy="header-login"]')
                      .should('be.visible')
                      .and('contain','Log In')
                    cy.get('[data-cy="header-install"]')
                      .should('be.visible')
                      .and('contain','Install')
                      
                    break;
                }
        }
    })

    it("should run this test only on Cypress QA env", () => {

        cy.onlyOn( envTag == ("cypressQA") );
        cy.log('running test on qa env')

        cy.visit('')
        cy.url().should('eq', baseUrl)
        cy.get('.navbar').contains('Utilities').click();

        cy.url().should('contain','/utilities')
        cy.get('h1').contains('Utilities').should('be.visible')
    })
        })
      
   