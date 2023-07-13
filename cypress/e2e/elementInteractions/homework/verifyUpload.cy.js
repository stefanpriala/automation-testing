/// <reference types="Cypress" />

describe('fixtures homework - upload file', () => {
    it("test upload file", () => {
        
        cy.visit("https://testpages.herokuapp.com/styled/file-upload-test.html")

        cy.get('#fileinput')
          .selectFile('cypress/fixtures/imageFile.jpg')

        cy.get('#itsanimage')
          .check()
        
        cy.get('.styled-click-button')
          .click()

        cy.get('.explanation > p')
          .should('be.visible')
          .and('contain','You uploaded a file. This is the result.')  

        cy.get('#uploadedfilename')  
          .should('be.visible')
          .and('contain', 'imageFile')

        })
      })
   