/// <reference types="Cypress" />

describe('verify downloads', ()=>{

    
        it('will check if plugin works',()=> {

           cy.visit('https://testpages.herokuapp.com/styled/download/download.html')

           cy.get('#direct-download')
             .should('be.visible')
             .click()
           cy.verifyDownload('textfile.txt')  
        })
        
})