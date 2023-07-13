/// <reference types="Cypress" />


describe('Intercept with Cypress examples', () =>{

    it.skip('test api with simple intercept', ()=>{

      cy.visit('https://example.cypress.io/commands/network-requests')

      cy.intercept({method: 'GET', url: '/comments/1'}).as('getComment')

      cy.get('.network-btn').contains('Get Comment').click()

      cy.wait('@getComment').its('response.statusCode').should('eq', 200)

    })

    it.skip('wait for comment and validate its visibility on the page', ()=>{

        cy.visit('https://example.cypress.io/commands/network-requests')
  
        cy.intercept({method: 'GET', url: '/comments/1'}).as('getComment')
  
        cy.get('.network-btn').contains('Get Comment').click()

        cy.wait('@getComment')
  
        cy.get('.network-comment').contains('laudantium enim quasi est quidem magnam voluptate ipsam').should('be.visible')
  
      })

      it.skip('verifies text visibility on the page after button is clicked - stubbed response body', ()=>{

        cy.visit('https://example.cypress.io/commands/network-requests')
  
        cy.intercept('GET', '/comments/1', {fixture: 'comment.json' }).as('getComment')
  
        cy.get('.network-btn').contains('Get Comment').click()

        cy.wait('@getComment')
  
        cy.get('.network-comment').contains('this is a test').should('be.visible')
  
      })

      it('makes assertions on the response body', ()=>{

        cy.visit('https://example.cypress.io/commands/network-requests')
  
        cy.intercept({method: 'GET', url: '/comments/1'}).as('getComment')
  
        cy.get('.network-btn').contains('Get Comment').click()

        cy.wait('@getComment').its('response.statusCode').should('eq', 200)
  
        cy.get('@getComment').should(({response})=>{

            expect(response.body).to.have.property('postId', 1)
            expect(response.body).to.have.property('id', 1)
            expect(response.body).to.have.property('name', 'id labore ex et quam laborum')
            expect(response.body).to.have.property('email', 'Eliseo@gardner.biz')

        })
  
      })




})