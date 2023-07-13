/// <reference types="Cypress" />


describe('Intercept with Cypress examples', () =>{

    it('validate status code for the post comment request', ()=>{

      cy.visit('https://example.cypress.io/commands/network-requests')

      cy.intercept({method: 'POST', url: '/comments'}).as('postComment')

      cy.get('.network-post').contains('Post Comment').click()

      cy.wait('@postComment').its('response.statusCode').should('eq', 201)

    })

    it('validate comment visibility on the page', ()=>{

        cy.visit('https://example.cypress.io/commands/network-requests')
  
        cy.intercept({method: 'POST', url: '/comments'}).as('postComment')
  
        cy.get('.network-post').contains('Post Comment').click()
  
        cy.wait('@postComment').its('response.statusCode').should('eq', 201)

        cy.get('.network-post-comment').contains('POST successful!').should('be.visible')
  
      })


    
})