describe('fixtures homework - login feature', () => {
    it.only("test login scenarios", () => {
      cy.fixture('practiceLoginDataSet').then((data) => {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
  
        data.forEach((userdata) => {
          cy.get('#username').clear().type(userdata.username)
          cy.get('#password').clear().type(userdata.password)
          cy.get('#submit').click()
  
          cy.url().then((url) => {
            if (url.includes('/logged-in-successfully/')) {
              cy.get('.post-title')
                .should('be.visible')
                .and('contain', userdata.expected)
              cy.get('.wp-block-button__link')
                .should('be.visible')
                .and('have.text', 'Log out')
                .click()
            } else {
              cy.get('#error')
                .should('be.visible')
                .and('have.text', userdata.expected)
            }
          })
        })
      })
    })
  })
  
  
  
  
  
  /*/// <reference types="Cypress" />

describe('fixtures homework - login feature', () =>{

    it.only("test login scenarios", () =>{
 
        cy.fixture('practiceLoginDataSet').then( (data) =>{

        cy.visit("https://practicetestautomation.com/practice-test-login/")

        data.forEach((userdata) =>{
            cy.get('#username').clear().type(userdata.username)
            cy.get('#password').clear().type(userdata.password)
            cy.get('#submit').click()

            if(userdata.username === "invalidUsername")
            {
                cy.get('#error')
                  .contains(userdata.expected)
                  .should('be.visible')
                  .and('have.text', 'Your username is invalid!')
            }
            else if(userdata.password === "invalidPassword")
            {
                cy.get('#error')
                  .contains(userdata.expected)
                  .should('be.visible')
                  .adn('have.text', 'Your password is invalid!')
            }
            else
            {
                cy.get('.post-title')
                  .should('be.visible')
                  .and('contain', userdata.expected)
                cy.url()
                  .should('include', '/logged-in-successfully/')
                cy.get('.wp-block-button__link')
                  .should('be.visible')
                  .and('have.text','Log out')
                  .click()
            }

        })

    })

})
})*/
