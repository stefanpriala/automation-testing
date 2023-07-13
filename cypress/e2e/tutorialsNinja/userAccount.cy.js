/// <reference types="Cypress" />


import {email, password} from 'C:/Users/stefan.priala/Desktop/cytest/cypress/fixtures/ninjaUser.json'


describe('User Login Custom Command - assignment', () =>{

  let randomNR=""
  let testNR=""

    it('User should successfully login', ()=>{
      cy.userLogin(email, password)
      cy.visit('https://tutorialsninja.com/demo/index.php?route=account/account')

      cy.url().should('contain','/account')

      cy.get('.caret').click()

      cy.get('.dropdown-menu > :nth-child(1) > a').contains('My Account').should('be.visible')
      cy.get('.dropdown-menu > :nth-child(5) > a').contains('Logout').should('be.visible')
      cy.get('#content > :nth-child(1)').contains('My Account').should('be.visible')

    })

    it('validate that user can access edit account page', ()=>{
      cy.userLogin(email, password)
      cy.visit('https://tutorialsninja.com/demo/index.php?route=account/account')
      cy.get('#content > :nth-child(2) > :nth-child(1) > a').click()

      cy.url().should('contain','/edit')
      cy.get('#content > h1').contains('My Account Information').should('be.visible')

      })

    it('validate that user can access edit account page and update phone #', ()=>{
        cy.userLogin(email, password)
        cy.visit('https://tutorialsninja.com/demo/index.php?route=account/edit')

        const nr = `${Cypress._.random(10e9)}`
        
        cy.get('#input-telephone').clear().type(nr)
        cy.get('.pull-right > .btn').click()
        cy.get('.alert').contains('Success: Your account has been successfully updated.')
        cy.get('#content > :nth-child(2) > :nth-child(1) > a').click()
        cy.get('#input-telephone').should('have.value',nr)

})


it('validate that user can add an item to wishlist', ()=>{
  cy.userLogin(email, password)
  cy.visit('https://tutorialsninja.com/demo/index.php?route=product/category&path=57')

  cy.get('[data-original-title="Add to Wish List"]').click()

  cy.get('.alert').should('be.visible').contains('Success: You have added Samsung Galaxy Tab 10.1 to your wish list!')

  cy.get('.alert > [href="https://tutorialsninja.com/demo/index.php?route=account/wishlist"]').click()
  cy.get('h2').should('be.visible').contains('My Wish List')
  cy.get('tr > :nth-child(2) > a').contains('Samsung Galaxy Tab 10.1')
  cy.get('#content > p').should('not.exist')
  
})

it('validate that user can logout from the page', ()=>{
  cy.userLogin(email, password)
  cy.visit('https://tutorialsninja.com/demo/index.php?route=account/account')

  cy.get('.caret').click()
  cy.get('.dropdown-menu > :nth-child(5) > a').click()

  cy.get('#content > h1').should('be.visible').contains('Account Logout')
  
})
})
