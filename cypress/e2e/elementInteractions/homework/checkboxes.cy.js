describe('Checkboxes', () =>{
    beforeEach(()=>{

        cy.visit("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")


    })
  
    it("Checks/Unchecks 1 checkbox", () =>{
 
        cy.get('input[value="option-1"]')
           .should('be.visible')
           .check()
           .should('be.checked')
        cy.get('input[value="option-1"]')
          .should('be.visible')
          .uncheck()
          .should('not.be.checked')
        })

    it("Checks/Unchecks Option 2 checkbox", () =>{
 
        cy.get('input[value="option-2"]')
            .should('be.visible')
             .check()
             .should('be.checked')
        cy.get('input[value="option-2"]')
            .should('be.visible')
            .uncheck()
            .should('not.be.checked')
        })  

    it("Checks/Unchecks Option 3 checkbox", () =>{
 
        cy.get('input[value="option-3"]')
            .should('be.visible').should('be.checked')
            
        cy.get('input[value="option-3"]')
            .should('be.visible')
            .uncheck()
            .should('not.be.checked')
        cy.get('input[value="option-3"]')
            .should('be.visible')
            .check()
            .should('be.checked')    

        })          
        
    it("Checks/Unchecks Option 4  checkbox", () =>{
 
        cy.get('input[value="option-4"]')
          .should('be.visible')
          .check()
          .should('be.checked')
        cy.get('input[value="option-4"]')
            .should('be.visible')
            .uncheck()
            .should('not.be.checked')
    
        }) 
    })