/// <reference types="Cypress" />


describe('Intercept with Cypress examples', () =>{

    it.skip('test api with simple intercept', ()=>{

      cy.visit('https://example.cypress.io/commands/network-requests')

      cy.intercept({method: 'GET', url: '/comments/1'}).as('getComment')

      cy.get('.network-btn').contains('Get Comment').click()

      cy.wait('@getComment').its('response.statusCode').should('eq', 200)

    })

})