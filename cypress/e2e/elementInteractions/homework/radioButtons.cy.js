/// <reference types="Cypress" />

describe('Radio Buttons', () =>{
    beforeEach(()=>{

        cy.visit("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")

    })
  
    it("Marks each radio button", () =>{

        cy.getInputByName("color")
          .should('have.length',5)
          .should('be.visible')
          .should('not.be.checked')

        cy.getInputByValue("green")
          .should('be.visible')
          .check()
          .should('be.checked')

        cy.getInputByValue("blue")
          .should('be.visible')
          .check()
          .should('be.checked')  

        cy.getInputByValue("green")
          .should('be.visible')
          .should('not.be.checked')

        cy.getInputByValue("yellow")
          .should('be.visible')
          .check()
          .should('be.checked')  

        cy.getInputByValue("blue")
          .should('be.visible')
          .should('not.be.checked')

        cy.getInputByValue("orange")
          .should('be.visible')
          .check()
          .should('be.checked')  

        cy.getInputByValue("yellow")
          .should('be.visible')
          .should('not.be.checked')

        cy.getInputByValue("purple")
          .should('be.visible')
          .check()
          .should('be.checked')  

        cy.getInputByValue("orange")
          .should('be.visible')
          .should('not.be.checked')

        })

    it("Verifies state of radio buttons", () =>{    

        cy.getInputByValue("lettuce")
          .should('be.visible')
          .should('be.not.checked')

        cy.getInputByValue("cabbage")
          .should('be.disabled')
          
        cy.getInputByValue("pumpkin")
          .should('be.visible')
          .should('be.checked')

        cy.getInputByValue("lettuce")
          .check()
          .should('be.checked')

        cy.getInputByValue("pumpkin")
          .should('be.visible')
          .should('not.be.checked')  

        cy.getInputByValue("cabbage")
          .should('be.disabled')
    })

    })