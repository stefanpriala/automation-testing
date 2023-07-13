/// <reference types="Cypress" />

describe('Dropdowns with select', () =>{
    beforeEach(()=>{

        cy.visit("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")

        cy.get('#dropdowm-menu-1').should('be.visible')

    })
  
    it("Select SQL from the first Dropdown", () =>{
 
        cy.get('#dropdowm-menu-1')
         .select('sql')
         .should('have.value','sql')
        
        })

    it("Select Java from the first Dropdown", () =>{
    
            cy.get('#dropdowm-menu-1')
            .select('java')
            .should('have.value','java')
           
        })   
    
    it("Select C# from the first Dropdown", () =>{
 
            cy.get('#dropdowm-menu-1')
            .select('c#')
            .should('have.value','c#')
           
        })
       
    it("Select Pyhton from the first Dropdown", () =>{
 
            cy.get('#dropdowm-menu-1')
            .select('python')
            cy.get('#dropdowm-menu-1').should('contain','Python')
           
        })

 
    })