/// <reference types="Cypress" />

describe('handle dropdowns', () =>{

  
    it.skip("dropdown with select", () =>{
 
         cy.visit("https://www.zoho.com/commerce/free-demo.html")
 
         cy.get('#zcf_address_country').select('Brazil')
         .should('have.value','Brazil')
        
 
        })
 
    it.skip("dropdown without select", () =>{
 
            cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
    
            cy.get('#select2-billing_country-container').click()
           
            cy.get('.select2-search__field').type('Brazil').type('{enter}')

            cy.get('#select2-billing_country-container').should('have.text','Brazil')

        })
 
    it.skip("auto suggest dropdown", () =>{
 
                cy.visit("https://www.wikipedia.org")
        
                cy.get('#searchInput').type('brazil')

                cy.get('.suggestion-title').contains('Brazilian jiu-jitsu').click()
               
        })  
                
                

    it("dynamic dropdown", () =>{
 
                    cy.visit("https://www.google.com")
                    cy.get('#L2AGLb > .QS5gu').click()
                    cy.get('#APjFqb').type('cypress automation')
                    cy.get('div.wM6W7d>span').should('have.length',12)

                   cy.get('div.wM6W7d>span').each( ($el, index, $list)=>{

                           if($el.text()==='cypress automation tool')
                           {
                            cy.wrap($el).click()
                           }                     
                   })

                   cy.get('#APjFqb').should('have.value','cypress automation tool')
                   
        })  








 })