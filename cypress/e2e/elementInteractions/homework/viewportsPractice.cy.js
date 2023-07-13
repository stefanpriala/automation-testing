/// <reference types="Cypress" />

const sizes = ['iphone-8', 'iphone-x', 'iphone-xr']

describe('viewports example', ()=>{

    sizes.forEach((size)=>{
        it('will check on different sizes',()=> {

            cy.viewport(size);
            cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home')
            cy.get('[data-toggle="collapse"]')
              .should('be.visible')
              .click()

            cy.get('ul.nav.navbar-nav>LI')
              .should('have.length',8)  
        })
        
    })
})