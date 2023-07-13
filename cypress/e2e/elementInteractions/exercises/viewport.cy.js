/// <reference types="Cypress" />

const sizes = ['iphone-6', 'ipad-2', 'macbook-16']

describe('viewports example', ()=>{

    sizes.forEach((size)=>{
        it('examples',()=> {

            cy.viewport(size);
            cy.visit('https://www.cypress.io')
            cy.get('[data-cy="main"]').should('be.visible')
        })
        
    })
})