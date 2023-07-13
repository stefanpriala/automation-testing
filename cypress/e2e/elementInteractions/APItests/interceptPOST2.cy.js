/// <reference types="Cypress" />


describe('makes assertions on the response body', () =>{

    it('makes assertions on the response body 1', ()=>{

      cy.visit('https://example.cypress.io/commands/network-requests')

      cy.intercept({method: 'POST', url: '/comments'}).as('postComment')

      cy.get('.network-post').contains('Post Comment').click()

      cy.wait('@postComment').its('response.statusCode').should('eq', 201)

      cy.get('@postComment').should(({response})=>{

        expect(response.body).to.have.property('body', 'You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE')
        expect(response.body).to.have.property('id', 501)
        expect(response.body).to.have.property('name', 'Using POST in cy.intercept()')
        expect(response.body).to.have.property('email', 'hello@cypress.io')
      })


    })

    it('makes assertions on the response body - stubbed', ()=>{

        cy.visit('https://example.cypress.io/commands/network-requests')
  
        cy.intercept('POST', '/comments', {fixture: 'POSTcomment.json' }).as('postComment')
  
        cy.get('.network-post').contains('Post Comment').click()

        cy.wait('@postComment').its('response.statusCode').should('eq', 200)
  
        cy.get('.network-post-comment').contains('POST successful!').should('be.visible')

        cy.get('@postComment').should(({response})=>{

            expect(response.body).to.have.property('body','this is a test' )
            expect(response.body).to.have.property('id', 1001)
            expect(response.body).to.have.property('name', 'test name2')
            expect(response.body).to.have.property('email', 'stef@test.com')
      })

    })
})